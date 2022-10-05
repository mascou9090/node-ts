type Idade = number;
type Pessoa = {
  nome: string,
  idade: Idade;
  salario: number;
  corPreferida?: CorPreferida;
};

type	CorRGB = 'Vermelho' | 'Verde' | 'Azul';
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
type CorPreferida = CorRGB | CorCMYK;

const pessoa: Pessoa = {
  idade: 28,
  nome: 'Marcondes',
  salario: 200000,
}

export function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
  return { ...pessoa, corPreferida: cor};
}

console.log(setCorPreferida(pessoa, 'Vermelho'));
console.log(pessoa);

export default 1;
