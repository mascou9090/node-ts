type TemNome = {nome: string};
type TemSobrenome = {sobrenome: string};
type TemIdade = {idade: number};
type Pessoa = TemNome & TemSobrenome & TemIdade; //AND


type AB = "A" | "B";
type AC = "A" | "C";
type AD = "D" | "A";
type Intersecao = AB & AC & AD;


const pessoa: Pessoa = {
  idade: 28,
  nome: 'Marcondes',
  sobrenome: 'Ferreira'
}
console.log(pessoa);

//Module mode
export { pessoa };
