describe('MaiorMenor', function() {

  it('Deve entender números em ordem não sequencial', function() {
    var maiorMenor = new MaiorMenor();
    maiorMenor.encontra([5, 7, 8, 9]);

    expect(maiorMenor.pegaMaior()).toEqual(9);
    expect(maiorMenor.pegaMenor()).toEqual(5);
  });

  it('Deve entender números em ordem decrescente', function() {
    var mm = new MaiorMenor();
    mm.encontra([9,8,7,6,5]);

    expect(mm.pegaMaior()).toEqual(9);
    expect(mm.pegaMenor()).toEqual(5);
  });

  it('Deve entender números em ordem crescente', () => {
    var mm = new MaiorMenor();
    mm.encontra([5,6,7,8,9,10]);

    expect(mm.pegaMaior()).toEqual(10);
    expect(mm.pegaMenor()).toEqual(5);
  });

  it('Deve entender array com um elemento', () => {
    var mm = new MaiorMenor();
    mm.encontra([9]);

    expect(mm.pegaMaior()).toEqual(9);
    expect(mm.pegaMenor()).toEqual(9);
  });

});

