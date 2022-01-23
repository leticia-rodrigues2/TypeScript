// Usar any em útimo caso
// Retorna qualque coisa

function showMessage(msg?: any) {
  return msg;
}

console.log(showMessage([1, 2, 3]));
console.log(showMessage("Olá"));
console.log(showMessage(1));
