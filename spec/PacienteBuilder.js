function PacienteBuilder() {

  var nome = 'Guilherme';
  var idade = 24;
  var peso = 72;
  var altura = 1.69;

  var clazz = {
    comNome: (valor) => {
      name = valor;
      return this;
    },

    comIdade: (valor) => {
      idade = valor;
      return this;
    },

    comPeso: (valor) => {
      peso = valor;
      return this;
    },

    comAltura: (valor) => {
      altura = valor;
      return this;
    },
    constroi: () => {
      return new Paciente(nome, idade, peso, altura);
    }
  };

  return clazz;
}