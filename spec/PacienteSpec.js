describe('Paciente', function() {

  var guilherme;

  beforeEach(() => {
    guilherme = new PacienteBuilder().constroi();
  });

  it('Deve calcular IMC', function() {
    expect(guilherme.imc()).toEqual(72/(1.69 * 1.69));
  });

  it('Deve calcular batimentos cardíacos', function() {
    expect(guilherme.batimentos()).toEqual(60549120000);
  });

});

