// Array<T> - T[]

export function multplicaArgs(...args: Array<number>):number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

export function concatenaString(...args: string[]): string {
  return args.reduce((ac,valor) => ac + valor);
}

export function toUpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

const result = multplicaArgs(1,2,3);
const concatenacao = concatenaString('Marcondes', ' Ferreira');
const upper = toUpperCase('a', 'b', 'c');

console.log(result);
console.log(concatenacao);
console.log(upper);

