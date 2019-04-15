function Agendamento() {

  var clazz = {

    para: function (consulta) {

      var umDiaEmMilissegundo = 1000 * 60 * 60 * 24;
      var vinteDiasEmMillisegundos = umDiaEmMilissegundo * 20;

      var novaData = new Date(consulta.getData().getTime() + vinteDiasEmMillisegundos);
      while (novaData.getDay() == 0 || novaData.getDay() == 6) {
        novaData = new Date(novaData.getTime() + umDiaEmMilissegundo);
      }

      var novaConsulta = new Consulta(consulta.getPaciente(), consulta.getProcedimentos(),
        consulta.isParticular(), consulta.isRetorno(), novaData);
      return novaConsulta;
    }
  };

  return clazz;
}