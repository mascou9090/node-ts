/* eslint-disable */
/*function semRetorno(...args: string[]): void {
  console.log( args.join(' '));
}
*/

const pessoa = {
  nome: 'Marcondes',
  sobrenome: 'Ferreira',
  exibirNome():void {
    console.log(this.nome + ' ' + this.sobrenome);
  }

}

pessoa.exibirNome();

//semRetorno('Marcondes','Ferreira','Pinheiro')

export { pessoa }
