
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
    deleteStatus: true
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

const useLine = (line) => {
    const useable = [
        // { start: 0, end: 1779},
        // IMPORTANT:  1781
        { start: 0, end: 2010 },

        { start: 3724, end: 9334 }, // 9335-9338
        { start: 9420, end: 12000 },
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
    return ['\033[', color, 'm', output, '\033[0m'].join('');
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

// let fRemoveLines = getRemovableLines(fnObj, fnObjCov, 'f');
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
let indexDeletableLine = 0;
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
const FUNCTION_OBJECT = /^.*\..*\s\=\sfunction(.*)\s*\{$/;
const END_IIFE = /^\s*\}\)\(\)\;\s*$/;
const START_IIFE = /^\s*var\s*([^\s]*)\s*\=\s*\(function\(\)\s*\{$/;
const FN_BLOCK = /^\s*function\s([^\s])*\([^\)]*\)\s*\{\s*$/;
const NOP = 0;
const START = 1;
const STOP = 2;

class DeleteObject {
    indention: Array<Number>;
    next: any;
    deletePrototypeHead: Boolean = true;
    forceDeleteElse: Boolean = false;
    iifeDelete: Boolean = false;
    iifeDelete2: Boolean = false;
    deleteFunction: Boolean = false;
    forceDelete: Boolean = false;
    startMultiline: Boolean = false;
    deleteableFn: Boolean = false;
    unusedFunctions: any =  [];
    deleteIfExpression: String = '';
    deletingFn: Boolean =  false;
    constructor() {
        this.indention = [];
        this.next = 0;
    }
    update(indention: Number) {
        if (this.indention.indexOf(indention) === -1) {
            this.indention.push(indention);
        }
    }
    reset() {
        this.indention = [];
    }
    active() {
        return this.indention.length > 0;
    }
    first() {
        return this.indention[0];
    }
    last() {
        if (this.indention.length > 0) {
            return this.indention[this.indention.length - 1];
        } else {
            return -1;
        }
    }
    updateNext(next){
        this.next = next;
    }
    getNext(){
        return this.next;
    }
    getNextLine(){
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
        public line: String
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
    has(type: RegExp) {
        let check = {
            match: false,
            matchDetail: []
        }
        let pattern = type;
        check.matchDetail = this.line.match(pattern);
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
    isStartActiveBlock(){
        return this.lob.indentation === this.dob.first();
    }
    isInsideActiveBlock(){
        return this.lob.indentation > this.dob.first();
    }
    isActiveBlock(){
        return this.lob.indentation === this.dob.last();
    }
    keepLine(statusText, statusCode?, trigger?){
        let status = statusCode || STATUS.OK;
        this.lob.update(this.lob.line, statusText, status );
        handleTrigger(this, trigger);
    }
    deleteLine(statusText, trigger?){
        let status =  STATUS.REMOVED;
        handleTrigger(this, trigger);
        this.lob.update('', statusText, status);
    }
    changeLine(statusText, statusCode?, line?, trigger?){
        let status = statusCode || STATUS.REMOVED;
        handleTrigger(this, trigger);
        let newLine = line !== undefined ?  line  : this.lob.line;
        this.lob.update(newLine, statusText, status);
    }
}
const handleTrigger = (ao, trigger) =>  {
    let startOrStop = NOP;
    if(trigger){
        let keys = Object.keys(trigger);
        keys.forEach((key, keyIndex) => {
            ao.dob[key] = trigger[key];
            if(trigger[key] === true){
                startOrStop = START;
            } else if(trigger[key] === false){
                startOrStop = STOP;
            }
        });
        if(startOrStop === START){
            ao.dob.update(ao.lob.indentation);
        } else if(startOrStop === STOP){
            ao.dob.reset();
        }
    }

}

let DOB = new DeleteObject();
let iifeBlocks = [];
let deletableFn = [];
let deleteIifeBlocks = [114, 159,
    //  181,
    251,281, 311, 328, 344, 
    // 600, 
    //691
    814, 
    830, 
    //860,
    912, 1034, 
    // 1061,
    1206, 4204, 4215, 
    //4249, 
    // 4264, 
    //4286, 4298,
    4488, 
    //4527
    4573, 4586, 4609, 4616, 
    // 4621, 4643, 4663, 4685, 5780
    4877, 4901, 
    //4975, 5025, 5154
    5318, 5327, 5386, 5434, 5518, 5537, 5548, 5561, 
    //5970
    6012, 6052, 6062, 6283, 6326, 6375, 
    //6423, 6478
    // 6523, 6683
    6776,
    //  6806
    6825, 
    // 6926
    // 7003, // hides view
    7026, 7042, 7209, 7235, 
    //7384, 7512
    7670, 7681, 7713, 
    // 7722
    7818, 8245, 8257, 
    // 8355, 8359
    8394, 8919, 8994, 
    // 9120
    9185, 9199, 9235, 
    // 9250, 9271, 9320
    // 9355
    9467, 9489, 9586, 9714, 9730, 9786, 9860, 9989
    ,10088,10244,10257,
    10268,10279,10290,10301,10332

    ]
// cntr === 311 || cntr === 281 || cntr === 344 || cntr === 999999 || cntr === 9860 || cntr === 9989) { //|| cntr === 9972){
let manualDelete = [114, 281, 311, 344, 9860, 9989] //9972, 310
let finalCode = '';
//TODO: 328
console.log('fnRemomvelisens')
console.log(fnRemoveLines[0]);
let fnIndex = 1;
let currentDeletableFn = {};
const analyze = (line) => {
    let LOB = new LineObject(line);
    let AO = new ActionObject(LOB, DOB);

    // todo: einzeiler löschen, wenn start/ende oder fnDelete not running
    if (cntr === 0) {
        DOB.updateNext(sRemoveLines[DOB.next]);
    }
    // TODO: 310
    if (cntr++ >= 0) {
        
        if( ! DOB.deletingFn &&  cntr === fnRemoveLines[fnIndex]['start']['line'] && cntr > 700000){
            currentDeletableFn = fnRemoveLines[fnIndex];
            AO.changeLine('#111', STATUS.POTENTIAL, `${line}//nexDelFn`, {'deletingFn': true});
            DOB.update(LOB.indentation)
        } else if(DOB.deletingFn){
            if( cntr !== fnRemoveLines[fnIndex]['end']['line']){
                AO.deleteLine('#222')
            } else {
                AO.keepLine('#111 END', STATUS.POTENTIAL,  {'deletingFn': false});
                DOB.reset();
                fnIndex++;
                if(fnRemoveLines[fnIndex]['start']['line'] < cntr){
                    while(fnRemoveLines[fnIndex]['start']['line'] <= cntr){
                        fnIndex++;
                    }
                }
            }
        }
        if (!DOB.deletingFn && cntr === 3064) {
            AO.keepLine('#33', STATUS.ERROR ,  {'forceDelete': true});
        } else if (!DOB.deletingFn && manualDelete.indexOf(cntr) >= 0) { //|| cntr === 9972){
            AO.keepLine('#44', STATUS.ERROR ,  {'forceDelete': true, 'iifeDelete': true});
        } else if (!DOB.deletingFn &&LOB.has(END_IIFE)) {
            if(DOB.iifeDelete2 ){
                AO.deleteLine('#45', {'iifeDelete2':  false});
            } else {
                AO.keepLine('#43');
            }
        } else { }
        //DELETEABLE line detected
        if (!DOB.deletingFn && DOB.getNextLine() === (cntr + 1) && !DOB.active() && useLine(cntr) ) {
           
            //TOOD was ist unter 2000
            if(LOB.has(FN_BLOCK) && (cntr < 100 || cntr >1800)){
                AO.deleteLine("#FB START", {'deleteableFn': true});

                //TODO: delteable fn array aufbauen

                var m = line.match(FN_BLOCK);
                DOB.unusedFunctions.push(m[1])
            } else if (LOB.has(PROTOTYPE)  ) {
            //e.prototype._truncate = function(e) {
            // 9100 - 9500 => 1x non wokring + löschet element
            
                // TODO missing loadComponent causes console error
                if (line.match(/(_loadComponent|applyToHost)/)) {
                    DOB.deletePrototypeHead = false;
                }

                // TODO: how deletePrototypeHead = true
                if(DOB.deletePrototypeHead){
                    AO.deleteLine("#DPF2", {'forceDelete': true});
                } else {
                    
                    AO.keepLine('#DPF1',  {'forceDelete': true});
                    DOB.update(LOB.indentation); // TODO: if this not it deletes more lines
                }

            } else if (LOB.has(ELSE)) {
                AO.changeLine( '#NDL_ELSE', STATUS.REMOVED, '}', {'forceDelete': true, 'forceDeleteElse':true });
            } else if (LOB.has(FUNCTION)) {
                AO.changeLine( '#65 NDL_FN', STATUS.ERROR, line, {'forceDelete': true});
            } else if (LOB.has(FOR)) {
                AO.deleteLine('#NDL_FOR', {'forceDelete': true, 'forceDeleteElse': true});
            } else if (LOB.has(FUNCTION_OBJECT)) {
                AO.deleteLine('#NDL_FUNC',  {'forceDelete': true}); // 
            } else {
                AO.keepLine('#NDL_XX', STATUS.ERROR);
            }
        } else if (DOB.getNextLine()  === cntr && !DOB.active()) {
            if (useLine(cntr)) {

                // not prev line has =
                if (prevLine.match(/.*[^\=]{1}$/)) {
                    //NOT: line ends with ?|:|{|(|[
                    if (line.match(/.*[^\?|\:|\{|\(|\[]{1}$/)) {
                        //NOT: line starts with var
                        if (line.match(/^\s*var\s[^\s]*\s*\=\s*.*$/)) {
                            AO.keepLine('#1', STATUS.ERROR);
                        } else if (line.match(/^\s*return\s*[^\;]*\;$/)) {
                            // TODO  line starts with . (TODO)
                            // TODO if (line.match(/^\s[^\.]{1}.*$/)) {
                            // TODO if (line.match(/^.*[^\;]{1}\s*$/)) {
                            // detect return
                            AO.keepLine('#A2', STATUS.POTENTIAL);
                        } else {
                            AO.keepLine('#00x', STATUS.POTENTIAL);
                        }
                    // }
                    } else if (LOB.has(IF) && !DOB.active()) {
                        // TODO? 1st if(){   => 2nd if( 
                            AO.keepLine('#99', STATUS.ERROR, { 'forceDelete':  true, 'deleteIfExpression': line});
                    } else  {
                        AO.keepLine('#2', STATUS.ERROR);
                    }
                    //detect if => count whitespace + make flag, delete until closing

                } else {
                    AO.keepLine('#3', STATUS.ERROR);
                }
            }

            // create an Array of deletable stuff
            const deletableEntry = sRemoveLines[indexDeletableLine];
            if (deletableEntry) {
                indexDeletableLine++;
                if (sRemoveLines[indexDeletableLine]) {
                    DOB.updateNext(sRemoveLines[indexDeletableLine]);
                }
            }

        }
        else {
            if (!DOB.deletingFn && DOB.active() && cntr !== 1781) {
                if(DOB.iifeDelete2 && !LOB.has(END_IIFE) && AO.isInsideActiveBlock){
                    // if(cntr !== 191 && cntr !== 192){
                    AO.deleteLine('#81');

                    // exntrahieren und zusammegebaut unten zurückgeben
                } else if (DOB.iifeDelete && LOB.has(END_IIFE) && AO.isStartActiveBlock()) {
                    AO.deleteLine('#46', { 'iifeDelete' : false, 'forceDelete': false});
                } else if (DOB.forceDelete && !AO.isStartActiveBlock()) {
                    AO.deleteLine('#FD');
                } else {
                    if (LOB.has(ELSE_IF)) {
                        // TODO
                        AO.keepLine('#63');
                    } else if (LOB.has(ELSE)) {
                        if (DOB.getNextLine()  === cntr) {
                            AO.keepLine('#97 END', STATUS.POTENTIAL, { 'deleteIfExpression': ''});
                        } else {
                            if(DOB.deleteableFn){
                                AO.deleteLine("#107");
                            } else {

                                let correctIndention = (AO.isStartActiveBlock());
                                DOB.deleteIfExpression = correctIndention ? '' : DOB.deleteIfExpression;
                                correctIndention ? DOB.reset() : DOB.update(DOB.first());
                                AO.keepLine(`#98 END ${DOB.first()}`, STATUS.POTENTIAL);
                            }
                        }

                    } else if (LOB.has(END_PROTOTYPE)) {
                        // TODO error
                        if (AO.isStartActiveBlock()) {
                            const l = DOB.deletePrototypeHead ? '' : line;
                            AO.changeLine( '#EPF', STATUS.POTENTIAL, l,  {'forceDelete': false, 'deleteIfExpression': '' });
                        }
                    } else if (LOB.has(END_IF)) {
                        if (AO.isStartActiveBlock()) {
                            DOB.deleteIfExpression = '';
                            DOB.reset(); // TODO
                            DOB.forceDelete = false;
                            if (DOB.forceDeleteElse) {

                                AO.deleteLine("#99 ENDX_REM", {'forceDeleteElse' : false});
                            } else if (!DOB.deleteFunction)  {
                                if(cntr === 3477){
                                    AO.deleteLine("#33 ENDX");

                                } else {
                                    if(DOB.deleteableFn){
                                        AO.deleteLine("#FB END", {'deleteableFn' : false});
                                    } else {

                                        AO.keepLine("#99 ENDX", STATUS.POTENTIAL);
                                    }
                                }
                            }
                    }
                        else {
                            if (LOB.has(END_FOR) && (AO.isActiveBlock())) {
                                AO.deleteLine("#10.1");
                                if (AO.isInsideActiveBlock()) {
                                    DOB.pop();
                                }
                            } else {
                                if (LOB.has(END_FOR) && DOB.contains(LOB.indentation) > 0) {
                                    DOB.delete(DOB.contains(LOB.indentation));
                                    AO.deleteLine("#10a");
                                } else if (cntr === 4755 || cntr === 7589) {
                                        // looks for closing }
                                        AO.deleteLine("#10c");  // TODO: .workaournd
                                    } else if(DOB.deleteableFn){
                                        // TODO:  why closing  are not hided?
                                        AO.deleteLine("#0bu"); // TODO ?
                                    } 
                            }
                        }
                    } else if(LOB.has(IF)){

                        // TODO DOB.deleteableFn 
                        AO.deleteLine("#108");
                    } else  if (LOB.has(ELSE)) {
                        AO.keepLine("#102", STATUS.POTENTIAL);

                    } else if (!DOB.startMultiline) {
                        AO.deleteLine("#12bb");
                    }
                }
                // create an Array of deletable stuff
                const deletableEntry = sRemoveLines[indexDeletableLine];
                if (deletableEntry) {

                    // deactivated
                    if (deletableEntry.multiline === false && cntr == -234) {
                        // string drumherum nehmen
                        let start:number = deletableEntry.location.start.column;
                        let end = deletableEntry.location.end.column
                        line = line.substring(0, start) + line.substring(end, line.length);
                        let replaceable = line.substring(deletableEntry.location.start.column, deletableEntry.location.end.column);

                        let checkNamedVar = line.match(/^\s*var\s([^\s]+){1}\s\=\s+\;/);
                        if (checkNamedVar !== null) {
                            if (checkNamedVar.length > 0) {
                                line = '';
                            }
                        }
                    }
                    indexDeletableLine++;
                    if (sRemoveLines[indexDeletableLine]) {
                        DOB.updateNext(sRemoveLines[indexDeletableLine]);

                    }
                }
            } else {
                // Delete IIFE
                if(!DOB.deletingFn &&  !DOB.active() && deleteIifeBlocks.indexOf(cntr) >= 0 ){
                // if(LOB.has(START_IIFE) && !DOB.active()){
                    let fnExp = line.match(START_IIFE);
                    // TODO delete unused functions 
                    deletableFn.push(fnExp[1]);
                    let newLine = 'var ' + fnExp[1] + '=' + '(function() {return function t(t) {}; })(); ';
                    AO.changeLine(   '#88', STATUS.POTENTIAL,newLine, {'iifeDelete2': true});
                } 
            }

        }
        if (LOB.newLine == '') {
            metrics.deleted++;
        }
        if (show.deleteStatus == true) {
            let indentions = (LOB.deleteStatus !== '') ? DOB.getAll() : DOB.first();
            let currentIndention = (LOB.newLine === '') ? DOB.getAll() : DOB.getNextLine();
            let oldLine = (LOB.newLine === '') ?  line : indentions;
            LOB.newLine = `${LOB.newLine}// ${LOB.deleteStatus} i:${currentIndention} orig: ${oldLine}` ;
        } else if (show.delete) {
            LOB.newLine = (LOB.newLine === '') ? `//${line}` : LOB.newLine;
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
        console.log(NEW_FILE2 + ' was copied to' + DIST_FILE);
        const sizeStart = getFileSize('./assets/foo.js').match(/(\d*)/)[0];
        const sizeEnd = getFileSize(pathToDist).match(/(\d*)/)[0];
        const sizeDiff = (100 * sizeEnd) / sizeStart;

        uglifyFile(DIST_FILE, MIN_FILE);

        const sizeGzip = '34.8';
        const sizeMin = getFileSize(MIN_FILE).match(/(\d*)/)[0];
        const finalStatus = ' ❤️✔️ DONE ⌛' + ((time2 - time) / 1000) + ' 💾 ' + getFileSize('./assets/foo.js') + ' ⬇️ ' + getFileSize(pathToDist) + ' (' + sizeDiff + '%)' + '\n metrics: ✔️' + metrics.ok + '❌ ' + metrics.deleted + '⚠️ ' + metrics.potential;
        notifier.notify(finalStatus);
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