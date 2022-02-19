export abstract class Animal {
  constructor(public name :string){} 
  abstract makeNoise():void;    
  
}
export class Dog extends Animal {
  makeNoise(): void {
      console.log(`${this.name} faz AUAUAU`)
  }
}
export class Cat extends Animal {
  makeNoise(): void {
      console.log(`${this.name} faz MIAU MIAU`)
  }
}