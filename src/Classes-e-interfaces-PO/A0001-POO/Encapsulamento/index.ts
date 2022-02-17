export class ControleRemoto {
  constructor(private powerStatus = false){}
  public turnOn():void {
    this.powerStatus = true;
  }
  public turnOff():void {
    this.powerStatus = false;
  }
  public getStatus():boolean {
    return this.powerStatus;
  }
  
}