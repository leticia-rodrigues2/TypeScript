//eslint-disable-line
let x = 10;
x = 0b01010;
const y = 10;
const a = 100; // eslint-disable-line

const pessoa = {
  nome: "Leticia" as const,
  sobrenome: "Rodrigues",
};

function Bolos(sabor: "Morango" | "Chocolate" | "Cenoura"): string {
  return sabor;
}

console.log(Bolos("Cenoura"));

// Mudule mode
export default 1;
