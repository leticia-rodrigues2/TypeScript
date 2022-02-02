import { stringify } from "querystring";

let x ;
if (typeof === 'undefined') x = 20 ;
console.log(x * 2);

export function createPerson(
  firstName: string,
  lastName ?: string,
) : {
  firstName:string;
  lastName?: string;
} {
  return{
    firstName,
    lastName,
  };
}
export function squareOf(x: any) {
  if (typeof x === 'number') return x*x;
  return null;
}

const squareOfNumber = squareOf(2);
const squareOfTwoString = squareOf('2');

if(squareOfTwoString === null) {
  console.log('Conta inaválida')
}else {
  console.log(squareOfTwoString *100)
}