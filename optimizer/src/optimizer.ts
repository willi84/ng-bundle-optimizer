
// export const hello = () => 'Hello world!';
const readline = require('readline');


const MIN = 0;
const MAX = 2010;
let noRun = false;
let showOutput = true;
let showDeleteStatus = false;
let showDelete = false;
let rewriteElse = true;
let forceDelete = false;
let metrics = {
    ok: 0,
    deleted: 0,
    error: 0,
    potential: 0
}
const notifier = require('node-notifier');
const path = require('path');
const time = new Date().getTime();

const updateLineStatus = (LOB) => {
    
    let color = WHITE;
    switch (LOB.lineStatus) {
        case STATUS_ERROR:
        color = RED;
        metrics.error++;
        break;
        case STATUS_REMOVED:
        color = YELLOW;
        // metrics.deleted++;
        break;
        case STATUS_POTENTIAL:
        color = BLUE;
        metrics.potential++;
        break;
        default:
        color = WHITE;
        metrics.ok++;
    }
    if (showOutput) {
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
        { start: 4000, end: 9334 }, // 9335-9338
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
    exec('uglifyjs ' + file + ' -o ' + newFile, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
    }
    console.log(`file uglified ${stdout}`);
});

}


let countDeleteMe = 0;

let keepFnHead = false;
let deleteBlock = false;
const testFileBase = 'foo';
const testFileName = testFileBase + '.js';
const pathAssets = './assets/';
let replacement = '\n';

const testFileStr = pathAssets + testFileName;
const fs = require('fs');
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
    const fs2 = require('fs');
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

// KEYS
const DEL_LOC = '//#del';
const START_DEL_LOC = '//#startDel';
const IS_DELETING = '//#isDelete';
const END_DEL_LOC = '//#endDel';
const NO_DELETE = '';
const SAME_DELETE = '//#same';
const DO_NOTHING = '//#xxx';

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
    return removeLinesArray;
}

const getNewRecord = (currentIndex, removeLines, cntr) => {
    let newIndex = currentIndex
    // get new record of removable lines
    if (newIndex < removeLinesLen - 1) {
        newIndex++;
        while (removeLines[newIndex][0] < cntr) {
            newIndex++
        }
    }
    return newIndex;
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
let sRemoveLinesOrder = [];

// order lines: sRemoveLines.forEach(item => {
    
// reset file
if (fs.existsSync(NEW_FILE)) {
    fs.unlinkSync(NEW_FILE);
}
console.log('file deleted')
fs.writeFileSync(NEW_FILE, '', { encoding: 'utf8', flag: 'w+' });
console.log('new file created');
// var readline = require('readline');
var cntr = 0;

var rl = readline.createInterface({
    input: fs.createReadStream(testFileStr),
});

let isDeleting = false;
// let i = 2; //@todo: why not 0
let i = 0;
let removeLinesLen = sRemoveLines.length;

const STATUS_OK = 0;
const STATUS_REMOVED = 1;
const STATUS_ERROR = 2;
const STATUS_POTENTIAL = 3;

let prevLine = '';
let nextDeletableLine = 0;
let indexDeletableLine = 0;
let lineStatus = 0;
// let DOB.update(0)
let deleteIfExpression = '';
let startMultiline = false;

const MULTILINE_IF_OPEN = "open-multiline-if";
const MULTILINE_IF_CLOSE = "close-multiline-if";
const HAS_IF = "if";
const HAS_ELSE = "else";
const HAS_ELSE_IF = "else-if"
const HAS_END_IF = "end-if";
const HAS_FOR = "has-for";
const HAS_WHILE = "has-while";
const END_FOR = "end-for";
const IS_PROTOTYPE = "is-prototype";
const HAS_END_PROTOTYPE = "end-prototype";




const checkLine = (type, line) => {
    let check = {
        match: false,
        matchDetail: []
    }
    let pattern = /^.*$/;
    switch (type) {
        case MULTILINE_IF_OPEN:
        pattern = /^(\s*)(if|for)\s\([^\)]*$/;
        break;
        case MULTILINE_IF_CLOSE:
            pattern = /^(\s*)\)\s*\{\s*$/;
                break;
        case HAS_IF:
        pattern = /^(\s*)if\s*\(.*\)\s*\{\s*$/;
            // pattern = /^(\s*)if\s*\([^\)]*\)\s*\{.*$/;
            break;
            case HAS_ELSE:
            pattern = /^(\s*)\}\s*else\s*\{$/;
                break;
        case HAS_ELSE_IF:
        pattern = /^(\s*)\}\s*else\s*if\s*\{\s*$/;
            break;
        case HAS_END_IF:
        pattern = /^(\s*)\}$/;
        break;
        case HAS_FOR:
        pattern = /^(\s*)(for|while)\s*\(.*\)\s*\{\s*$/;
            // pattern = /^(\s*)for\s*\([^\;]*\;[^\;]*\;[^\;]*\)\s*\{.*$/;
            break;
            case IS_PROTOTYPE:
            pattern = /^\s*[^\.]*\.prototype\.[^\s]*\s*\=\s*function\([^\)]*\)\s*\{\s*$/
                break;
                case HAS_END_PROTOTYPE:
                pattern = /^\s*\}\;\s*$/;
                break;
                case END_FOR:
                pattern = /^(\s*)\}$/;
                break;
            }
            
            check.matchDetail = line.match(pattern);
            check.match = (check.matchDetail && check.matchDetail.length > 0);
            return check.match;
        }
        const getIndentation = (line) => {
            let result = line.match(/^(\s*)/);
    return result[1].length;
}


class DeleteObject {
    
    indention: Array<Number>;
    constructor() {
        this.indention = [];
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
        lineStatus: Number = STATUS_OK;
        constructor(
        public line: String
        // public newLine: String, public deleteStatus: String, public lineStatus: Number
        ) {
            this.line = line;
            this.newLine = line;
        }
        check() {
            
        }
        update(newLine?: String, deleteStatus?: String, lineStatus?: Number) {
            this.newLine = this.newLine !== newLine ? newLine : this.newLine;
            this.deleteStatus = this.deleteStatus !== deleteStatus ? deleteStatus : this.deleteStatus;
            this.lineStatus = this.lineStatus !== lineStatus ? lineStatus : this.lineStatus;
        }
    }
    let DOB = new DeleteObject();
    // let DOB = new DeleteObject(0);
    let deletePrototypeHead = true;
    const analyze = (line) => {
        let LOB = new LineObject(line);
        // LOB.lineStatus = STATUS_OK;
        // let start = sRemoveLines[next];
        
        // todo: einzeiler löschen, wenn start/ende oder fnDelete not running
        if (cntr === 0) {
            nextDeletableLine = sRemoveLines[nextDeletableLine];
        }
        // let DOB.update(0)
        if (cntr++ >= 0) {
            // let deletePrototypeHead = true; //cntr < 6010 || cntr > 9994;
            //        rewriteElse = cntr < 1533 || cntr > 1480 ? false : true;
            //DELETEABLE line detected
            if (nextDeletableLine['start']['line'] === (cntr+1) && !DOB.active() ) {
            //e.prototype._truncate = function(e) {
                // 9100 - 9500 => 1x non wokring + löschet element
                if (checkLine(IS_PROTOTYPE, line) && !DOB.active() && (cntr < 6515 || (cntr > 6530 && cntr < 9350) || cntr > 9405 )) {
                    if(line.match(/(_loadComponent|applyToHost)/)){
                        deletePrototypeHead = false;
                    }
                    LOB.update(deletePrototypeHead ?  '' : line, '#DPF', STATUS_ERROR);
                    DOB.update(getIndentation(line));
                            // deleteIfExpression = line;
                            // LOB.update(line, '#99', STATUS_ERROR);
                            forceDelete = true;

                } else if(checkLine(IS_PROTOTYPE, line)) {
                    LOB.update(line, '#PF', STATUS_ERROR);

                } else {
                    LOB.update(line, '#NDL', STATUS_ERROR);
                }
        } else if (nextDeletableLine['start']['line'] === cntr && !DOB.active()) {
            if (useLine(cntr)) {

                // not prev line has =
                if (prevLine.match(/.*[^\=]{1}$/)) {
                    //NOT: line ends with ?|:|{|(|[
                    if (line.match(/.*[^\?|\:|\{|\(|\[]{1}$/)) {
                        //NOT: line starts with var
                        if (line.match(/^\s*var\s[^\s]*\s*\=\s*.*$/)) {
                            LOB.update(line, '#1', STATUS_ERROR);
                        } else {
                            //NOT: line starts with . (TODO)
                            // if (line.match(/^\s[^\.]{1}.*$/)) {

                            if (line.match(/^.*[^\;]{1}\s*$/)) {
                                // detect multiline with =.?
                                LOB.update(line, '#A1', STATUS_POTENTIAL);
                            } else {
                                // detect return
                                if (line.match(/^\s*return\s*[^\;]*\;$/)) {
                                    LOB.update(line, '#A2', STATUS_POTENTIAL);
                                }
                                else {
                                    // simpleDeletableLine
                                    if (cntr < 6800 || cntr > 6810) {

                                        LOB.update('', '#00', STATUS_REMOVED);
                                    }
                                    else {
                                        LOB.update(line, '#00x', STATUS_POTENTIAL);
                                    }
                                }
                            }
                            // writeNewLine(fs, NEW_FILE, line + '\n', false);

                        }

                    } else {

                        // 1st if(){   => 2nd if( 
                        // const ifCheck = line.match(/^(\s*)if\s*\([^\)]*\)\s*\{.*$/);
                        //     const elseCheck = line.match(/^(\s*)\}\s*else\s*\{$/);

                        //TODO let ifCheck2 = line.match(/^(\s*)if\s*\(*\s*/)
                        // DOB.active()
                        if (checkLine(HAS_IF, line) && !DOB.active()) {
                            DOB.update(getIndentation(line));
                            deleteIfExpression = line;
                            LOB.update(line, '#99', STATUS_ERROR);
                            forceDelete = true;
                            // let newLine = rewriteElse ? '' : line;
                            // LOB.update(newLine, '#99', STATUS_REMOVED);
                        } else if (checkLine(HAS_ELSE, line) && !DOB.active()) {
                            LOB.update(line, '#100', STATUS_ERROR);
                        } else {
                            LOB.update(line, '#2', STATUS_ERROR);

                        }
                        //detect if => count whitespace + make flag, delete until closing
                    }

                } else {
                    LOB.update(line, '#3', STATUS_ERROR);
                }
            }

            // create an Array of deletable stuff
            const deletableEntry = sRemoveLines[indexDeletableLine];
            if (deletableEntry) {

                // deactivated
                if (deletableEntry.multiline === false && cntr == -234) {
                    // string drumherum nehmen
                    let start = deletableEntry.location.start.column;
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
                    nextDeletableLine = sRemoveLines[indexDeletableLine];
                } else {
                }
            }

        }
        else {
            if (DOB.active() && cntr !== 1781) {

                if(forceDelete && getIndentation(line) !== DOB.first()){
                    LOB.update('', '#FD', STATUS_ERROR);
                } else {
                if (checkLine(HAS_ELSE_IF, line)) {
                    //TODO
                    if (nextDeletableLine['start']['line'] === cntr) {
                        deleteIfExpression = '';
                        LOB.update(line, '#95 END', STATUS_POTENTIAL);
                    } else {
                        let updateLine = deleteIfExpression.replace(/\}\s*else\s*/, "");
                        deleteIfExpression = '';
                        DOB.reset();
                        LOB.update(line, '#96 END', STATUS_POTENTIAL);
                    }
                } else if (checkLine(HAS_ELSE, line)) {
                    if (nextDeletableLine['start']['line'] === cntr) {
                        deleteIfExpression = '';
                        DOB.reset();
                        LOB.update(line, '#97 END', STATUS_POTENTIAL);
                    } else {
                        let correctIndention = (getIndentation(line) === DOB.first());
                        deleteIfExpression = correctIndention ? '' : deleteIfExpression;
                        correctIndention ? DOB.reset() : DOB.update(DOB.first());
                        LOB.update(line, `#98 END ${DOB.first()}`, STATUS_POTENTIAL);
                        //if cntr === 5003
                        // let newLine = line;
                        // if (rewriteElse) {
                        //     newLine = correctIndention && deleteIfExpression !== '' ? deleteIfExpression.replace("if (", "if (!(").replace(") {", ")) {") : '';
                        // }
                        // let updateLine = correctIndention ? deleteIfExpression.replace("if (", "if (!(" ).replace(") {", ")) {")  : '';
                        // let updateLine = correctIndention ? line : '';
                        // const ifStatemnt = deleteIfExpression.match(/^(\s*)if(/)

                        // DOB.update(correctIndention ? 0 : DOB.first());
                        // DOB.first() = correctIndention ? 0 : DOB.first();
                    }

                } else if (checkLine(HAS_END_PROTOTYPE, line)) {
                    if (getIndentation(line) === DOB.first()) {
                        deleteIfExpression = '';
                        DOB.reset();
                        forceDelete = false;
                        LOB.update(deletePrototypeHead ?  '' : line, "#EPF", STATUS_POTENTIAL);
                    }
                
                } else if (checkLine(HAS_END_IF, line)) {
                    if (getIndentation(line) === DOB.first()) {
                        deleteIfExpression = '';
                        DOB.reset();
                        forceDelete = false;
                        LOB.update(line, "#99 ENDX", STATUS_POTENTIAL);
                        // console.log(DOB.getAll() + "---"+ rewriteElse)
                        // let newLine = rewriteElse || forceDelete ? '' : line;
                        // if(forceDelete){
                        //     LOB.update(newLine, "#99 ENDY", STATUS_REMOVED);
                        //     forceDelete = forceDelete === true ? false : forceDelete;
                        // } else {
                        //     LOB.update(newLine, "#99 ENDX", STATUS_REMOVED);

                        // }
                    }
                    else {
                        if (checkLine(END_FOR, line) && (getIndentation(line) == DOB.last())) {
                            LOB.update('', "#10.1", STATUS_POTENTIAL);
                            if (getIndentation(line) > DOB.first()) {
                                DOB.pop();
                            }
                        } else {
                            if (checkLine(END_FOR, line) && DOB.contains(getIndentation(line)) > 0) {
                                DOB.delete(DOB.contains(getIndentation(line)));
                                LOB.update('', "#10a", STATUS_REMOVED);
                            } else {

                                // // looks for closing }
                                // if (cntr === 4755 || cntr === 7589) {
                                //     LOB.update('', "#10c", STATUS_REMOVED);  // TODO: .workaournd
                                // } else {
                                //     if (checkLine(END_FOR, line) && DOB.contains(getIndentation(line))) {
                                //         DOB.delete(DOB.contains(getIndentation(line)));
                                //         LOB.update('', "#10f", STATUS_REMOVED);
                                //     } else {
                                //         LOB.update(line, "#10b", STATUS_POTENTIAL); //?
                                //     }
                                // }
                                // looks for closing }
                                if (cntr === 4755 || cntr === 7589) {
                                    LOB.update('', "#10c", STATUS_REMOVED);  // TODO: .workaournd
                                } else {
                                    LOB.update(line, "#10b", STATUS_POTENTIAL); //?
                                }
                            }
                        }
                    }
                } else {
                    if (checkLine(HAS_IF, line)) {
                        LOB.update(line, "#101", STATUS_POTENTIAL);

                    } else if (checkLine(HAS_ELSE, line)) {
                        LOB.update(line, "#102", STATUS_POTENTIAL);

                    } else {
                        if (!startMultiline) {
                            if (checkLine(MULTILINE_IF_OPEN, line)) {
                                startMultiline = true;
                                deleteIfExpression = line;
                                LOB.update(line, "#12a", STATUS_POTENTIAL);
                            } else {
                                if (checkLine(HAS_END_IF, line) && (getIndentation(line) === DOB.first())) {
                                    deleteIfExpression = '';
                                    DOB.reset();
                                    LOB.update('', "#12b END", STATUS_REMOVED);
                                } else {
                                    if (checkLine(HAS_FOR, line) && DOB.active()) {
                                        LOB.update('', "#12b1", STATUS_POTENTIAL);
                                        if (getIndentation(line) > DOB.first()) {
                                            DOB.update(getIndentation(line))
                                        }
                                    } else {
                                        LOB.update('', "#12b", STATUS_REMOVED);
                                    }
                                }
                            }
                        } else {
                            if (checkLine(MULTILINE_IF_CLOSE, line)) {
                                startMultiline = false;
                                if (!DOB.active) {
                                    DOB.update(getIndentation(line))
                                }
                                LOB.update(line, "#12c", STATUS_POTENTIAL);
                            } else {
                                LOB.update(line, "#12d", STATUS_POTENTIAL);
                            }
                        }
                    }
                }
            }
                // create an Array of deletable stuff
                const deletableEntry = sRemoveLines[indexDeletableLine];
                if (deletableEntry) {

                    // deactivated
                    if (deletableEntry.multiline === false && cntr == -234) {
                        // string drumherum nehmen
                        let start = deletableEntry.location.start.column;
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

                        nextDeletableLine = sRemoveLines[indexDeletableLine];

                    } else {
                    }
                }
            } else {
                // NOP
                // LOB.update(line, '#xx', STATUS_OK);
                // if(!DOB.active() ){

                //     if (checkLine(HAS_FOR, line) && nextDeletableLine['start']['line'] === (cntr +1)) {
                //         LOB.update(line, "#yy", STATUS_POTENTIAL);
                //         // if (getIndentation(line) > DOB.first()) {
                //             DOB.update(getIndentation(line));
                //             console.log(DOB.getAll());
                //             forceDelete = false;
                //             // rewriteElse = true; //TODO:  überflüssig machen
                //         // }
                //     }
                // }
            }

        }
        if (LOB.newLine == '') {
            metrics.deleted++;
        }
        if (showDeleteStatus == true) {
            if (LOB.deleteStatus !== '') {
                if (LOB.newLine === '') {
                    // LOB.newLine = '//'+line;
                    LOB.newLine = '//' + LOB.deleteStatus + '((' + DOB.getAll() + ')) ' + line;
                } else {
                    LOB.newLine = LOB.newLine + '//' + LOB.deleteStatus + '-- ' + nextDeletableLine['start']['line'] + ' || ' + DOB.getAll();
                }
            }
            else {
                if (LOB.newLine === '') {
                    // LOB.newLine = '//'+line;
                    LOB.newLine = '//' + LOB.deleteStatus + '(' + DOB.getAll() + ') ' + line;
                } else {
                    LOB.newLine = LOB.newLine + '//' + LOB.deleteStatus + '-- ' + nextDeletableLine['start']['line'] + ' || ' + DOB.first();
                }
            }
        } else if (showDelete) {
            if (LOB.newLine === '') {
                LOB.newLine = '//' + line;
            } else {
                LOB.newLine = LOB.newLine;
            }
        }
        // LOB.newLine =  (LOB.deleteStatus !== '' && showDeleteStatus === true) ? LOB.newLine + '//' + line + '//' + LOB.deleteStatus : LOB.newLine 
        updateLineStatus(LOB);

        writeNewLine(fs, NEW_FILE, LOB.newLine + '\n', false);

    } else {
    }
    prevLine = line;

};
if (!noRun) {

    rl.on('line', analyze);
}

prevLine = '';
rl.on('close', () => {

    // console.log('compress');
    var compressor = require('node-minify');

    fs.copyFile(NEW_FILE, DIST_FILE, (err) => {
        if (err) throw err;
        const time2 = new Date().getTime();
        console.log(NEW_FILE2 + ' was copied to' + DIST_FILE);
        const sizeStart = getFileSize('./assets/foo.js').match(/(\d*)/)[0];
        const sizeEnd = getFileSize(pathToDist).match(/(\d*)/)[0];
        const sizeDiff = (100 * sizeEnd) / sizeStart;

        uglifyFile(DIST_FILE, MIN_FILE);

        const sizeGzip = '34.8';
        const sizeMin = '125'

        notifier.notify(' ❤️✔️ DONE ⌛' + ((time2 - time) / 1000) + ' 💾 ' + getFileSize('./assets/foo.js') + ' ⬇️ ' + getFileSize(pathToDist) + ' (' + sizeDiff + '%)' + '\n metrics: ✔️' + metrics.ok + '❌ ' + metrics.deleted + '⚠️ ' + metrics.potential);
        console.log('reduced to: ' + sizeDiff)
        var fs3 = require('fs')
        let startFile = '../badge_raw.svg';
        let endFile = '../badge.svg';
fs3.readFile(startFile, 'utf8', function (err,data) {
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
// console.log('copy file');