export class Empresa {
  public readonly nome: string; // Public é o Default
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(Nome: string, Cnpj: string) {
    this.nome = Nome;
    this.cnpj = Cnpj;
  }

  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

}
export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
    ) {}
}

const empresa1 = new Empresa('Udemy','11.111.111/0001-11');
const colaborador1 = new Colaborador('Mascou','Cachorrão');
const colaborador2 = new Colaborador('Kellyane','Cachorrona');
const colaborador3 = new Colaborador('Secretaria','Do mãl');


empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);
empresa1.adicionaColaborador(new Colaborador('Mero', 'Cagão'));

console.log(empresa1);
