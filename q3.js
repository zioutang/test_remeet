// Q3 ---> node q3.js < confucius.txt
var stdin = process.openStdin();
stdin.setEncoding('utf8');
var lingeringLine = [];
stdin.on('data', function (chunk) {
  let lines = chunk.split(`\n`);
  lingeringLine = lines;
});
stdin.on('end', function () {
  let map = {};
  let n = lingeringLine.length;
  while (n > 0) {
    let index = Math.floor(Math.random() * lingeringLine.length);
    if (!map[index]) {
      console.log(`text line No.${index}: `, lingeringLine[index]);
      map[index] = true;
      n--;
    }
  }
});

var printError = function (n) {
  try {
    fun('hello world'); // an arbitrary reference error
  } catch (e) {
    // console.log(e instanceof ReferenceError); --> true
    // console.log(e.message); --> "fun is not defined"
    // console.log(e.name); --> "ReferenceError"
    let str = e.stack.toString();
    let lines = str.split(`\n`);
    for (let i = 0; i < lines.length; i++) {
      if ((i + 1) % n === 0) {
        console.error(`error line No.${i + 1}: `, lines[i]);
      }
    }
  }
}
let n = 3; // print every 3rd instead of 10th since the error stack is not that long
printError(n);
