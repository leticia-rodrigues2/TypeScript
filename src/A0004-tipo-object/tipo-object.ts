const produto: {
  readonly produtoA: string; // não deixa fazer mudanças
  produtoB: string;
  produtoC?: string;
  [key: string]: unknown; // Para conseguir criar fora do escorpo
} = {
  produtoA: "Caderno",
  produtoB: "Caneta",
};

produto.produtoB = "Borracha";
produto.produtoC = "Caneta";
produto.produtoX = 15;

console.log(produto);
