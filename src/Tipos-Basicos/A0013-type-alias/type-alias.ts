type Idade = number;
type Pessoa = {
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: string;
};
type corRGB = "Vermelho" | "Verde" | "Azul";
type corCMYK = "Ciano" | "Magenta" | "Amarelo" | "Preto";
type corPreferida = corRGB | corCMYK;

const pessoa: Pessoa = {
  idade: 24,
  nome: "Leticia",
  salario: 200_000,
};

export function setCorPreferida(pessoa: Pessoa, cor: corPreferida): Pessoa {
  return { ...pessoa, corPreferida: cor };
}
console.log(setCorPreferida(pessoa, "Preto"));
console.log(pessoa.nome);
console.log(pessoa);
