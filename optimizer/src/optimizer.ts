
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
// undeletable keep lines
const undeletable = [
    2013, // otherwise not shown: append to dom
    3004, // create instance
    1781, // render Element
    9365, 9372,
    1948, 2024,
    2408, // TODO:  _r hard to delete
    2926, 2961, 3022, 3027, 4091,4181,
    1947, 2010, 2011, 2933, 2974, 2975, 2989, 3029,
    6474,
    2971, 2972, 2973,
    2960, 
    2557, 2559,// fn call && Ft(e, 512, r)
    2159, 2218, 2555,
    ];
const useLine = (line) => {
    const useable = [
        // { start: 0, end: 1779},
        // IMPORTANT:  1781
        { start: 0, end: 2018 }, //Sn
        { start: 2023, end: 2348 }, // TODO
        { start: 2355, end: 2431 }, // TODO: Cr
        { start: 2440, end: 2746 },
        { start: 2755, end: 2928 },
        { start: 2930, end: 2972 },
        { start: 2973, end: 9373 },// 9335-9338
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
    unusedFunctions: any =  [];
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
    updateNext(next): void{
        this.next = next;
    }
    hasIife(line, deleteIifeBlocks){
        let fnExp = line.match(START_IIFE);
        // TODO delete unused functions 
        if(fnExp !== null){
            this.deletableFn.push(fnExp[1])
        }
        return deleteIifeBlocks.indexOf(cntr) >= 0
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
    isStartActiveBlock(){
        return this.lob.indentation === this.dob.first();
    }
    isInsideActiveBlock(){
        return this.lob.indentation > this.dob.first();
    }
    isActiveBlock(){
        return this.lob.indentation === this.dob.last();
    }
    keepLine(statusText, statusCode?: STATUS, trigger?){
        let status = statusCode || STATUS.OK;
        this.lob.update(this.lob.line, statusText, status );
        handleTrigger(this, trigger);
    }
    deleteLine(statusText, trigger?){
        // let status =  STATUS.REMOVED;
        //     handleTrigger(this, trigger);
        //     this.lob.update('', statusText, status);
        if(undeletable.indexOf(this.lob.cntr) === -1){
            let status =  STATUS.REMOVED;
            handleTrigger(this, trigger);
            this.lob.update('', statusText, status);
        } else {
            this.keepLine('#NOT DELETABLE');
        }
    }
    changeLine(statusText, statusCode?: STATUS, line?, trigger?){
        let status = statusCode || STATUS.REMOVED;
        handleTrigger(this, trigger);
        let newLine = line !== undefined ?  line  : this.lob.line;
        this.lob.update(newLine, statusText, status);
    }
    changeBlock(trigger: string, text: String, keep: Boolean){
        let key = trigger;
        if(this.dob[key] === true){

                if(!this.isStartActiveBlock()){
                    this.deleteLine(`#${text}`);
                } else {
                    if(keep === true){
                        this.keepLine(`#${text} END`, STATUS.OK,{trigger: false });
                    } else {
                        this.deleteLine(`#${text} END`, {trigger: false });
                    }
                }
            }
        
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
    } else {
        let mf = line.match(/.*function\s(Sn|Wr|Qr|dn|Pt|Dt|Rt|Lt)\([^\)]*\).*/);
        if (mf) {
            ao.deleteLine("#DB", {'deleteBlock': true});
            return true
        } else {
            return false;
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
    //6423, 6478,
    // 6523, 6683
    6776,
    //  6806
    6825, 
    // 6926
    // 7003, // hides view
    7026, 7042, 7209, 7235, 
    //7384, 7512
    7670, 7681, 7713, 
    // 7722,
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
let finalCode = '';
//TODO: 328
console.log('fnRemomvelisens')
console.log(fnRemoveLines[0]);
let fnIndex = 1;
let currentDeletableFn = {};
const analyze = (line) => {
    let LOB = new LineObject(line, cntr+1);
    let AO = new ActionObject(LOB, DOB);

    // todo: einzeiler löschen, wenn start/ende oder fnDelete not running
    if (cntr === 0) {
        DOB.updateNext(sRemoveLines[DOB.next]);
    }
    // TODO: 310
    if (cntr++ >= 0) { // TODO in 540 bei LOB machen
        // TODO ! DOB.deletingFn && cntr === fnRemoveLines[fnIndex]['start']['line']
        //DELETEABLE line detected
        if ( DOB.getNextLine() === (cntr + 1) && !DOB.active() && useLine(cntr) ) {
            //TODO: delteable fn array aufbauen
            if (LOB.has(PROTOTYPE) || LOB.has(FUNCTION_OBJECT) || LOB.has(FN_BLOCK)) {
            // 9100 - 9500 => 1x non wokring + löschet element
                // TODO missing loadComponent causes console error
                if (line.match(/(_loadComponent|applyToHost)/)) {
                    AO.changeLine('#CB2 START', STATUS.POTENTIAL, line + '};',  {'changeBlock': true});
                } else {
                    AO.deleteLine("#DB START", { 'deleteBlock': true});
                }
            } else if (LOB.has(ELSE)) {
                AO.changeLine( '#NDL_ELSE', STATUS.REMOVED, `} //${line}`, {'changeBlock': true});
            } else if (LOB.has(FOR) || LOB.has(IF)) {
                AO.deleteLine('#NDL_IF', {'deleteBlock': true, 'blockStart': line});
            } else {
                // TODO Potential
                if(LOB.has(/^\s*[^\}\)]+.*$/)){
                    AO.keepLine('#NDL_POT', STATUS.ERROR);
                } else {
                    AO.keepLine('#NDL_XX', STATUS.ERROR);
                }
            }
        } else if (DOB.getNextLine()  === cntr && !DOB.active()) {
            if(deleteUnusedFunctions(line, LOB, AO)){
            } else if (useLine(cntr)) {
                // not prev line has =
                if (prevLine.match(/.*[^\=]{1}$/)) {
                    //NOT: line ends with ?|:|{|(|[
                     if (LOB.has(IF)) {
                                AO.keepLine( '#KB START2', STATUS.OK, { 'keepFnBlock': true});
                    } else if (line.match(/(switch|case|function)/)) {
                                AO.deleteLine("#DB START", { 'deleteBlock': true});
                            } else {
                                if(line.match(/\)\;/)){
                                    // TODO: if davor oder deletable function
                                    AO.deleteLine('#5')
                                } else if(line.match(/.*\{\s*$/)) { 
                                    if(LOB.has(FOR) && (cntr < 1325 || cntr > 1340)){
                                        AO.deleteLine("#FOR START", { 'deleteBlock': true});
                                    } else {

                                        AO.keepLine('#4')
                                    }
                                } else if(line.match(/.*\(\s*$/)){
                                    //    AO.deleteLine("#DB START", { 'deleteBlock': true});
                                    AO.deleteLine("#DB START", { 'deleteBlock': true});
                                } else {
                                    AO.deleteLine('#2');
                                }
                    }
                } else {
                    console.log('line: '+ prevLine);
                }
            } else {
                AO.keepLine('#NOP');
            }

            // create an Array of deletable stuff
            const deletableEntry = sRemoveLines[DOB.indexDeletableLine];
            if (deletableEntry) {
                DOB.indexDeletableLine++;
                if (sRemoveLines[DOB.indexDeletableLine]) {
                    DOB.updateNext(sRemoveLines[DOB.indexDeletableLine]);
                }
            }

        }
        else {
           
            if(deleteUnusedFunctions(line, LOB, AO)){
            } else if ( cntr === 3064) { //TODO:  automize with deletable functions
                AO.deleteLine("#DB START", { 'deleteBlock': true});
            } else  if ( DOB.active()) {
                if(DOB.changeBlock === true){
                    // AO.changeBlock('changeBlock', '#CB', false);
                    if(!AO.isStartActiveBlock()){
                        AO.deleteLine('#CB');
                    } else {
                        AO.deleteLine('#CB END', {'changeBlock': false });
                    }
                } else if(DOB.deleteBlock === true){
                    if(!AO.isStartActiveBlock()){
                        AO.deleteLine('#DB');
                    } else {
                        if(DOB.blockStart !== ''){

                            if(LOB.has(IF, DOB.blockStart)){
                                AO.deleteLine('#DBZ', {'deleteBlock': LOB.has(ELSE) === true,  'blockStart': '' })
                                
                            } else {

                                AO.deleteLine('#DBX END', {'deleteBlock': false, 'blockStart': '' });
                            }
                        } else {
                            AO.deleteLine('#DB END', {'deleteBlock': false, 'blockStart': '' });

                        }
                    }
                } else if(DOB.keepFnBlock === true){
                    // TODO hier
                    AO.changeBlock('keepFnBlock', 'KB', true);
                } else  {
                    AO.deleteLine("#DB START", { 'deleteBlock': true});
                }
                // create an Array of deletable stuff
                const deletableEntry = sRemoveLines[DOB.indexDeletableLine];
                if (deletableEntry) {

                    // deactivated
                    DOB.indexDeletableLine++;
                    if (sRemoveLines[DOB.indexDeletableLine]) {
                        DOB.updateNext(sRemoveLines[DOB.indexDeletableLine]);
                    }
                }
            } else if(  DOB.hasIife(line, deleteIifeBlocks)){
                // Delete IIFE
                let newLine = line.replace(" (function() {", "function(n){};");
                AO.changeLine( '#CB START', STATUS.REMOVED,newLine, {'changeBlock': true});
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
        console.log(path.join(__dirname, 'logo_small.png'))
        notifier.notify({
            title:  'ngBundle optimizer',
            icon: path.join(__dirname, 'logo_small.png'),
            message: finalStatus});
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