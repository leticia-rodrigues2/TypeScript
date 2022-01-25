function semRetorno(...args: string[]): void {
  console.log(args.join(" "));
}

const pessoa = {
  nome: "Leticia",
  sobrenome: "Rodrigues",

  exibirNome(): void {
    console.log(this.nome + " " + this.sobrenome);
  },
};

semRetorno("Leticia", "Rodrigues");
pessoa.exibirNome();

export { pessoa };
