/* eslint-disable */

//TIPOS BÁSICOS (aqui ocorre inferência de tipos)
let nome: string = "Luiz";
let idade: number = 30;
let idade2: number = 0b1010;
let adulto: boolean = true;
let simbolo: symbol = Symbol("Qualquer0simbolo@#%");
// let big: bigint = 10n;

//ARRAYS
let arrayNumbers: Array<number> = [1, 2, 3];
let arrayNumbers2: number[] = [1, 2, 3];
let arrayStrings: Array<String> = ["a", "b", "c"];
let arrayStrings2: string[] = ["a", "b", "c"];

//OBJETOS
let pessoa: { nome: string; idade: number; adulto?: boolean } = {
  idade: 24,
  nome: "Leticia",
};

//FUNÇÃO
function soma(x: number, y: number): number {
  return x + y;
}

const soma2: (x: number, y: number) => number = (x, y) => x + y;
