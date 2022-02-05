function addConcat(
  a: number | string | boolean,
  b: number | string | boolean
): number | string {
  if (typeof a === "number" && typeof b === "number") return a + b;
  return `${a}${b}`;
}
console.log(addConcat(10, 20));
console.log(addConcat("leti", "cia"));
console.log(addConcat("50", 10));
console.log(addConcat("10", "let"));
console.log(addConcat(true, true));
