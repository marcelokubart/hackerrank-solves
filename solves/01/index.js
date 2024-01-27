'use strict';

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

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    const length = arr.length;

    const zeros = ((arr.filter(n => n === 0).length) / length).toFixed(4)
    const negatives = ((arr.filter(n => n < 0).length) / length).toFixed(4)
    const positives = ((arr.filter(n => n > 0).length) / length).toFixed(4)
    console.log(positives)
    console.log(negatives)
    console.log(zeros)
}

function main() {
    const n = parseInt(readLine().trim(), 10);
    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    plusMinus(arr);
}
