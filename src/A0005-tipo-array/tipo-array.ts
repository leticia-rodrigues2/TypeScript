// Array<T> - T[]
export function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor * 1);
}

export function concatenarString(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}

export function toUpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

const result = multiplicaArgs(20, 30, 10);
const concatenar = concatenarString("Let", "ici", "a");
const upper = toUpperCase("le", "ti", "ci", "a");

console.log(result);
console.log(concatenar);
console.log(upper);
