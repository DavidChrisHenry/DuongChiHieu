/** @format */
// for loop O(n)
var sum_to_n_a = (n: number): number => {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
};

//recursion O(n)
var sum_to_n_b = (n: number): number => {
  if (n === 0) {
    return n;
  } else {
    return sum_to_n_b(n - 1) + n;
  }
};

//arithmetic progression O(1)
var sum_to_n_c = (n: number): number => {
  return (n * (n + 1)) / 2;
};
