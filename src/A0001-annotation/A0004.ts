const objetoA: {
  readonly chaveA: string; // Não permite alteração
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown;
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

//objetoA.chaveA = 'Outro valor';
objetoA.chaveB = 'Nova chave';
