let x = 10;
x = 0b1010;
const y = 10;
const a = 100;

const pessoa = {
  nome: 'Luiz' as const,
  sobrenome: 'Miranda',
};

function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul' ): string {
  return cor;
}

console.log(escolhaCor('Vermelho'));

export default 1;
