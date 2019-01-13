// export const hello = () => 'Hello world!';
var readline = require('readline');
var notifier = require('node-notifier');
var path = require('path');
var fs = require('fs');
var fs2 = require('fs');
var fs3 = require('fs');
var compressor = require('node-minify');
var noRun = false;
var show = {
    output: false,
    "delete": false,
    deleteStatus: true
};
var metrics = {
    ok: 0,
    deleted: 0,
    error: 0,
    potential: 0
};
var time = new Date().getTime();
var updateLineStatus = function (LOB) {
    var color = WHITE;
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
        process.stdout.write('line:  ' + colorize(WHITE, cntr.toString()) +
            '| ok: ' + colorize(GREEN, metrics.ok.toString()) +
            '| deleted: ' + colorize(YELLOW, metrics.deleted.toString()) +
            '| potential: ' + colorize(BLUE, metrics.potential.toString()) +
            '| error: ' + colorize(RED, metrics.error.toString()));
    }
};
var undeletable = [
    2013,
    3004,
    1781,
    9365, 9372,
    1948, 2024,
    2408,
    2926, 2961, 3022, 3027, 4091, 4181,
    1947, 2010, 2011, 2933, 2974, 2975, 2989, 3029,
    6474
];
var useLine = function (line) {
    var useable = [
        // { start: 0, end: 1779},
        // IMPORTANT:  1781
        { start: 0, end: 2018 },
        { start: 2023, end: 2348 },
        { start: 2355, end: 2431 },
        { start: 2440, end: 2746 },
        { start: 2755, end: 2928 },
        { start: 2930, end: 2970 },
        { start: 2973, end: 9373 },
        { start: 9400, end: 12000 },
    ];
    var isOk = false;
    useable.forEach(function (value, index) {
        if (line > value.start && line < value.end) {
            isOk = true;
        }
    });
    return isOk;
};
var getFileSize = function (file) {
    var spawnSync = require('child_process').spawnSync, ls = spawnSync('du', ['-hs', file]);
    var size = ls.stdout.toString().match(/^([^\s])*/);
    return size[0];
};
var uglifyFile = function (file, newFile) {
    var exec = require('child_process').exec;
    exec('uglifyjs ' + file + ' -c -o ' + newFile, function (error, stdout, stderr) {
        if (error) {
            console.error("exec error: " + error);
            return;
        }
        console.log("file uglified " + stdout);
    });
};
var testFileBase = 'foo';
var testFileName = testFileBase + '.js';
var pathAssets = './assets/';
var replacement = '\n';
var testFileStr = pathAssets + testFileName;
var coverageData = JSON.parse(fs.readFileSync('./assets/coverage/coverage-final.json', 'utf8'));
var NEW_FILE = pathAssets + 'new-' + testFileName;
var BUNDLE_FILE = pathAssets + 'dist/main.js';
var NEW_FILE2 = pathAssets + 'new2-' + testFileName;
var testFileStrNew = pathAssets + NEW_FILE;
var pathToDist = './../demo/dev/new-foo.js'; // './assets/dist/new-foo.min.js';
var MIN_FILE = './../demo/prod/new-foo.min.js';
var DIST_FILE = pathToDist;
// const DIST_FILE = pathAssets + 'dist/new-' + testFileBase + '.min.js';
var updateIndexFile = function () {
    var indexData = JSON.parse(fs2.readFileSync('./assets/dist/index.html', 'utf8'));
};
var testFile = fs.readFileSync(pathAssets + testFileName, 'utf8');
var getTargetData = function (obj, testFileName) {
    var key = '';
    var targetData = false;
    Object.keys(obj).forEach(function (object) {
        if (object.indexOf(testFileName) !== -1) {
            key = object;
        }
    });
    if (key !== '') {
        targetData = obj[key];
    }
    return targetData;
};
function colorize(color, output) {
    return ['\033[', color, 'm', output, '\033[0m'].join('');
}
//const GREEN = '\x1b[32m%s\x1b[0m';
var GREEN = '32';
var RED = '31';
var YELLOW = '33';
var MAGENTA = '35';
var BLUE = '34';
var WHITE = '37';
var REGEX_NAMED_FUNCTION = /^\s*function\s[^\(]+\(\)\s*\{\}\s*$/;
var REGEX_ANONYM_FUNCTION = /^\s*var\s[^\s]+\s*\=\s*function\(\)\s*\{\};*$/;
var coverageObj = getTargetData(coverageData, testFileName);
if (!coverageObj) {
    //('no coverage data')
}
; //stop program
var fnObj = coverageObj['fnMap'];
var fnObjCov = coverageObj['f'];
// const stObj = coverageObj['statementMap'];
// const stObjCov = coverageObj['s'];
var bObj = coverageObj['branchMap'];
var bObjCov = coverageObj['b'];
var sObj = coverageObj['statementMap'];
var sObjCov = coverageObj['s'];
coverageObj['s']; //statements, ohne funktionen, line number not the same
var deletableStatements = [];
var getRemovableStatements = function (obj, objCov) {
    if (noRun) {
        return;
    }
    Object.keys(obj).forEach(function (recordID) {
        var statement = obj[recordID];
        var isCovered = objCov[recordID] > 0;
        // const id = Number.parseInt(recordID);
        var multiLine = true;
        if (!isCovered) {
            if (statement['start']['line'] === statement.end.line) {
                multiLine = false;
            }
            var newEntry = {
                'start': statement['start']['line'],
                'multiline': multiLine,
                'location': statement
            };
            deletableStatements.push(newEntry);
        }
    });
};
if (!noRun) {
    getRemovableStatements(coverageObj['statementMap'], coverageObj['s']);
}
var getRemovableLines = function (obj, objCov, type) {
    var removeLinesArray = [];
    var countRecords = 0;
    if (type == 's') {
        Object.keys(obj).forEach(function (recordID) {
            // not necessary gleiche reihenfolge oder one-line
            // start und end vergleichen
            // z.b. zeile 3 nicht gecover
            var loc = obj[recordID];
            if (objCov[recordID] === 0) {
                removeLinesArray.push(loc);
                countRecords++;
            }
        });
    }
    if (type == 'f') {
        Object.keys(obj).forEach(function (recordID) {
            // not necessary gleiche reihenfolge oder one-line
            // start und end vergleichen
            // z.b. zeile 3 nicht gecover
            var loc = obj[recordID].loc;
            // TODO 53-64
            if (objCov[recordID] === 0) {
                removeLinesArray.push(loc);
                countRecords++;
            }
        });
    }
    return removeLinesArray;
};
var writeNewLine = function (fs, file, newLine, mode) {
    // var mod = cntr == 0 ? 'w' : 'a';
    var ADD_MODE = { encoding: 'utf8', flag: 'a' };
    // fs.writeFileSync(file, '', )
    fs.writeFileSync(file, newLine, ADD_MODE);
};
// let fRemoveLines = getRemovableLines(fnObj, fnObjCov, 'f');
// let bRemoveLines = getRemovableLines(bObj, bObjCov, 'b');
var sRemoveLines = getRemovableLines(sObj, sObjCov, 's');
var fnRemoveLines = getRemovableLines(fnObj, fnObjCov, 'f');
var sRemoveLinesOrder = [];
// order lines: sRemoveLines.forEach(item => {
// reset file
if (fs.existsSync(NEW_FILE)) {
    fs.unlinkSync(NEW_FILE);
}
console.log('file deleted');
fs.writeFileSync(NEW_FILE, '', { encoding: 'utf8', flag: 'w+' });
console.log('new file created');
var cntr = 0;
var rl = readline.createInterface({
    input: fs.createReadStream(testFileStr)
});
var isDeleting = false;
// let i = 2; //@todo: why not 0
var i = 0;
var removeLinesLen = sRemoveLines.length;
var STATUS;
(function (STATUS) {
    STATUS[STATUS["OK"] = 0] = "OK";
    STATUS[STATUS["REMOVED"] = 1] = "REMOVED";
    STATUS[STATUS["ERROR"] = 2] = "ERROR";
    STATUS[STATUS["POTENTIAL"] = 3] = "POTENTIAL";
})(STATUS || (STATUS = {}));
var prevLine = '';
// let lineStatus = 0;
var IF = /^(\s*)if\s*\(.*\)\s*\{\s*$/;
var MULTILINE_IF_OPEN = /^(\s*)(if|for)\s\([^\)]*$/;
var MULTILINE_IF_CLOSE = /^(\s*)\)\s*\{\s*$/;
var ELSE = /^(\s*)\}\s*else\s*\{$/;
var ELSE_IF = /^(\s*)\}\s*else\s*if\s*\{\s*$/;
var END_IF = /^(\s*)\}$/;
var FOR = /^(\s*)(for|while)\s*\(.*\)\s*\{\s*$/;
var PROTOTYPE = /^\s*[^\.]*\.prototype\.[^\s]*\s*\=\s*function\([^\)]*\)\s*\{\s*$/;
var END_PROTOTYPE = /^\s*\}\;\s*$/;
var END_FOR = /^(\s*)\}$/;
var FUNCTION = /^\s*function\s[^\()]*\([^\)]*\)\s*\{$/;
var FUNCTION_OBJECT = /^.*\..*\s\=\sfunction(.*)\s*\{$/;
var END_IIFE = /^\s*\}\)\(\)\;\s*$/;
var START_IIFE = /^\s*var\s*([^\s]*)\s*\=\s*\(function\(\)\s*\{$/;
var FN_BLOCK = /^\s*function\s([^\s])*\([^\)]*\)\s*\{\s*$/;
var NOP = 0;
var START = 1;
var STOP = 2;
var DeleteObject = (function () {
    function DeleteObject() {
        this.indexDeletableLine = 0;
        this.forceDeleteElse = false;
        this.keepFnBlock = false;
        this.deleteFunction = false;
        this.changeBlock = false;
        this.deleteBlock = false;
        this.forceDelete = false;
        this.unusedFunctions = [];
        this.deleteIfExpression = '';
        this.detectClosingElse = false;
        this.indention = [];
        this.next = 0;
    }
    DeleteObject.prototype.update = function (indention) {
        if (this.indention.indexOf(indention) === -1) {
            this.indention.push(indention);
        }
    };
    DeleteObject.prototype.reset = function () {
        this.indention = [];
    };
    DeleteObject.prototype.active = function () {
        return this.indention.length > 0;
    };
    DeleteObject.prototype.first = function () {
        return this.indention[0];
    };
    DeleteObject.prototype.last = function () {
        if (this.indention.length > 0) {
            return this.indention[this.indention.length - 1];
        }
        else {
            return -1;
        }
    };
    DeleteObject.prototype.updateNext = function (next) {
        this.next = next;
    };
    DeleteObject.prototype.getNext = function () {
        return this.next;
    };
    DeleteObject.prototype.getNextLine = function () {
        return this.next['start']['line'];
    };
    DeleteObject.prototype.pop = function () {
        this.indention.pop();
    };
    DeleteObject.prototype.contains = function (value) {
        var index = this.indention.indexOf(value);
        // TODO: if(index >= 0){ return true; }
        return index;
    };
    DeleteObject.prototype.getAll = function () {
        return this.indention;
    };
    DeleteObject.prototype["delete"] = function (index) {
        delete this.indention[index];
    };
    return DeleteObject;
}());
var LineObject = (function () {
    function LineObject(line, cntr
        // public newLine: String, public deleteStatus: String, public lineStatus: Number
    ) {
        this.line = line;
        this.cntr = cntr;
        this.newLine = '';
        this.deleteStatus = '';
        this.lineStatus = STATUS.OK;
        this.line = line;
        this.newLine = line;
        this.indentation = this.getIndentation();
    }
    LineObject.prototype.getIndentation = function () {
        var result = this.line.match(/^(\s*)/);
        return result[1].length;
    };
    LineObject.prototype.has = function (type) {
        var check = {
            match: false,
            matchDetail: []
        };
        var pattern = type;
        check.matchDetail = this.line.match(pattern);
        check.match = (check.matchDetail && check.matchDetail.length > 0);
        return check.match;
    };
    LineObject.prototype.update = function (newLine, deleteStatus, lineStatus) {
        this.newLine = this.newLine !== newLine ? newLine : this.newLine;
        this.deleteStatus = this.deleteStatus !== deleteStatus ? deleteStatus : this.deleteStatus;
        this.lineStatus = this.lineStatus !== lineStatus ? lineStatus : this.lineStatus;
    };
    return LineObject;
}());
var ActionObject = (function () {
    function ActionObject(lineObject, deleteObject
        // public newLine: String, public deleteStatus: String, public lineStatus: Number
    ) {
        this.lineObject = lineObject;
        this.deleteObject = deleteObject;
        this.lob = lineObject;
        this.dob = deleteObject;
    }
    ActionObject.prototype.isStartActiveBlock = function () {
        return this.lob.indentation === this.dob.first();
    };
    ActionObject.prototype.isInsideActiveBlock = function () {
        return this.lob.indentation > this.dob.first();
    };
    ActionObject.prototype.isActiveBlock = function () {
        return this.lob.indentation === this.dob.last();
    };
    ActionObject.prototype.keepLine = function (statusText, statusCode, trigger) {
        var status = statusCode || STATUS.OK;
        this.lob.update(this.lob.line, statusText, status);
        handleTrigger(this, trigger);
    };
    ActionObject.prototype.deleteLine = function (statusText, trigger) {
        // let status =  STATUS.REMOVED;
        //     handleTrigger(this, trigger);
        //     this.lob.update('', statusText, status);
        if (undeletable.indexOf(this.lob.cntr) === -1) {
            var status_1 = STATUS.REMOVED;
            handleTrigger(this, trigger);
            this.lob.update('', statusText, status_1);
        }
        else {
            this.keepLine('#NOT DELETABLE');
        }
    };
    ActionObject.prototype.changeLine = function (statusText, statusCode, line, trigger) {
        var status = statusCode || STATUS.REMOVED;
        handleTrigger(this, trigger);
        var newLine = line !== undefined ? line : this.lob.line;
        this.lob.update(newLine, statusText, status);
    };
    return ActionObject;
}());
var handleTrigger = function (ao, trigger) {
    var startOrStop = NOP;
    if (trigger) {
        var keys = Object.keys(trigger);
        keys.forEach(function (key, keyIndex) {
            ao.dob[key] = trigger[key];
            if (trigger[key] === true) {
                startOrStop = START;
            }
            else if (trigger[key] === false) {
                startOrStop = STOP;
            }
        });
        if (startOrStop === START) {
            ao.dob.update(ao.lob.indentation);
        }
        else if (startOrStop === STOP) {
            ao.dob.reset();
            ao.dob.deleteIfExpression = '';
        }
    }
};
// Pt/Dt/Rt/Lt
var deleteUnusedFunctions = function (line, lob, ao) {
    var lm = line.match(/.*(Sn|Wr|Qr|dn\([^\)]*\)|Pt;|Dt;|Rt;|Lt\([^\)]*\)).*/);
    if (lm && lob.has(FUNCTION) === null) {
        ao.deleteLine("#SD");
        return true;
    }
    else {
        var mf = line.match(/.*function\s(Sn|Wr|Qr|dn|Pt|Dt|Rt|Lt)\([^\)]*\).*/);
        if (mf) {
            ao.deleteLine("#DB", { 'deleteBlock': true });
            return true;
        }
        else {
            return false;
        }
    }
};
var DOB = new DeleteObject();
var iifeBlocks = [];
var deletableFn = [];
var deleteIifeBlocks = [114, 159,
    //  181,
    251, 281, 311, 328, 344,
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
    // 7722,
    7818, 8245, 8257,
    // 8355, 8359
    8394, 8919, 8994,
    // 9120
    9185, 9199, 9235,
    // 9250, 9271, 9320
    // 9355
    9467, 9489, 9586, 9714, 9730, 9786, 9860, 9989,
    10088, 10244, 10257,
    10268, 10279, 10290, 10301, 10332
];
// cntr === 311 || cntr === 281 || cntr === 344 || cntr === 999999 || cntr === 9860 || cntr === 9989) { //|| cntr === 9972){
var finalCode = '';
//TODO: 328
console.log('fnRemomvelisens');
console.log(fnRemoveLines[0]);
var fnIndex = 1;
var currentDeletableFn = {};
var analyze = function (line) {
    var LOB = new LineObject(line, cntr + 1);
    var AO = new ActionObject(LOB, DOB);
    // todo: einzeiler löschen, wenn start/ende oder fnDelete not running
    if (cntr === 0) {
        DOB.updateNext(sRemoveLines[DOB.next]);
    }
    // TODO: 310
    if (cntr++ >= 0) {
        // TODO ! DOB.deletingFn && cntr === fnRemoveLines[fnIndex]['start']['line']
        //DELETEABLE line detected
        if (DOB.getNextLine() === (cntr + 1) && !DOB.active() && useLine(cntr)) {
            //TODO: was ist unter 2000
            //TODO: delteable fn array aufbauen
            if (LOB.has(PROTOTYPE) || LOB.has(FUNCTION_OBJECT) || LOB.has(FN_BLOCK)) {
                // 9100 - 9500 => 1x non wokring + löschet element
                // TODO missing loadComponent causes console error
                if (line.match(/(_loadComponent|applyToHost)/)) {
                    AO.changeLine('#CB2 START', STATUS.POTENTIAL, line + '};', { 'changeBlock': true });
                }
                else {
                    AO.deleteLine("#DB START", { 'deleteBlock': true });
                }
            }
            else if (LOB.has(ELSE)) {
                // AO.keepLine( '#NDL_ELSE', STATUS.REMOVED, { 'keepFnBlock': true});
                AO.changeLine('#NDL_ELSE', STATUS.REMOVED, "} //" + line, { 'forceDelete': true, 'forceDeleteElse': true });
            }
            else if (LOB.has(FUNCTION)) {
                AO.keepLine('#KB START', STATUS.OK, { 'keepFnBlock': true });
            }
            else if (LOB.has(FOR)) {
                AO.deleteLine('#NDL_FOR', { 'deleteBlock': true });
            }
            else {
                // AO.keepLine('#NDL_XX', STATUS.ERROR);
                // AO.deleteLine("#DB START", { 'deleteBlock': true});
            }
        }
        else if (DOB.getNextLine() === cntr && !DOB.active()) {
            if (deleteUnusedFunctions(line, LOB, AO)) {
            }
            else if (useLine(cntr)) {
                // not prev line has =
                if (prevLine.match(/.*[^\=]{1}$/)) {
                    //NOT: line ends with ?|:|{|(|[
                    if (LOB.has(IF) && !DOB.active()) {
                        // TODO? 1st if(){   => 2nd if( 
                        AO.keepLine('#KB START2', STATUS.OK, { 'keepFnBlock': true });
                    }
                    else {
                        if (LOB.has(FOR)) {
                            // AO.deleteLine("#FOR START", { 'deleteBlock': true});
                        }
                        else {
                            if (line.match(/(switch|case|for|function)/)) {
                                AO.deleteLine("#DB START", { 'deleteBlock': true });
                            }
                            else {
                                if (line.match(/\)\;/)) {
                                    // TODO: if davor oder deletable function
                                    AO.deleteLine('#5');
                                }
                                else if (line.match(/.*\{\s*$/)) {
                                    AO.keepLine('#4');
                                }
                                else if (line.match(/.*\(\s*$/)) {
                                    //    AO.deleteLine("#DB START", { 'deleteBlock': true});
                                    AO.deleteLine("#DB START", { 'deleteBlock': true });
                                }
                                else {
                                    AO.deleteLine('#2');
                                }
                            }
                        }
                    }
                }
            }
            else {
                AO.keepLine('#NOP');
            }
            // create an Array of deletable stuff
            var deletableEntry = sRemoveLines[DOB.indexDeletableLine];
            if (deletableEntry) {
                DOB.indexDeletableLine++;
                if (sRemoveLines[DOB.indexDeletableLine]) {
                    DOB.updateNext(sRemoveLines[DOB.indexDeletableLine]);
                }
            }
        }
        else {
            if (deleteUnusedFunctions(line, LOB, AO)) {
            }
            else if (cntr === 3064) {
                AO.deleteLine("#DB START", { 'deleteBlock': true });
            }
            else if (DOB.active()) {
                if (DOB.changeBlock === true) {
                    if (!AO.isStartActiveBlock()) {
                        AO.deleteLine('#CB');
                    }
                    else {
                        AO.deleteLine('#CB END', { 'changeBlock': false });
                    }
                }
                else if (DOB.deleteBlock === true) {
                    if (!AO.isStartActiveBlock()) {
                        AO.deleteLine('#DB');
                    }
                    else {
                        AO.deleteLine('#DB END', { 'deleteBlock': false });
                    }
                }
                else if (DOB.keepFnBlock === true) {
                    if (!AO.isStartActiveBlock()) {
                        AO.deleteLine('#KB');
                    }
                    else {
                        AO.keepLine('#KB END', STATUS.OK, { 'keepFnBlock': false });
                    }
                }
                else if (DOB.forceDelete && !AO.isStartActiveBlock()) {
                    AO.deleteLine('#FD');
                }
                else if (LOB.has(END_IF)) {
                    if (DOB.forceDeleteElse) {
                        AO.deleteLine("#99 ENDX_REM", { 'forceDeleteElse': false });
                    }
                }
                else {
                    AO.deleteLine("#DB START", { 'deleteBlock': true });
                }
                // create an Array of deletable stuff
                var deletableEntry = sRemoveLines[DOB.indexDeletableLine];
                if (deletableEntry) {
                    // deactivated
                    DOB.indexDeletableLine++;
                    if (sRemoveLines[DOB.indexDeletableLine]) {
                        DOB.updateNext(sRemoveLines[DOB.indexDeletableLine]);
                    }
                }
            }
            else {
                // Delete IIFE
                if (!DOB.active() && deleteIifeBlocks.indexOf(cntr) >= 0) {
                    // if(LOB.has(START_IIFE) && !DOB.active()){
                    var fnExp = line.match(START_IIFE);
                    // TODO delete unused functions 
                    deletableFn.push(fnExp[1]);
                    var newLine = 'var ' + fnExp[1] + '=' + 'function(n){}; ';
                    AO.changeLine('#CB START', STATUS.POTENTIAL, newLine, { 'changeBlock': true });
                    /// TODO: fnExpe calls
                }
                else {
                    AO.keepLine('#FOO');
                }
            }
        }
        if (LOB.newLine == '') {
            metrics.deleted++;
        }
        if (show.deleteStatus == true) {
            var indentions = (LOB.deleteStatus !== '') ? DOB.getAll() : DOB.first();
            var currentIndention = (LOB.newLine === '') ? DOB.getAll() : DOB.getNextLine();
            var oldLine = (LOB.newLine === '') ? line : indentions;
            LOB.newLine = LOB.newLine + "// " + LOB.deleteStatus + " i:" + currentIndention + " orig: " + oldLine;
        }
        else if (show["delete"]) {
            LOB.newLine = (LOB.newLine === '') ? "//" + line : LOB.newLine;
        }
        updateLineStatus(LOB);
        finalCode += LOB.newLine + '\n';
    }
    else {
    }
    prevLine = line;
};
if (!noRun) {
    rl.on('line', analyze);
}
prevLine = '';
rl.on('close', function () {
    writeNewLine(fs, NEW_FILE, finalCode, false);
    fs.copyFile(NEW_FILE, DIST_FILE, function (err) {
        if (err)
            throw err;
        var time2 = new Date().getTime();
        console.log(NEW_FILE2 + ' was copied to' + DIST_FILE);
        var sizeStart = getFileSize('./assets/foo.js').match(/(\d*)/)[0];
        var sizeEnd = getFileSize(pathToDist).match(/(\d*)/)[0];
        var sizeDiff = (100 * sizeEnd) / sizeStart;
        uglifyFile(DIST_FILE, MIN_FILE);
        var sizeGzip = '34.8';
        var sizeMin = getFileSize(MIN_FILE).match(/(\d*)/)[0];
        var finalStatus = ' ❤️✔️ DONE ⌛' + ((time2 - time) / 1000) + ' 💾 ' + getFileSize('./assets/foo.js') + ' ⬇️ ' + getFileSize(pathToDist) + ' (' + sizeDiff + '%)' + '\n metrics: ✔️' + metrics.ok + '❌ ' + metrics.deleted + '⚠️ ' + metrics.potential;
        notifier.notify(finalStatus);
        console.log('\nstatistics\n: ' + finalStatus);
        var startFile = '../badge_raw.svg';
        var endFile = '../badge.svg';
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
                if (err)
                    return console.log(err);
            });
        });
    });
});
