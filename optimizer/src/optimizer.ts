import {
    MAX_DELETE, undeletablefn, undeletable1,
      deletableFunctions,
    deleteLOC1, specialReplacements
}
    from './config';
import {
   LOG,
   updateLineStatus,
   getMetricsData
}
    from './lib/defaults';
    
import * as readline from "readline";
import * as notifier from "node-notifier";
import * as path from "path";
import * as fs from "fs";
import {  exec, spawnSync } from "child_process";

const OK = 0;
const ERROR = 1;
const WARNING = 2;

enum STATUS {
    OK = 0,
    REMOVED = 1,
    ERROR = 2,
    POTENTIAL = 3
}

interface ReplaceLine {
    line: String;
    status: STATUS
}
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
const writeBadge = (rob) => {
    fs.readFile(BADGE_RAW, 'utf8', (error, data) => {
        if (error) return LOG(ERROR, `Badge is written (error ${error})`);
        data = data.replace(/\{\{file_raw\}\}/g, rob.start);
        data = data.replace(/\{\{file_red\}\}/g, rob.end);
        data = data.replace(/\{\{file_min\}\}/g, rob.minEnd);
        data = data.replace(/\{\{file_gzip\}\}/g, rob.gzip);
        data = data.replace(/\{\{reduced_by\}\}/g,rob.reducedBy);
        fs.writeFile(BADGE_FINAL, data, 'utf8', (error) => {
            if (error) return LOG(ERROR, `Badge is written (error ${error})`);
            LOG(OK, `Badge is written`);
        });
    });

}

const NEW_FILE = `${ASSETS_FOLDER}/new-${FOO}.js`;
const NEW_FILE_RAW = `${ASSETS_FOLDER}/new-${FOO}.raw.js`;

let noRun = false;
let show = {
    output: false,
    delete: false,
    deleteStatus: true
}

let specialReplacementLines = [];
let specialReplacementValues = [];
specialReplacements.forEach((entry) => {
    specialReplacementValues.push(entry.value);
    specialReplacementLines.push(entry.line);
})


let undeletable = [];
const prepareArray = (oldArray) => {
    let array: Array<number> = []; 
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


const uglifyFile = (file, newFile) => {
    exec('uglifyjs ' + file + ' -c -o ' + newFile, (error, stdout, stderr) => {
        if (error) {
            LOG(ERROR, `files uglified (error ${error})`);
            return;
        }
        LOG(OK, `files uglified`);
        exec(`git status -s -uno ${DIST_FOLDER} | wc -l`, (error, stdout, stderr) => {
            if (error) {
                LOG(ERROR, `git status error`);
                return;
            }
            if(stdout[0] === '0'){
                LOG(OK, `no changes in dist`);
                writeBadge(rob);
                exec(`git diff --unified=0 ./../badge.svg `, (error, stdout, stderr) => {
                    if (error) {
                        LOG(ERROR, `git diff error`);
                        return;
                    }
                    if(stdout.length === 0){
                        LOG(OK, `Badge has no changes`);
                    } else {
                        LOG(ERROR, `Badge has changes`, stdout);
                    }

                });
            } else {
                LOG(ERROR, `no changes in dist`);
                // TODO: create badge
                exec(`git diff  ${DIST_FOLDER}/dev/new-foo.js `, (error, stdout, stderr) => {
                    if (error) {
                        LOG(ERROR, `git diff error: ${error}`);
                        return;
                    }
                    LOG(WARNING, 'difference size: ', stdout);
                });
                writeBadge(rob);
            }
        });
    });

}




const coverageData = JSON.parse(fs.readFileSync(`${ASSETS_FOLDER}/coverage/coverage-final.json`, 'utf8'));

// TODO: attach dist files
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


const REGEX_NAMED_FUNCTION = /^\s*function\s[^\(]+\(\)\s*\{\}\s*$/;
const REGEX_ANONYM_FUNCTION = /^\s*var\s[^\s]+\s*\=\s*function\(\)\s*\{\};*$/;

const coverageObj = getTargetData(coverageData, RAW_FILE_NAME);
if (!coverageObj) {
    //('no coverage data')
}; //stop program

const getRemovableData = (coverageObj, typeMap,  type) => {
    let obj = coverageObj[typeMap];
    let objCov = coverageObj[type];
    let removeLinesArray = [];
    let countRecords = 0;
    if (type == 's' || type == 'f') {
        Object.keys(obj).forEach(recordID => {
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
    const ADD_MODE = { encoding: 'utf8', flag: 'a' };
    fs.writeFileSync(file, newLine, ADD_MODE);
}
// % Stmts | % Branch | % Funcs | % Lines 
// let removeBranches = getRemovableData(coverageObj, 'branchMap', 'b');
let removeStatements = getRemovableData(coverageObj, 'statementMap', 's');
let removeFunctions = getRemovableData(coverageObj,'fnMap', 'f');


// reset file
if (fs.existsSync(NEW_FILE)) {
    fs.unlinkSync(NEW_FILE);
    fs.unlinkSync(NEW_FILE_RAW);
}
fs.writeFileSync(NEW_FILE, '', { encoding: 'utf8', flag: 'w+' });
LOG(OK, `new test file ${NEW_FILE} created`);
var cntr = 0;

var rl = readline.createInterface({
    input: fs.createReadStream(RAW_FILE),
});


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
    keepFnBlock: Boolean = false;
    deleteBlock: Boolean = false;
    constructor() {
        this.indention = [];
        this.next = 0;
    }
    handleTrigger(trigger, lob) {
        let startOrStop = NOP;
        if (trigger) {
            let keys = Object.keys(trigger);
            keys.forEach((key, keyIndex) => {
                this[key] = trigger[key];
                startOrStop = trigger[key] ? START : STOP;
            });
            if (startOrStop === START) {
                this.update(lob.indentation);
            } else {
                this.reset();
            }
        }
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
    isDeletableLine(cntr){
        return undeletable.indexOf(cntr) === -1
    }
    isDeletableLine1(cntr){
        return (deleteLOC.indexOf(cntr) !== -1 )
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
    newLineRAW: String = '';
    deleteStatus: String = '';
    lineStatus: Number = STATUS.OK;
    indentation: number;
    constructor(
        public line: String,
        public cntr: number
    ) {
        this.line = line;
        this.newLine = line;
        this.newLineRAW = line;
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
    rob: ResultObject;
    indentation: number;
    keepFnBlock: Boolean = false;
    deleteBlock: Boolean = false;
    constructor(
        public lineObject: LineObject,
        public deleteObject: DeleteObject,
        public resultObject: ResultObject
    ) {
        this.lob = lineObject;
        this.dob = deleteObject;
        this.rob = resultObject;
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
     getReplacementLine(index){
        var spaces = this.lob.line.match(/^(\s*)/);
        return spaces[1] + specialReplacementValues[index];
    }
    // Pt/Dt/Rt/Lt
    isUnusedFunction = () => {
        let lm = this.lob.line.match(/.*(Sn|Wr|Qr|dn\([^\)]*\)|Pt;|Dt;|Rt;|Lt\([^\)]*\)).*/);
        return  (lm && this.lob.has(FUNCTION) === null) ;
    }
    isDeletableBlock = () => {
        return  this.dob.isDeletableLine(this.lob.cntr) &&
        this.dob.isDeletableLine(this.lob.cntr + 1);
    }
    getActiveTrigger(isStop, deleteBlock, keepFnBlock) : {[k: string]: any}{
        let trigger: {[k: string]: any} = {};
        if (deleteBlock === true) {
            if(isStop === true){
                if (this.dob.deleteBlock === true ) {
                trigger = { 'deleteBlock': false};
                } else if (this.dob.keepFnBlock === true) {
                    trigger = { 'keepFnBlock': false};
                }
            } else {
                trigger =  !this.lob.has(FUNCTION_ONE_LINE) ? { 'deleteBlock': true } : trigger;
            }
        }else {
            if(keepFnBlock){
                trigger = { 'keepFnBlock': true };
            }
        }
        return trigger;
    }
    doStopAction(){
        let trigger: any = null;
        let deleteBlock = this.isStartActiveBlock();
        let isDelete = !deleteBlock || !this.dob.keepFnBlock;
        let keepFnBlock = false;
        if (deleteBlock === true) {
            trigger = this.getActiveTrigger(true, deleteBlock, keepFnBlock); // TODO ?
        }
        this.doLine("#CL",isDelete,  trigger);
    }


    doStuff(deleteBlock, keepFnBlock){
        let trigger: any = null;
        let isDelete = deleteBlock && this.isDeletableBlock();
        trigger = this.getActiveTrigger(false, deleteBlock, keepFnBlock);
        this.doLine("#CL",isDelete,  trigger);
    }
    doAction(doFunction = false){
        let deleteBlock = doFunction? this.dob.isDeletableFn(this.lob.cntr) : this.isDeletableBlock();
        let keepFnBlock = doFunction? (this.lob.has(FUNCTION) && this.isDeletableBlock()) :  this.lob.has(FUNCTION);
        this.doStuff(deleteBlock, keepFnBlock);
    }
    getNewLine(): ReplaceLine{
        let lineObj: ReplaceLine = { line: this.lob.line, status: STATUS.OK};
        let index = specialReplacementLines.indexOf(this.lob.cntr);
        if(this.dob.isDeletableLine1(this.lob.cntr) ){
            lineObj = { line: '', status: STATUS.REMOVED};
        } else if(index !== -1) {
            lineObj = { line: this.getReplacementLine(index), status: STATUS.POTENTIAL};
        }
        return lineObj;
    }
    writeNewLine(show){
        if (show.deleteStatus == true) {
            let indentions = (this.lob.deleteStatus !== '') ? this.dob.getAll() : this.dob.first();
            let currentIndention = (this.lob.newLine === '') ? this.dob.getAll() : this.dob.getNextLine();
            let oldLine = (this.lob.newLine === '') ? this.lob.line : indentions;
            // TODO: wirte in extra new line 
            this.lob.newLineRAW = `${this.lob.newLine}// ${this.lob.deleteStatus} i:${currentIndention} orig: ${oldLine}`;
        } else if (show.delete) {
            this.lob.newLineRAW = (this.lob.newLine === '') ? `//${this.lob.line}` : this.lob.newLine;
        }
        this.rob.finalCode += this.lob.newLine + '\n';
        this.rob.finalCodeRAW += this.lob.newLineRAW + '\n';
    }
    doLine(statusText, isDelete, trigger?): void {
        let newLine: ReplaceLine = isDelete ? {  line: '', status: STATUS.REMOVED} : this.getNewLine();
        if (!this.dob.isDeletableLine(this.lob.cntr)) {
            statusText = '#NOT DELETABLE';
            newLine = this.getNewLine();
        }
        this.dob.handleTrigger(trigger, this.lob);
        this.lob.update(newLine.line, statusText, newLine.status);
    }
}

class ResultObject {
    start: any;
    startByte: any;
    time: any;
    time2: any;
    metricsData: any;
    end: any;
    diff: any;
    minEnd: any;
    minBase: any;
    diffBase: Number;
    reducedBy: Number;
    diffDirection: String;
    finalCode: String;
    finalCodeRAW: String;
    gzip = '~920B';
    constructor(
        public raw: string,
        public dist_dev: String,
        public min: String,
        public min_base: String,
        public finalcode1: String,
        public finalcodeRAW1: String,
    ) {
        console.clear();
        this.time = new Date().getTime();
        this.start = this.getFileSize(this.raw);
        this.startByte = this.getFileSize(this.raw, false);
        this.end = this.getFileSize(this.dist_dev);
        this.minEnd = this.getFileSize2(this.min);
        this.minBase = this.getFileSize(this.min_base);
        this.diff = (100 * this.end) / this.start;
        this.diffBase = (this.minEnd - this.minBase);
        this.diffDirection = parseFloat(this.start) > this.minEnd ? ' ⬇️ ' : ' ⬆️ ';
        this.reducedBy = Math.round(this.diff * 100) / 100
        this.finalCode = finalcode1;
        this.finalCodeRAW = finalcodeRAW1;
    }
    getResult(){
        this.time2 = new Date().getTime();
        this.metricsData = getMetricsData()
        const finalStatus = `DONE: ⌛ ${(this.time2 - this.time) / 1000}  💾 ${this.startByte} ${this.diffDirection}  ${this.diffBase} %) //` + this.metricsData;
        notifier.notify({
            title: 'ngBundle optimizer',
            icon: path.join(__dirname, 'logo_small.png'),
            message: finalStatus
        });
        LOG(OK, `statistics: `, finalStatus);
    }

    // TODO: duplicate
    getFileSize(file, isNumber = true) {
        const ls = spawnSync('du', ['-hs', file]);
        const size = ls.stdout.toString().match(/^([^\s])*/);
        return isNumber ? size[0].match(/(\d*)/)[0] : size[0];
    }
    getFileSize2(file, isNumber = true){
        const ls = spawnSync('ls', ['-l', file]);
        const size = parseInt(ls.stdout.toString().split(' ')[4]);
        return Math.round(size/1024*100)/100;
    }
}
let DOB = new DeleteObject();
const rob = new ResultObject(RAW_FILE, DIST_FILE_DEV, MIN_FILE, MIN_FILE_BASE, '', '');
//TODO: 328
let fnIndex = 1;
const analyze = (line) => {
    let LOB = new LineObject(line, cntr + 1);
    let AO = new ActionObject(LOB, DOB, rob);

    // todo: einzeiler löschen, wenn start/ende oder fnDelete not running
    if (cntr === 0) {
        DOB.updateNext(removeStatements[DOB.next]);
    }
    if (cntr++ >= 0) { // TODO in 540 bei LOB machen

        let removeableFunctions = removeFunctions[fnIndex];
        let removeFnStart = removeableFunctions && removeableFunctions.start.line === cntr;
        if(DOB.active()){
            AO.doStopAction();
        } else{
            AO.doAction(!removeFnStart);
        }
        AO.writeNewLine(show);
        if (removeFnStart) {
            fnIndex++;
        }
        updateLineStatus(LOB,  show);
    }
};
if (!noRun) {
    rl.on('line', analyze);
}

const finalizeCode = (code, file) => {
    code = 'Ö = [];' + code;
    let terms = [   'nodeIndex', 'renderElement', 'componentView', 'renderParent', 'childCount', 'attrs', 
                    'nodes', 'parent', 'element', 'On', 'Pr'];
    let replaceable = ['N', 'E', 'V', 'R', 'C', 'A', 'N', 'P', 'B', 'O', 'C'];
    terms.forEach(function(term, i)  {
        code = code.replace(new RegExp(term, 'g'), replaceable[i])
    })
    writeNewLine(fs, file, code, false);
    return code;
}

rl.on('close', () => {
    LOG(OK, `file analyzed`);
    finalizeCode(rob.finalCode, NEW_FILE);
    finalizeCode(rob.finalCodeRAW, NEW_FILE_RAW);
    fs.copyFile(NEW_FILE, DIST_FILE_DEV, (err) => { // copy NEW_FILE to DIST_FILE_DEV
        if (err) throw err;
        uglifyFile(DIST_FILE_DEV, MIN_FILE);
        rob.getResult();
    });
});