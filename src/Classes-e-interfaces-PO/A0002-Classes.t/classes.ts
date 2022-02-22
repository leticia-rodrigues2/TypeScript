import { Empresa, Colaborador } from './classes';
export class Empresa {
public readonly nome : string;
private readonly colaboradores : Colaborador [] = [];
protected readonly cnpj:string;

  constructor (nome : string , cnpj : string){
    this.nome = nome ;
    this.cnpj  = cnpj;
  }
  adicionaColaborador (colaborador : Colaborador) : void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaboradores() : void {
    for (const colaborador of this.colaboradores){
      console.log(colaborador)
    }
  }

}

export class Colaborador {
  constructor(
    public readonly mome : string,
    public readonly sobrenome : string,
  ){}
}

const Empresa1  = new Empresa ('Udemy' , '11.111.111/0001-11');
const Colaborador1 = new Colaborador ('Leticia' , 'Rodrigues');
const Colaborador2 = new Colaborador ('Leandro' , 'Rodrigues');
const Colaborador3 = new Colaborador ('Ketelin' , 'Rodrigues');
Empresa1.adicionaColaborador(Colaborador1)
Empresa1.adicionaColaborador(Colaborador3)
Empresa1.adicionaColaborador(Colaborador2)

console.log(Empresa1);
Empresa1.mostrarColaboradores();