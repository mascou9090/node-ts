let x;
if (typeof x === 'undefined') x = 20;
console.log(x);

export function createPerson(firstName: string, LastName?: string): {
  firstName: string;
  LastName?: string;
} {
  return {
    firstName,
    LastName,
  };
}


export function squareOf(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}

const squareOfTwoNumber = squareOf(2);

if (squareOfTwoNumber === null) {
  console.log('Conta inválida');
} else {
  console.log(squareOfTwoNumber * 100);
}
