var _ = require("lodash");

console.log(_.last(["one", "two"]));
console.log(_.partition([1, 2, 3, 4], (n) => n % 2));
