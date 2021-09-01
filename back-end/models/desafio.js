const mongoose = require("mongoose");

const desafioSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  CNPJ: {
    type: String,
    required: true,
  },
  /*atividades: {
    type: String,
    required: true,
  },*/
});

module.exports = mongoose.model("Desafio", desafioSchema);
