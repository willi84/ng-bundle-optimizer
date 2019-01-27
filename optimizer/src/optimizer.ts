import {
    MAX_DELETE, undeletablefn, undeletable1,
    todoDeletable, deleteIifeBlocks, keepFnName,
    todoAutomize, checkFn, emptyIIFe, deletableFunctions,
    deleteLOC1, specialReplacements
}
    from './config';

    let deleteLOC = [];
// let MAX_DELETE = config.MAX_DELETE;
// let undeletablefn = config.undeletablefn;
// export const hello = () => 'Hello world!';
const readline = require('readline');
const notifier = require('node-notifier');
const path = require('path');
const fs = require('fs');
const fs2 = require('fs');
const fs3 = require('fs');
var compressor = require('node-minify');

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
    console.log(entry);
    specialReplacementValues.push(entry.value);
    specialReplacementLines.push(entry.line);
})
console.log(specialReplacementLines);


let undeletable = [];
undeletable1.forEach((v, i) => {
    if (typeof v !== 'number') {
        undeletable.push(v[0]);
        let i = v[0]
        while (i < v[1]) {
            undeletable.push(i++);
        }
        undeletable.push(i);
    } else {
        undeletable.push(v)
    }
});
deleteLOC1.forEach((v, i) => {
    if (typeof v !== 'number') {
        deleteLOC.push(v[0]);
        let i = v[0]
        while (i < v[1]) {
            deleteLOC.push(i++);
        }
        deleteLOC.push(i);
    } else {
        deleteLOC.push(v)
    }
});

const useLine = (line) => {
    const useable = [
        // { start: 0, end: 1779},
        // IMPORTANT:  1781
        { start: 0, end: 2018 }, //Sn
        { start: 2023, end: 2348 }, // TODO
        { start: 2355, end: 2431 }, // TODO: Cr
        // { start: 2440, end: 2746 },
        { start: 2440, end: 2928 },
        { start: 2930, end: 9373 },// 9335-9338
        { start: 9400, end: 12000 },
    ]
    let isOk = false;
    useable.forEach((value, index) => {
        if (line > value.start && line < value.end) {
            isOk = true;
        }
    });
    return isOk;
}

const getFileSize = (file) => {
    const
        { spawnSync } = require('child_process'),
        ls = spawnSync('du', ['-hs', file]);
    const size = ls.stdout.toString().match(/^([^\s])*/);
    return size[0];
}
const uglifyFile = (file, newFile) => {
    const { exec } = require('child_process');
    exec('uglifyjs ' + file + ' -c -o ' + newFile, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        console.log(`file uglified ${stdout}`);
    });

}



const testFileBase = 'foo';
const testFileName = testFileBase + '.js';
const pathAssets = './assets/';
let replacement = '\n';

const testFileStr = pathAssets + testFileName;
const coverageData = JSON.parse(fs.readFileSync('./assets/coverage/coverage-final.json', 'utf8'));
const NEW_FILE = pathAssets + 'new-' + testFileName;
const BUNDLE_FILE = pathAssets + 'dist/main.js';
const NEW_FILE2 = pathAssets + 'new2-' + testFileName;
const testFileStrNew = pathAssets + NEW_FILE;
const pathToDist = './../demo/dev/new-foo.js'; // './assets/dist/new-foo.min.js';
const MIN_FILE = './../demo/prod/new-foo.min.js';
const MIN_FILE_BASE = './../demo/new-foo-base.min.js';
const DIST_FILE = pathToDist;
// const DIST_FILE = pathAssets + 'dist/new-' + testFileBase + '.min.js';
const updateIndexFile = () => {
    const indexData = JSON.parse(fs2.readFileSync('./assets/dist/index.html', 'utf8'));
}


var testFile = fs.readFileSync(pathAssets + testFileName, 'utf8');
const getTargetData = (obj, testFileName) => {
    let key = '';
    let targetData = false;
    Object.keys(obj).forEach(object => {
        if (object.indexOf(testFileName) !== -1) {
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

const coverageObj = getTargetData(coverageData, testFileName);
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

const getRemovableLines = (obj, objCov, type) => {
    let removeLinesArray = [];
    let countRecords = 0;
    if (type == 's') {
        Object.keys(obj).forEach(recordID => {
            // not necessary gleiche reihenfolge oder one-line
            // start und end vergleichen
            // z.b. zeile 3 nicht gecover
            let loc = obj[recordID];
            if (objCov[recordID] === 0) {
                removeLinesArray.push(loc)
                countRecords++;

            }
        })
    }
    if (type == 'f') {
        Object.keys(obj).forEach(recordID => {
            // not necessary gleiche reihenfolge oder one-line
            // start und end vergleichen
            // z.b. zeile 3 nicht gecover
            let loc = obj[recordID].loc;
            // TODO 53-64
            if (removeLinesArray.length > 0) {
                if (removeLinesArray[removeLinesArray.length - 1].start.line > loc.start.line) {
                    // console.log(loc);
                } else if (removeLinesArray[removeLinesArray.length - 1].end.line > loc.start.line) {
                } else {
                    // console.log(loc);
                    if (objCov[recordID] === 0) {
                        removeLinesArray.push(loc)
                        countRecords++;

                    }

                }
            } else {

                if (objCov[recordID] === 0) {
                    removeLinesArray.push(loc)
                    countRecords++;

                }
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

// let bRemoveLines = getRemovableLines(bObj, bObjCov, 'b');
let sRemoveLines = getRemovableLines(sObj, sObjCov, 's');
let fnRemoveLines = getRemovableLines(fnObj, fnObjCov, 'f');
let sRemoveLinesOrder = [];

// order lines: sRemoveLines.forEach(item => {

// reset file
if (fs.existsSync(NEW_FILE)) {
    fs.unlinkSync(NEW_FILE);
}
console.log('file deleted')
fs.writeFileSync(NEW_FILE, '', { encoding: 'utf8', flag: 'w+' });
console.log('new file created');
var cntr = 0;
let MAX_LOG = 100;
let log = (status) => {
    if (cntr < MAX_LOG) {
        console.log(status);
    }
}

var rl = readline.createInterface({
    input: fs.createReadStream(testFileStr),
});

let isDeleting = false;
// let i = 2; //@todo: why not 0
let i = 0;
let removeLinesLen = sRemoveLines.length;

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
        if (this.indention.length > 0) {
            return this.indention[this.indention.length - 1];
        } else {
            return -1;
        }
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
        // if(index >= 0){
        //     return true;
        // }
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
class ActionObject {
    lob: LineObject;
    dob: DeleteObject;
    indentation: number;
    constructor(
        public lineObject: LineObject,
        public deleteObject: DeleteObject
        // public newLine: String, public deleteStatus: String, public lineStatus: Number
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
        this.lob.update(this.lob.line, statusText, status);
        handleTrigger(this, trigger);
    }
    deleteLine(statusText, trigger?) {
        // let status =  STATUS.REMOVED;
        //     handleTrigger(this, trigger);
        //     this.lob.update('', statusText, status);

        if (undeletable.indexOf(this.lob.cntr) === -1) {
            let status = STATUS.REMOVED;
            handleTrigger(this, trigger);
            this.lob.update('', statusText, status);
        } else {
            this.keepLine('#NOT DELETABLE');
        }
    }
    deleteBlock(statusText){
        if (
            keepFnName.indexOf(this.lob.cntr) === -1 &&
            undeletable.indexOf(this.lob.cntr + 1) === -1
        ){

            this.deleteLine(`${statusText} START`, { 'deleteBlock': true });
        } else {
            if(cntr === 964){
                console.log(keepFnName.indexOf(this.lob.cntr));
                console.log(undeletable.indexOf(this.lob.cntr + 1))
                console.log(statusText)
            }
            this.keepLine('#DB ERROR');
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
        if (this.dob[key] === true) {
            if (!this.isStartActiveBlock()) {
                if (undeletable.indexOf(this.lob.cntr) === -1) {
                    this.deleteLine(`#${text}`);
                } else {
                    this.keepLine('#NOT DELETABLE');
                }
            } else {
                log(this.dob[key])
                if (keep === true) {
                    this.keepLine(`#${text} END`, STATUS.OK, { key: false });
                } else {
                    if (undeletable.indexOf(this.lob.cntr) === -1) {
                        this.deleteLine(`#${text} END`, { key: false });
                    } else {
                        this.keepLine('#NOT DELETABLE');
                    }
                }
                this.dob[key] = false;
                log(this.dob[key])
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
        ao.deleteBlock("#DB1"); 
            //NOP
    } else {
        let mf = line.match(/.*function\s(Sn|Wr|Qr|dn|Pt|Dt|Rt|Lt)\([^\)]*\).*/);
        if (mf) {
            ao.deleteBlock("#DB2");
            return true
        } else {
            return false;
        }
    }
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
        DOB.updateNext(sRemoveLines[DOB.next]);
    }
    // TODO: 310
    if (cntr++ >= 0) { // TODO in 540 bei LOB machen
        // TODO ! DOB.deletingFn && cntr === fnRemoveLines[fnIndex]['start']['line']
        //DELETEABLE line detected 
        // #hier        
        if (([5057, 10421].indexOf(cntr) !== -1)) {
            AO.deleteBlock("#DB3");
        } else
            if (cntr === 2758) {
                AO.keepLine('#KB START2', STATUS.OK, { 'keepFnBlock': true });

            } else
                if (fnRemoveLines[fnIndex] &&
                    !DOB.keepFnBlock && !DOB.active() &&
                    undeletablefn.indexOf(cntr) === -1 &&
                    fnRemoveLines[fnIndex].start.line === cntr
                ) {
                    let loc = fnRemoveLines[fnIndex];
                    if (loc && loc.start) {
                        if (LOB.has(PROTOTYPE)) {
                            AO.deleteBlock("#DB4");
                        } else if (LOB.has(FUNCTION_OBJECT)) {
                            AO.deleteBlock("#DB5");
                        } else if (LOB.has(FN_BLOCK)) {
                            if (
                                keepFnName.indexOf(cntr) === -1 &&
                                undeletable.indexOf(cntr + 1) === -1
                            ) {
                                AO.deleteBlock("#DB6");

                            } else {
                                // 22
                                // TODO: delteable lines ??
                                AO.keepLine("#KFB3 START", STATUS.OK, { 'keepFnBlock': true });

                            }

                        } else {
                            if (
                                keepFnName.indexOf(cntr) === -1 
                                // &&
                                // undeletable.indexOf(cntr + 1) === -1
                            ) {
                                if (LOB.has(FUNCTION_ONE_LINE)) {
                                    AO.deleteLine("#DL SINGLE FUNC");
                                } else{

                                    AO.deleteBlock("#DB7");
                                }
                            } 
                            else {
                                // TODO hier
                            if(deletableFunctions.indexOf(cntr) !== -1){
                                if (LOB.has(FUNCTION_ONE_LINE)) {
                                    AO.deleteLine("#DL SINGLE FUNC");
                                } else{

                                    AO.deleteBlock("#DB11");
                                }
                            } else {
                                AO.keepLine("#KFB01 START", STATUS.OK, { 'keepFnBlock': true });
                            }
                                // TODO: 19
                            }
                        }
                        // }
                    }
                } else
                    if (DOB.active()) {
                        if (DOB.changeBlock === true) {
                            // AO.changeBlock('changeBlock', '#CB', false);
                            if (!AO.isStartActiveBlock()) {
                                AO.deleteLine('#CB');
                            } else {
                                AO.deleteLine('#CB END', { 'changeBlock': false });
                            }
                        } else if (DOB.deleteBlock === true) {
                            if (!AO.isStartActiveBlock()) {
                                AO.deleteLine('#DB');
                            } else {
                                if (DOB.blockStart !== '') {

                                    if (LOB.has(IF, DOB.blockStart)) {
                                        AO.deleteLine('#DBZ', { 'deleteBlock': LOB.has(ELSE) === true, 'blockStart': '' })
                                    } else {

                                        AO.deleteLine('#DBX END', { 'deleteBlock': false, 'blockStart': '' });
                                    }
                                } else {
                                    AO.deleteLine('#DB END', { 'deleteBlock': false, 'blockStart': '' });

                                }
                            }
                        } else if (DOB.keepFnBlock === true) {
                            // TODO hier
                            if(deletableFunctions.indexOf(cntr) !== -1){
                                AO.deleteBlock("#DBAA");
                            } else {

                                AO.changeBlock('keepFnBlock', 'KB1', true);
                            }
                        } else {
                            AO.deleteBlock("#DB START");
                        }
                        doNext = sRemoveLines[DOB.indexDeletableLine] !== undefined;

                    } else if (DOB.getNextLine() === (cntr + 1) && useLine(cntr)) {
                        console.log(cntr)
                        if (LOB.has(FOR)) {
                            AO.deleteLine('#NDL_IF', { 'deleteBlock': true, 'blockStart': line });
                        } else {
                            // TODO Potential
                            if (LOB.has(/^\s*[^\}\)]+.*$/)) {
                                AO.keepLine('#NDL_POT', STATUS.ERROR);
                            }
                        }
                    } else if (DOB.getNextLine() === cntr) {
                        if (useLine(cntr)) {
                            // not prev line has =
                            if (prevLine.match(/.*[^\=]{1}$/)) {
                                //NOT: line ends with ?|:|{|(|[
                                if (LOB.has(IF)) {
                                    AO.keepLine('#KB START2', STATUS.OK, { 'keepFnBlock': true });
                                } else if (line.match(/(switch|case|function)/)) {
                                    AO.deleteBlock("#DB START");
                                } else {
                                    if (line.match(/\)\;/)) {
                                        // TODO: if davor oder deletable function
                                        AO.deleteLine('#5')
                                    } else if (line.match(/.*\{\s*$/)) {
                                        if (LOB.has(FOR) && (cntr < 1325 || cntr > 1340)) {
                                            AO.deleteBlock("#FOR START");
                                        } else {

                                            AO.keepLine('#4')
                                        }
                                    } else if (line.match(/.*\(\s*$/)) {
                                        AO.deleteBlock("#DB START");
                                    } else {
                                        AO.deleteLine('#2');
                                    }
                                }
                            } else {
                                AO.keepLine('#NOP');
                            }
                        } else {
                            AO.keepLine('#NOP');
                        }

                        // create an Array of deletable stuff
                        doNext = sRemoveLines[DOB.indexDeletableLine] !== undefined;
                        // if (deletableEntry) {
                        // //     DOB.indexDeletableLine++;
                        // //     if (sRemoveLines[DOB.indexDeletableLine]) {
                        // //         DOB.updateNext(sRemoveLines[DOB.indexDeletableLine]);
                        // //     }
                        // }

                    }
                    else {
                        if (deleteUnusedFunctions(line, LOB, AO)) {
                        } else if (DOB.hasIife(line, deleteIifeBlocks)) {
                            // Delete IIFE
                            if(emptyIIFe.indexOf(cntr) !== -1){
                                let newLine = line.replace(" (function() {", "function(){}();");
                                AO.changeLine('#CB3 START', STATUS.REMOVED, newLine, { 'changeBlock': true });

                            } else {
                                if(deletableFunctions.indexOf(cntr) !== -1){
                                    AO.deleteBlock("#DB START YYY");

                                } else {

                                    let newLine = line.replace(" (function() {", "function(n){};");
                                    AO.changeLine('#CB2 START', STATUS.REMOVED, newLine, { 'changeBlock': true });
                                }

                            }

                        } else {
                            //  AO.keepLine("#KFB1 START", STATUS.POTENTIAL, { 'keepFnBlock': true});
                            if (
                                keepFnName.indexOf(cntr) === -1 &&
                                undeletable.indexOf(cntr + 1) === -1
                            ) {
                                if (todoAutomize.indexOf(cntr) !== -1) {
                                    AO.keepLine("#KBQ", STATUS.OK, { 'keepFnBlock': true });
                                } else {
                                    if (LOB.has(FUNCTION) &&
                                        undeletablefn.indexOf(cntr) !== -1) {
                                        if (cntr === 2746 || cntr === 7881) {

                                            AO.keepLine("#QA2");
                                        } else {

                                            AO.deleteBlock("#QCC");
                                        }
                                    } else {
                                        if (LOB.has(FUNCTION)) {
                                            if (checkFn.indexOf(cntr) === -1) {
                                                if(deletableFunctions.indexOf(cntr) !== -1){
                                                    AO.deleteBlock("#Q8");
                                                } else {

                                                    AO.keepLine("#QA3", STATUS.OK, { 'keepFnBlock': true });
                                                }
                                            } else {
                                                if(deletableFunctions.indexOf(cntr) !== -1){
                                                    AO.deleteBlock("#Q10");
                                                } else {
                                                AO.keepLine("#QA5", STATUS.OK, { 'keepFnBlock': true });
                                                }
                                            }
                                        } else if (LOB.has(FUNCTION_ONE_LINE)) {
                                            if([6374,8256, 8304,10087].indexOf(cntr) !== -1){
                                                AO.deleteLine('#Q9')
                                            } else {

                                                AO.keepLine("#QA4");
                                            }
                                        } else if (DOB.hasIife(line, [691,181000,424009])) {
                                            // AO.keepLine("#QA7");
                                            // Delete IIFE
                                            // TODO: var M=function(){function n(){}return n.prototype.get=function(n,t){return t},n}();
                            let newLine = line.replace(" (function() {", "function(n){};");
                            AO.changeLine('#CB1 START', STATUS.REMOVED, newLine, { 'changeBlock': true });
                                        
                                        }  
                                          else if (LOB.has(START_IIFE)) {
                                              if(cntr === 6806){
                                                AO.deleteBlock("#DB START YYY");
                                              } else {
                                                    if(deletableFunctions.indexOf(cntr) !== -1){
                                                        AO.deleteBlock("#DELFUN");
                                                    } else {
                                                        if(deleteLOC.indexOf(cntr) !== -1){
                                                            AO.deleteLine("#RM3");
                                                        } else {
                                                        // Delete IIFE
                                                        let newLine = line.replace(" (function() {", "function(n){};");
                                                        AO.keepLine("#QA6");
                                                        }
                                                    }
                                                  // AO.changeLine( '#CB START', STATUS.REMOVED,newLine, {'changeBlock': true});
                                              }
                                        } 
                                        else if(deleteLOC.indexOf(cntr) !== -1){
                                            if(specialReplacementLines.indexOf(cntr) !== -1){
                                                console.log('cntr: '+cntr)
                                                var index = specialReplacementLines.indexOf(cntr)
                                                AO.changeLine('#CL1 START', STATUS.REMOVED, specialReplacementValues[index]);
                                            } else {
                                                if(deleteLOC.indexOf(cntr) !== -1){
                                                    AO.deleteLine("#RM1");
                                                } else {

                                                    AO.keepLine("#QA1");
                                                }
                                            }
                                            // AO.deleteLine("#DSL1");
                                        }
                                        else {
                                            if(deletableFunctions.indexOf(cntr) !== -1){
                                                

                                                    AO.deleteBlock("#KFB02");
                                                
                                            } else {
                                                
                                                if(specialReplacementLines.indexOf(cntr) !== -1){
                                                    console.log('cntr: '+cntr)
                                                    var index = specialReplacementLines.indexOf(cntr)
                                                    AO.changeLine('#CL1 START', STATUS.REMOVED, specialReplacementValues[index]);
                                                } else {

                                                    AO.keepLine("#QA1");
                                                }
                                                
                                            }
                                        }
                                    }

                                }

                            } else {
                                // 3
                                if (todoAutomize.indexOf(cntr) !== -1) {
                                    AO.keepLine("#KBQ", STATUS.OK, { 'keepFnBlock': true });
                                } else {
                                    if(deletableFunctions.indexOf(cntr) !== -1){
                                        if(keepFnName.indexOf(cntr) !== -1){
                                            AO.keepLine("#KBZ", STATUS.OK, { 'keepFnBlock': true });
                                        } else {
                                        AO.deleteBlock("#KFB03");
                                        }
                                    } else {
                                        if(deleteLOC.indexOf(cntr) !== -1){
                                            AO.deleteLine("#RM2");
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
            LOB.newLine = `${LOB.newLine}// ${LOB.deleteStatus} i:${currentIndention} orig: ${oldLine}`;
        } else if (show.delete) {
            LOB.newLine = (LOB.newLine === '') ? `//${line}` : LOB.newLine;
        }
        if (fnRemoveLines[fnIndex] && fnRemoveLines[fnIndex].start.line === cntr) {
            let loc = fnRemoveLines[fnIndex];
            if (loc && loc.start) {
                LOB.newLine += `//#RF ${loc.start}`
                fnIndex++;
            }
        }

        // if(doNext === true){
        //     DOB.indexDeletableLine++;
        //     if (sRemoveLines[DOB.indexDeletableLine]) {
        //         DOB.updateNext(sRemoveLines[DOB.indexDeletableLine]);
        //     }
        // }
        if (doNext || (sRemoveLines[DOB.indexDeletableLine] && sRemoveLines[DOB.indexDeletableLine].start.line <= cntr)) {
            DOB.indexDeletableLine++;
            if (sRemoveLines[DOB.indexDeletableLine]) {
                DOB.updateNext(sRemoveLines[DOB.indexDeletableLine]);
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
rl.on('close', () => {
    writeNewLine(fs, NEW_FILE, finalCode, false);
    fs.copyFile(NEW_FILE, DIST_FILE, (err) => {
        if (err) throw err;
        const time2 = new Date().getTime();
        console.log(colorize(BLUE, NEW_FILE2 + ' was copied to' + DIST_FILE));
        const sizeStart = getFileSize('./assets/foo.js').match(/(\d*)/)[0];
        const sizeEnd = getFileSize(pathToDist).match(/(\d*)/)[0];
        const sizeDiff = (100 * sizeEnd) / sizeStart;

        uglifyFile(DIST_FILE, MIN_FILE);

        const sizeGzip = '34.8';
        const sizeMin = getFileSize(MIN_FILE).match(/(\d*)/)[0];
        const sizeMinBase = getFileSize(MIN_FILE_BASE).match(/(\d*)/)[0];
        const sizeDiffBase = (sizeMin - sizeMinBase);
        const finalStatus = ' ❤️✔️ DONE ⌛' + ((time2 - time) / 1000) + ' 💾 ' + getFileSize('./assets/foo.js') + (sizeDiffBase < 0 ? ' ⬇️ ' : ' ⬆️ ') + ' ' + sizeDiffBase + '%)' + '\n metrics: ✔️' + metrics.ok + '❌ ' + metrics.deleted + '⚠️ ' + metrics.potential;
        notifier.notify({
            title: 'ngBundle optimizer',
            icon: path.join(__dirname, 'logo_small.png'),
            message: finalStatus
        });
        console.log('\nstatistics\n: ' + finalStatus)
        let startFile = '../badge_raw.svg';
        let endFile = '../badge.svg';
        fs3.readFile(startFile, 'utf8', function (err, data) {
            if (err) {
                return console.log(err);
            }
            data = data.replace(/\{\{file_raw\}\}/g, sizeStart);
            data = data.replace(/\{\{file_red\}\}/g, sizeEnd);
            data = data.replace(/\{\{file_min\}\}/g, sizeMin);
            data = data.replace(/\{\{file_gzip\}\}/g, sizeGzip);
            data = data.replace(/\{\{reduced_by\}\}/g, Math.round(sizeDiff * 100) / 100);
            var result = data;

            fs3.writeFile(endFile, result, 'utf8', function (err) {
                if (err) return console.log(err);
            });
        });
    });
});  