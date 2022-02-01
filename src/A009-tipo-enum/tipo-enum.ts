enum Cores {
  VERMELHO, //1
  ROSA, // 2
  PRETO,
  AZUL = "A",
  VERDE = "V",
  ROXO = 202,
}
enum Cores {
  AMARELO = "A",
  CINZA = 3,
}

console.log(Cores);
console.log(Cores.CINZA);
console.log();
console.log();
console.log("FUNCTION");

function escolhaCor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolhaCor(Cores.PRETO);
