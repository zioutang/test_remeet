// Q1
var unirest = require('unirest');
var dfs = function (list, numStr) {
  if (numStr.length === 3) {
    list.push(numStr);
  } else {
    let i = numStr === '' ? 1 : 0;
    while (i <= 9) {
      numStr += i;
      dfs(list, numStr);
      numStr = numStr.slice(0, numStr.length - 1);
      i++;
    }
  }
}
var http_req = function (n) {
  unirest.post('https://remeeting.com/quiz/python_script.cgi')
    .headers({
      'Authorization': 'Basic cmVtZWV0aW5nOnF1aXo=', // base64 encoding
    })
    .send({
      "number": n
    })
    .end(function (response) {
      if (response.status !== 200) {
        console.log(` Guessing ${n}, got code: ${response.status} this time`);
        http_req(n); // sometimes the server doesn't response. If we assume the server will be always on then we don't need this recursive call.
      } else if (response.body.indexOf('is not my favorite number...') === -1) {
        console.log(`It's ${n}, I got it!!`); /// I found 144!!
        process.exit();
      }
    });
}
var guessing = function () {
  let rawList = [];
  dfs(rawList, ''); // After completing the backtracking function I realized I can simply write a loop from 100 to 999....
  let i = 0;
  while (i < rawList.length) {
    let curr = parseInt(rawList[i]);
    http_req(curr);
    i++;
  }
}
guessing();
