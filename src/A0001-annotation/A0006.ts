//This is called Tupla

const dadosCliente1: readonly [number, string] = [1, 'Mascou'];
const dadosCliente2: [number, string, string] = [1, 'Mascou','Cachorrão'];
const dadosCliente3: [number, string, string?] = [1, 'Mascou'];
const dadosCliente4: [number, string, ...string[]] = [1, 'Mascou','Safadão'];


//dadosCliente1[0] = 1000;
console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

// readonly array

const array: readonly string[] = ['Mascou', 'Cachorrão'];
const array2: ReadonlyArray<string> = ['Mascou', 'Cachorrão'];

console.log(array);
console.log(array2);
