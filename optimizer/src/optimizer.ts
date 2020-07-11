import {
    MAX_DELETE, undeletablefn, undeletable1,
    todoDeletable, deleteIifeBlocks, keepFnName,
    todoAutomize, deletableFunctions,
    deleteLOC1, specialReplacements
}
    from './config';

    let deleteLOC = [];
const DIST_FOLDER ='./../demo';
const ASSETS_FOLDER = `./assets`;
const FOO = `foo`;
const BADGE_RAW = '../badge_raw.svg';
const BADGE_FINAL = '../badge.svg';
const RAW_FILE = `${ASSETS_FOLDER}/${FOO}.js`;
const MIN_FILE = `${DIST_FOLDER}/prod/new-${FOO}.min.js`;
const MIN_FILE_BASE = `${DIST_FOLDER}/base-${FOO}.min.js`;
const DIST_FILE_DEV = `${DIST_FOLDER}/dev/new-${FOO}.js`; // `${ASSETS_FOLDER}/dist/new-foo.min.js`;
const RAW_FILE_NAME = `${FOO}.js`;
let replacement = '\n';
const fs = require('fs');

const writeBadge = (rob) => {
    fs.readFile(BADGE_RAW, 'utf8', (error, data) => {
        if (error) return console.log(colorize(RED, `🗙 Badge is written (error ${error})`));
        data = data.replace(/\{\{file_raw\}\}/g, rob.start);
        data = data.replace(/\{\{file_red\}\}/g, rob.end);
        data = data.replace(/\{\{file_min\}\}/g, rob.minEnd);
        data = data.replace(/\{\{file_gzip\}\}/g, rob.gzip);
        data = data.replace(/\{\{reduced_by\}\}/g,rob.reducedBy);
        fs.writeFile(BADGE_FINAL, data, 'utf8', (error) => {
            if (error) return console.log(colorize(RED, `🗙 Badge is written (error ${error})`));
            console.log(colorize(GREEN, `✓ Badge is written`));
        });
    });
}

const NEW_FILE = `${ASSETS_FOLDER}/new-${FOO}.js`;


const readline = require('readline');
const notifier = require('node-notifier');
const path = require('path');

let noRun = false;
let show = {
    output: false,
    delete: false,
    deleteStatus: false
}
let metrics = {
    ok: 0,
    deleted: 0,
    error: 0,
    potential: 0
}

const time = new Date().getTime();

const updateLineStatus = (LOB) => {
    let color = WHITE;
    switch (LOB.lineStatus) {
        case STATUS.ERROR:
            color = RED;
            metrics.error++;
            break;
        case STATUS.REMOVED:
            color = YELLOW;
            // metrics.deleted++;
            break;
        case STATUS.POTENTIAL:
            color = BLUE;
            metrics.potential++;
            break;
        default:
            color = WHITE;
            metrics.ok++;
    }
    if (show.output) {
        readline.cursorTo(process.stdout, 0);
        process.stdout.write(
            'line:  ' + colorize(WHITE, cntr.toString()) +
            '| ok: ' + colorize(GREEN, metrics.ok.toString()) +
            '| deleted: ' + colorize(YELLOW, metrics.deleted.toString()) +
            '| potential: ' + colorize(BLUE, metrics.potential.toString()) +
            '| error: ' + colorize(RED, metrics.error.toString())
        );
    }
}

let specialReplacementLines = [];
let specialReplacementValues = [];
specialReplacements.forEach((entry) => {
    specialReplacementValues.push(entry.value);
    specialReplacementLines.push(entry.line);
})


let undeletable = [];
const prepareArray = (oldArray) => {
    let array = []; 
    oldArray.forEach((v, i) => {
        if (typeof v !== 'number') { //[LOC, LOC] - multiple LOCs
            array.push(v[0]);
            let i = v[0]
            while (i < v[1]) {
                array.push(i++);
            }
            array.push(i);
        } else {
            array.push(v); // LOC
        }
    });
    return array;
}
undeletable = prepareArray(undeletable1);
deleteLOC = prepareArray(deleteLOC1);

const getFileSize = (file, isNumber = true) => {
    const{ spawnSync } = require('child_process'),
    ls = spawnSync('du', ['-hs', file]);
    const size = ls.stdout.toString().match(/^([^\s])*/);
    return isNumber ? size[0].match(/(\d*)/)[0] : size[0];
}
const getFileSize2 = (file, isNumber = true) => {
    const{ spawnSync } = require('child_process'),
    ls = spawnSync('ls', ['-l', file]);
    const size = parseInt(ls.stdout.toString().split(' ')[4]);
    return Math.round(size/1024*100)/100;
}
const uglifyFile = (file, newFile) => {
    const { exec } = require('child_process');
    exec('uglifyjs ' + file + ' -c -o ' + newFile, (error, stdout, stderr) => {
        if (error) {
            console.log(colorize(RED, `🗙 files uglified (error ${error})`));
            return;
        }
        console.log(colorize(GREEN, `✓ files uglified`));


        exec(`git status -s -uno ${DIST_FOLDER} | wc -l`, (error, stdout, stderr) => {
            if (error) {
                console.log(colorize(RED, `🗙 git status error`));
                return;
            }
            if(stdout == 0){
                console.log(colorize(GREEN, `✓ no changes in dist`));
                // console.log(colorize(GREEN, `✓ no new badge written`));
                const rob = new ResultObject(RAW_FILE, DIST_FILE_DEV, MIN_FILE, MIN_FILE_BASE);
                writeBadge(rob);
                exec(`git diff --unified=0 ./../badge.svg `, (error, stdout, stderr) => {
                    if (error) {
                        console.log(colorize(RED, `🗙 git diff error`));
                        return;
                    }
                    if(stdout.length === 0){
                        console.log(colorize(GREEN, `✓ Badge has no changes`));
                    } else {
                        console.log(colorize(RED, `🗙 Badge has changes`));
                        console.log(stdout);
                    }

                });
            } else {
                console.log(colorize(RED, `🗙 no changes in dist`));
                // console.log(colorize(RED, `🗙 new badge written`));
                // TODO: create badge
                const rob = new ResultObject(RAW_FILE, DIST_FILE_DEV, MIN_FILE, MIN_FILE_BASE);
                exec(`git diff ${DIST_FOLDER}/dev/new-foo.js `, (error, stdout, stderr) => {
                    if (error) {
                        console.log(colorize(RED, `🗙 git diff error`));
                        return;
                    }
                    console.log(stdout);
                });
                writeBadge(rob);
            }
        });
    });

}




const coverageData = JSON.parse(fs.readFileSync(`${ASSETS_FOLDER}/coverage/coverage-final.json`, 'utf8'));

const updateIndexFile = () => {
    const indexData = JSON.parse(fs.readFileSync(`${ASSETS_FOLDER}/dist/index.html`, 'utf8'));
}


var testFile = fs.readFileSync(`${RAW_FILE}`, 'utf8');
const getTargetData = (obj, RAW_FILE_NAME) => {
    let key = '';
    let targetData = false;
    Object.keys(obj).forEach(object => {
        if (object.indexOf(RAW_FILE_NAME) !== -1) {
            key = object;
        }
    });
    if (key !== '') {
        targetData = obj[key];
    }
    return targetData;
}

function colorize(color, output) {
    return `\u001b[${color}m${output}\u001b[0m`
}
//const GREEN = '\x1b[32m%s\x1b[0m';


const GREEN = '32';
const RED = '31';
const YELLOW = '33';
const MAGENTA = '35';
const BLUE = '34';
const WHITE = '37';

const REGEX_NAMED_FUNCTION = /^\s*function\s[^\(]+\(\)\s*\{\}\s*$/;
const REGEX_ANONYM_FUNCTION = /^\s*var\s[^\s]+\s*\=\s*function\(\)\s*\{\};*$/;

const coverageObj = getTargetData(coverageData, RAW_FILE_NAME);
if (!coverageObj) {
    //('no coverage data')
}; //stop program


const fnObj = coverageObj['fnMap'];
const fnObjCov = coverageObj['f'];

// const stObj = coverageObj['statementMap'];
// const stObjCov = coverageObj['s'];

const bObj = coverageObj['branchMap'];
const bObjCov = coverageObj['b'];
const sObj = coverageObj['statementMap'];
const sObjCov = coverageObj['s'];


coverageObj['s'] //statements, ohne funktionen, line number not the same
const deletableStatements = [];
const getRemovableStatements = (obj, objCov) => {
    if (noRun) {
        return;
    }
    Object.keys(obj).forEach((recordID) => {
        const statement = obj[recordID];
        const isCovered = objCov[recordID] > 0;
        // const id = Number.parseInt(recordID);
        let multiLine = true;
        if (!isCovered) {
            if (statement['start']['line'] === statement.end.line) {
                multiLine = false;
            }
            const newEntry = {
                'start': statement['start']['line'],
                'multiline': multiLine,
                'location': statement
            }
            deletableStatements.push(newEntry);
        }

    });
}
if (!noRun) {
    getRemovableStatements(coverageObj['statementMap'], coverageObj['s'])
}

const isInAnotherBlock = (removeLinesArray, loc ) => {
    // not necessary gleiche reihenfolge oder one-line
    // start und end vergleichen
    // z.b. zeile 3 nicht gecover
    if (removeLinesArray.length > 0) {
        let entry = removeLinesArray[removeLinesArray.length - 1];
        if(loc.start.line < (entry.start.line || entry.end.line)){
            return true;
        }
    } else {
        return false;
    }
}
const getRemovableData = (obj, objCov, type) => {
    let removeLinesArray = [];
    let countRecords = 0;
    if (type == 's' || type == 'f') {
        Object.keys(obj).forEach(recordID => {
            if (type == 'f' && isInAnotherBlock(removeLinesArray, obj[recordID].loc )){
                    return 
            }
            let loc = type == 's' ? obj[recordID] : obj[recordID].loc;
            if (objCov[recordID] === 0) {
                removeLinesArray.push(loc)
                countRecords++;

            }
        })
    }
    return removeLinesArray;
}



const writeNewLine = (fs, file, newLine, mode?) => {
    // var mod = cntr == 0 ? 'w' : 'a';
    const ADD_MODE = { encoding: 'utf8', flag: 'a' };
    // fs.writeFileSync(file, '', )
    fs.writeFileSync(file, newLine, ADD_MODE);
}
// % Stmts | % Branch | % Funcs | % Lines 
// let bRemoveLines = getRemovableData(bObj, bObjCov, 'b');
let removeStatements = getRemovableData(sObj, sObjCov, 's');
let removeFunctions = getRemovableData(fnObj, fnObjCov, 'f');
let removeStatementsOrder = [];

// order lines: removeStatements.forEach(item => {

// reset file
if (fs.existsSync(NEW_FILE)) {
    fs.unlinkSync(NEW_FILE);
}
// console.log('file deleted')
fs.writeFileSync(NEW_FILE, '', { encoding: 'utf8', flag: 'w+' });
console.log(colorize(GREEN, `✓ new test file ${NEW_FILE} created`));
var cntr = 0;

var rl = readline.createInterface({
    input: fs.createReadStream(RAW_FILE),
});

let isDeleting = false;
let i = 0;
let removeLinesLen = removeStatements.length;

enum STATUS {
    OK = 0,
    REMOVED = 1,
    ERROR = 2,
    POTENTIAL = 3
}

let prevLine = '';
// let lineStatus = 0;

const IF = /^(\s*)if\s*\(.*\)\s*\{\s*$/;
const MULTILINE_IF_OPEN = /^(\s*)(if|for)\s\([^\)]*$/;
const MULTILINE_IF_CLOSE = /^(\s*)\)\s*\{\s*$/;
const ELSE = /^(\s*)\}\s*else\s*\{$/;
const ELSE_IF = /^(\s*)\}\s*else\s*if\s*\{\s*$/;
const END_IF = /^(\s*)\}$/;
const FOR = /^(\s*)(for|while)\s*\(.*\)\s*\{\s*$/;
const PROTOTYPE = /^\s*[^\.]*\.prototype\.[^\s]*\s*\=\s*function\([^\)]*\)\s*\{\s*$/
const END_PROTOTYPE = /^\s*\}\;\s*$/;
const END_FOR = /^(\s*)\}$/;
const FUNCTION = /^\s*function\s[^\()]*\([^\)]*\)\s*\{$/;
const FUNCTION_ONE_LINE = /function\s*[^\(]*\([^\)]*\)\s*\{\}/;
const FUNCTION_OBJECT = /^.*\..*\s\=\sfunction(.*)\s*\{$/;
const GET_FUNCTION_OBJECT = /^.*\.(.*)\s\=\sfunction(.*)\s*\{$/;
const END_IIFE = /^\s*\}\)\(\)\;\s*$/;
const START_IIFE = /^\s*var\s*([^\s]*)\s*\=\s*\(function\(\)\s*\{$/;
const FN_BLOCK = /^\s*function\s([^\s])*\([^\)]*\)\s*\{\s*$/;
const NOP = 0;
const START = 1;
const STOP = 2;

class DeleteObject {
    indexDeletableLine = 0;
    indention: Array<Number>;
    next: any;
    forceDeleteElse: Boolean = false;
    keepFnBlock: Boolean = false;
    deleteFunction: Boolean = false;
    changeBlock: Boolean = false;
    deleteBlock: Boolean = false;
    deletableFn = [];
    blockStart: String = '';
    unusedFunctions: any = [];
    deleteIfExpression: String = '';
    detectClosingElse: Boolean = false;
    constructor() {
        this.indention = [];
        this.next = 0;
    }
    update(indention: Number): void {
        if (this.indention.indexOf(indention) === -1) {
            this.indention.push(indention);
        }
    }
    reset(): void {
        this.indention = [];
    }
    active(): boolean {
        return this.indention.length > 0;
    }
    first(): Number {
        return this.indention[0];
    }
    last(): Number {
        let len = this.indention.length
        return len > 0 ? this.indention[len - 1] : -1;
    }
    updateNext(next): void {
        this.next = next;
    }
    hasIife(line, deleteIifeBlocks) {
        let fnExp = line.match(START_IIFE);
        // TODO delete unused functions 
        if (fnExp !== null) {
            this.deletableFn.push(fnExp[1])
        }
        return deleteIifeBlocks.indexOf(cntr) >= 0
    }
    isDeletable(cntr){
        return undeletable.indexOf(cntr) === -1
    }
    isDeletableFunc(cntr){
        return undeletablefn.indexOf(cntr) === -1;
    }
    isDeletableFn(cntr){
        return deletableFunctions.indexOf(cntr) !== -1; 
    }

    getNext() {
        return this.next;
    }
    getNextLine() {
        return this.next['start']['line'];
    }
    pop() {
        this.indention.pop()
    }
    contains(value: number) {
        let index = this.indention.indexOf(value);
        return index;
    }
    getAll() {
        return this.indention;
    }
    delete(index: number) {
        delete this.indention[index];
    }
}
class LineObject {
    newLine: String = '';
    deleteStatus: String = '';
    lineStatus: Number = STATUS.OK;
    indentation: number;
    constructor(
        public line: String,
        public cntr: number
        // public newLine: String, public deleteStatus: String, public lineStatus: Number
    ) {
        this.line = line;
        this.newLine = line;
        this.indentation = this.getIndentation();
    }
    getIndentation() {
        let result = this.line.match(/^(\s*)/);
        return result[1].length;
    }
    has(type: RegExp, line?: String) {
        let checkLine = line && line !== '' ? line : this.line
        let check = {
            match: false,
            matchDetail: []
        }
        let pattern = type;
        check.matchDetail = checkLine.match(pattern);
        check.match = (check.matchDetail && check.matchDetail.length > 0);
        return check.match;
    }
    update(newLine?: String, deleteStatus?: String, lineStatus?: Number) {
        this.newLine = this.newLine !== newLine ? newLine : this.newLine;
        this.deleteStatus = this.deleteStatus !== deleteStatus ? deleteStatus : this.deleteStatus;
        this.lineStatus = this.lineStatus !== lineStatus ? lineStatus : this.lineStatus;
    }
}
class ActionObject
{
    lob: LineObject;
    dob: DeleteObject;
    indentation: number;
    constructor(
        public lineObject: LineObject,
        public deleteObject: DeleteObject
    ) {
        this.lob = lineObject;
        this.dob = deleteObject;
    }
    isStartActiveBlock() {
        return this.lob.indentation === this.dob.first();
    }
    isInsideActiveBlock() {
        return this.lob.indentation > this.dob.first();
    }
    isActiveBlock() {
        return this.lob.indentation === this.dob.last();
    }
    keepLine(statusText, statusCode?: STATUS, trigger?) {

        let status = statusCode || STATUS.OK;
        if(deleteLOC.indexOf(cntr) !== -1){
            let status = STATUS.REMOVED;
            handleTrigger(this, trigger);
            this.lob.update('', statusText, status);
        } else 
        if(specialReplacementLines.indexOf(cntr) !== -1){
            var spaces = this.lob.line.match(/^(\s*)/)
            var index = specialReplacementLines.indexOf(cntr)
            this.changeLine('#CL1 START', STATUS.POTENTIAL, spaces[1] + specialReplacementValues[index]);
        } else {
            this.lob.update(this.lob.line, statusText, status);
        }
        handleTrigger(this, trigger);
    }
    deleteLine(statusText, trigger?) {
        if (DOB.isDeletable(this.lob.cntr)) {
            let status = STATUS.REMOVED;
            handleTrigger(this, trigger);
            this.lob.update('', statusText, status);
        } else {
            this.keepLine('#NOT DELETABLE');
        }
    }
    deleteBlock(statusText){
    // if(DOB.isDeletableFn(this.lob.cntr) || isDeletable(this.lob.cntr) ){

        if (isDeletable(this.lob.cntr)){
            if (this.lob.has(FUNCTION_ONE_LINE)) {
                this.deleteLine("#DL1 SINGLE FUNC");
            } else{
                this.deleteLine(`${statusText} START`, { 'deleteBlock': true });
            }
        } else {
            this.keepLine(`${statusText} START`, STATUS.OK, { 'keepFnBlock': true });
        }
    // }
    }
    deleteBlockX(statusText){
        if(this.dob.isDeletableFn(this.lob.cntr) ){

            if (isDeletable(this.lob.cntr)){
                if (this.lob.has(FUNCTION_ONE_LINE)) {
                    this.deleteLine("#DL1 SINGLE FUNC");
                } else{
                    this.deleteLine(`${statusText} START`, { 'deleteBlock': true });
                }
            } else {
                this.keepLine(`${statusText} START`, STATUS.OK, { 'keepFnBlock': true });
            }
        }
    }
    changeLine(statusText, statusCode?: STATUS, line?, trigger?) {
        let status = statusCode || STATUS.REMOVED;
        handleTrigger(this, trigger);
        let newLine = line !== undefined ? line : this.lob.line;
        this.lob.update(newLine, statusText, status);
    }
    changeBlock(trigger: string, text: String, keep: Boolean) {
        const key: string = trigger;
        let options = this.isStartActiveBlock() ? { key: false } : {};
        let deleteLines =(options) => {
            if (DOB.isDeletable(this.lob.cntr)) {
                this.deleteLine(`#${text}`, options);
            } else {
                this.keepLine('#NOT DELETABLE');
            }
        }
        if (this.dob[key] === true) {
            if (this.isStartActiveBlock()) {
                // deleteLines({});
                if (keep === true) {
                    this.keepLine(`#${text} END`, STATUS.OK, { key: false });
                } else {
                    deleteLines(options);
                }
                this.dob[key] = false;
            } else {
                deleteLines(options);
            }
            // this.dob[trigger]
        }
    }
}
const handleTrigger = (ao, trigger) => {
    let startOrStop = NOP;

    if (trigger) {
        let keys = Object.keys(trigger);
        keys.forEach((key, keyIndex) => {
            ao.dob[key] = trigger[key];
            if (trigger[key] === true) {
                startOrStop = START;
            } else if (trigger[key] === false) {
                startOrStop = STOP;
            }
        });
        if (startOrStop === START) {
            ao.dob.update(ao.lob.indentation);
        } else if (startOrStop === STOP) {
            ao.dob.reset();
            ao.dob.deleteIfExpression = ''
        }
    }

}
// Pt/Dt/Rt/Lt
const deleteUnusedFunctions = (line, lob, ao) => {
    let lm = line.match(/.*(Sn|Wr|Qr|dn\([^\)]*\)|Pt;|Dt;|Rt;|Lt\([^\)]*\)).*/);
    if (lm && lob.has(FUNCTION) === null) {
        ao.deleteLine("#SD");
        return true
    } else if(deletableFn.indexOf(cntr)  >= 0) {
        // ao.deleteBlock("#DB1X"); 
            //NOP
    } else {
        // let mf = line.match(/.*function\s(Sn|Wr|Qr|dn|Pt|Dt|Rt|Lt)\([^\)]*\).*/);
        // if (mf) {
        //     // ao.deleteBlock("#DB2X");
        //     return true
        // } else {
        //     return false;
        // }
    }
}
const isDeletable = (cntr) => {
    return keepFnName.indexOf(cntr) === -1 &&
            DOB.isDeletable(cntr + 1);
}


let DOB = new DeleteObject();
let iifeBlocks = [];
let deletableFn = [];

// cntr === 311 || cntr === 281 || cntr === 344 || cntr === 999999 || cntr === 9860 || cntr === 9989) { //|| cntr === 9972){
let finalCode = '';
//TODO: 328
let fnIndex = 1;
let currentDeletableFn = {};
const analyze = (line) => {
    let LOB = new LineObject(line, cntr + 1);
    let AO = new ActionObject(LOB, DOB);
    let doNext: Boolean = false;

    // todo: einzeiler löschen, wenn start/ende oder fnDelete not running
    if (cntr === 0) {
        console.log(removeStatements[DOB.next])
        DOB.updateNext(removeStatements[DOB.next]);
    }
    if (cntr++ >= 0) { // TODO in 540 bei LOB machen
        // TODO ! DOB.deletingFn && cntr === removeFunctions[fnIndex]['start']['line']
        //DELETEABLE line detected 
        // #hier        
        let removeableLine = removeFunctions[fnIndex];
         if (removeableLine &&
            !DOB.keepFnBlock && !DOB.active() &&
            // TODO: ohen 
            DOB.isDeletableFunc(cntr) &&
            removeableLine.start.line === cntr
        ) {
            AO.deleteBlock("#DB4");
        } else if (DOB.active()) {
            if (AO.isStartActiveBlock()) {
                if (DOB.changeBlock === true) {
                    AO.deleteLine('#CB END', { 'changeBlock': false });
                } else if (DOB.deleteBlock === true) {
                    AO.deleteLine('#DB END', { 'deleteBlock': false, 'blockStart': '' });
                } else if (DOB.keepFnBlock === true) {
                    AO.changeBlock('keepFnBlock', 'KP2', true);
                }
            } else {
                AO.deleteLine('#DB');
            }
            doNext = removeStatements[DOB.indexDeletableLine] !== undefined;
        } else {
            if (!deleteUnusedFunctions(line, LOB, AO)) {
                if (DOB.hasIife(line, deleteIifeBlocks)) {
                    if(DOB.isDeletableFn(cntr)){
                        AO.deleteBlockX("#DBxx START YYY");
                    } else {
                        // NOP
                    }
                } else {
                    if (isDeletable(cntr)) {
                        // TODO: 1772 as undeletableFn
                        if (todoAutomize.indexOf(cntr) !== -1) {
                                AO.keepLine("#KBQ2", STATUS.OK, { 'keepFnBlock': true });
                        } else {
                                if(DOB.isDeletableFn(cntr)) {
                                    AO.deleteBlock("#KFB02");
                                } else {
                                    if (LOB.has(FUNCTION)) {
                                        AO.keepLine("#QA3", STATUS.OK, { 'keepFnBlock': true });
                                    } else {
                                        AO.keepLine("#QA1");
                                    }
                                }

                        }

                    } else {
                        if(DOB.isDeletableFn(cntr)){
                            AO.deleteBlock("#KFB03");
                        } else {
                            if (LOB.has(FUNCTION)) {
                                // AO.keepLine("#QA3", STATUS.OK, { 'keepFnBlock': true });
                            } else {
                            AO.keepLine("#QB");
                            }
                        }
                    }
                }
            }

        }
        if (LOB.newLine == '') {
            metrics.deleted++;
        }
        if (show.deleteStatus == true) {
            let indentions = (LOB.deleteStatus !== '') ? DOB.getAll() : DOB.first();
            let currentIndention = (LOB.newLine === '') ? DOB.getAll() : DOB.getNextLine();
            let oldLine = (LOB.newLine === '') ? line : indentions;
            // TODO: wirte in extra new line 
            LOB.newLine = `${LOB.newLine}// ${LOB.deleteStatus} i:${currentIndention} orig: ${oldLine}`;
        } else if (show.delete) {
            LOB.newLine = (LOB.newLine === '') ? `//${line}` : LOB.newLine;
        }
        if (removeableLine && removeableLine.start.line === cntr) {
            let loc = removeableLine;
            if (loc && loc.start) {
                LOB.newLine; // += `//#RF ${loc.start}`
                fnIndex++;
            }
        }
        
        if (doNext || (removeStatements[DOB.indexDeletableLine] && removeStatements[DOB.indexDeletableLine].start.line <= cntr)) {
            DOB.indexDeletableLine++;
            if (removeStatements[DOB.indexDeletableLine]) {
                DOB.updateNext(removeStatements[DOB.indexDeletableLine]);
            }
        }
        updateLineStatus(LOB);
        finalCode += LOB.newLine + '\n';
    } else {
    }
    prevLine = line;
};
if (!noRun) {
    rl.on('line', analyze);
}

prevLine = '';
const optimizeCode = (code) => {
    let terms = [   'nodeIndex', 'renderElement', 'componentView', 'renderParent', 'childCount', 'attrs', 
                    'nodes', 'parent', 'element', 'On', 'Pr'];
    let replaceable = ['N', 'E', 'V', 'R', 'C', 'A', 'N', 'P', 'B', 'O', 'C'];
    terms.forEach(function(term, i)  {
        code = code.replace(new RegExp(term, 'g'), replaceable[i])
    })
    return code;
}
class ResultObject {
    start: any;
    startByte: any;
    end: any;
    diff: any;
    minEnd: any;
    minBase: any;
    diffBase: Number;
    reducedBy: Number;
    diffDirection: String;
    gzip = '~920B';
    constructor(
        public raw: string,
        public dist_dev: String,
        public min: String,
        public min_base: String,
    ) {
        this.start = getFileSize(this.raw);
        this.startByte = getFileSize(this.raw, false);
        this.end = getFileSize(this.dist_dev);
        this.minEnd = getFileSize2(this.min);
        this.minBase = getFileSize(this.min_base);
        this.diff = (100 * this.end) / this.start;
        this.diffBase = (this.minEnd - this.minBase);
        this.diffDirection = parseFloat(this.start) > this.minEnd ? ' ⬇️ ' : ' ⬆️ ';
        this.reducedBy = Math.round(this.diff * 100) / 100
    }
}
rl.on('close', () => {
    console.log(colorize(GREEN, `✓ file analyzed`));
    finalCode = 'Ö = [];' + finalCode
    finalCode = optimizeCode(finalCode);
    writeNewLine(fs, NEW_FILE, finalCode, false);
    fs.copyFile(NEW_FILE, DIST_FILE_DEV, (err) => { // copy NEW_FILE to DIST_FILE_DEV
        if (err) throw err;
        const time2 = new Date().getTime();
        const rob = new ResultObject(RAW_FILE, DIST_FILE_DEV, MIN_FILE, MIN_FILE_BASE);

        uglifyFile(DIST_FILE_DEV, MIN_FILE);
        const finalStatus = 
    `DONE: ⌛ ${(time2 - time) / 1000}  💾 ${rob.startByte} ${rob.diffDirection}  ${rob.diffBase} %)
    metrics: ✔️ ${metrics.ok} ❌ ${metrics.deleted} ⚠️ ${metrics.potential}`;
        notifier.notify({
            title: 'ngBundle optimizer',
            icon: path.join(__dirname, 'logo_small.png'),
            message: finalStatus
        });
        console.log(colorize(GREEN, `✓ statistics:`));
        console.log(colorize(WHITE, `  ${finalStatus}`));
    });
});