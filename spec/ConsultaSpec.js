describe('Consulta', function() {

  var guilherme;

  beforeEach(function() {
    guilherme = new PacienteBuilder().constroi();
  });

  describe('Consultas que são retornos', function() {
    it('Não deve cobrar consulta se for retorno', function(){
      var consulta = new Consulta(guilherme, [], true, true, Date.now());
  
      expect(consulta.preco()).toEqual(0);
    });
  });

  describe('Consultas que são particulares', function() {
    it('Deve cobrar 25 por cada procedimento comum', function() {
      var consulta = new Consulta(guilherme, ['proc1', 'proc2'], false, false, Date.now());
  
      expect(consulta.preco()).toEqual(50);
    });
  
    it('Deve dobrar o preco da consulta particular com procedimentos comuns', function() {
      var consulta = new Consulta(guilherme, ['proc1', 'proc2'], true, false, Date.now());
  
      expect(consulta.preco()).toEqual(50 * 2);
    });
  
    it('Deve dobrar o preco da consulta particular com procedimentos especiais ', function() {
      var consulta = new Consulta(guilherme, ['raio-x'], true, false, Date.now());
  
      expect(consulta.preco()).toEqual(55 * 2);
    });
  });

  describe('Consultas por um convênio', function() {
    it('Deve cobrar preco específico dependendo do procedimento', function() {
      var consulta = new Consulta(
        guilherme, 
        ["procedimento-comum", "raio-x", "procedimento-comum2", "gesso"],
        false, false, Date.now()
      );
  
      expect(consulta.preco()).toEqual(25 + 55 + 25 + 32);
    });
  });

});

