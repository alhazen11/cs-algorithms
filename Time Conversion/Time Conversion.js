<<<<<<< HEAD
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
    /*
     * Write your code here.
     */
    let [hh,mm,ss,type] = [s.slice(0,2),s.slice(3,5),s.slice(6,8),s.slice(8,10)];
    if(type == "PM"){
        if(hh == 12){
            return `${hh}:${mm}:${ss}`
        }else{
            return `${parseInt(hh) + 12}:${mm}:${ss}`
        }
    }else{
        if(hh == 12){
            return `00:${mm}:${ss}`
        }else{
            return `${hh}:${mm}:${ss}`
        }
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = timeConversion(s);

    ws.write(result + "\n");

    ws.end();
}
=======
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
    /*
     * Write your code here.
     */
    let [hh,mm,ss,type] = [s.slice(0,2),s.slice(3,5),s.slice(6,8),s.slice(8,10)];
    if(type == "PM"){
        if(hh == 12){
            return `${hh}:${mm}:${ss}`
        }else{
            return `${parseInt(hh) + 12}:${mm}:${ss}`
        }
    }else{
        if(hh == 12){
            return `00:${mm}:${ss}`
        }else{
            return `${hh}:${mm}:${ss}`
        }
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = timeConversion(s);

    ws.write(result + "\n");

    ws.end();
}
>>>>>>> 415fc859280eb9d151399964a86bd0007018470f
