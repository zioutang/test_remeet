var math = function (data) {
  let n = data.length;
  let sum = 0;
  let sum_sqr = 0;
  data.forEach(item => {
    sum += item;
    sum_sqr += item * item;
  })
  return (sum_sqr / n) - ((sum / n) * (sum / n));
}
console.log(math([1, 2, 3, 4, 5]));
// I somehow figured out the math equation:
//  ((a ^ 2 + b ^ 2 + c ^ 2...) / n) - ((a + b + c....) / n) ^ 2.
// So I rewrite it in javascript. At leat I make it more readable.
// running time O(n), running space O(1). Couldn't improve it mathematically.
// The original python code calculates n in O(n). You can access data.length in O(1) instead of computing it.
// This is a slight improvement.
