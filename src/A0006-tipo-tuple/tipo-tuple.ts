//TUPLE
const dadosCliente1: readonly [number, string] = [1, "Leticia"];
const dadosCliente2: [number, string, string] = [1, "Leticia", "Rodrigues"];
const dadosCliente3: [number, string, string?] = [1, "Leticia"];
const dadosCliente4: [number, string, ...string[]] = [
  1,
  "Leticia",
  "Rodrigues",
];

dadosCliente2[0] = 200;
dadosCliente2[1] = "Lets";

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

//readonly array
const array1: readonly string[] = ["Leticia", "Otavio"];
const array2: ReadonlyArray<String> = ["Leticia", "Otavio"];

console.log(array1);
console.log(array2);
