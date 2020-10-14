'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the migratoryBirds function below.
function migratoryBirds(arr) {
    let val = [0,0,0,0,0]
    for(let i = 0; i < arr.length; i++){
        switch(arr[i]){
            case 1: val[0]+=1; break;
            case 2: val[1]+=1; break;
            case 3: val[2]+=1; break;
            case 4: val[3]+=1; break;
            case 5: val[4]+=1; break;
        }
    } 
    return val.indexOf(Math.max(...val)) +1

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = migratoryBirds(arr);

    ws.write(result + '\n');

    ws.end();
}
