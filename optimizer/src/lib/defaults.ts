import * as readline from "readline";
const COLORS = {
    GREEN:'32',
    RED:'31',
    YELLOW:'33',
    MAGENTA:'35',
    BLUE:'34',
    WHITE:'37'
}
enum STATUS {
    OK = 0,
    REMOVED = 1,
    ERROR = 2,
    POTENTIAL = 3
}
const OK = 0;
const ERROR = 1;
const WARNING = 2;

function colorize(color, output) {
    return `\u001b[${color}m${output}\u001b[0m`
}
export const LOG = (type, message, details? ) => {
    let output = '';
    let color;
    switch(type){
        case OK: 
            output += colorize(COLORS.GREEN, `✓ ${message}`); break;
        case ERROR:
            output += colorize(COLORS.RED, `🗙 ${message}`); break
        case WARNING: 
            output += colorize(COLORS.YELLOW, `! ${message}`); break
        break
        default: color = COLORS.WHITE;
    }
    if(details && details !== ''){
        output += details;
    }
    console.log(output);
}
let metrics = {
    ok: 0,
    deleted: 0,
    error: 0,
    potential: 0
}
export const getMetricsData = () => {
    return `✔️ ${metrics.ok}  ❌ ${metrics.deleted}  ⚠️ ${metrics.potential}`;
}
export const updateLineStatus = (LOB,  show) => {
    switch (LOB.lineStatus) {
        case STATUS.ERROR:
            metrics.error++;
            break;
        case STATUS.REMOVED:
            // metrics.deleted++;
            break;
        case STATUS.POTENTIAL:
            metrics.potential++;
            break;
        default:
            metrics.ok++;
    }
     if (LOB.newLine == '') {
            metrics.deleted++;
        }
    if (show.output) {
        readline.cursorTo(process.stdout, 0);
        process.stdout.write(
            'line:  ' + colorize(COLORS.WHITE, LOB.cntr.toString()) +
            '| ok: ' + colorize(COLORS.GREEN, metrics.ok.toString()) +
            '| deleted: ' + colorize(COLORS.YELLOW, metrics.deleted.toString()) +
            '| potential: ' + colorize(COLORS.BLUE, metrics.potential.toString()) +
            '| error: ' + colorize(COLORS.RED, metrics.error.toString())
        );
    }
}