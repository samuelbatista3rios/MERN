const express = require("express");
const router = express.Router();
const Desafio = require("../models/desafio");

router.get("/", async (req, res) => {
  try {
    const desafio = await Desafio.find();
    res.json(desafio);
  } catch (err) {
    res.send("Error " + err);
  }
});
router.get("/:id", async (req, res) => {
  try {
    const desafio = await Desafio.findById(req.params.id);
    res.json(desafio);
  } catch (err) {
    res.send("Error " + err);
  }
});

router.post("/", async (req, res) => {
  const desafio = new Desafio({
    name: req.body.name,
    CNPJ: req.body.CNPJ,
    atividades: req.body.atividades,
  });
  try {
    const a1 = await desafio.save();
    res.json(a1);
  } catch (err) {
    res.send("Error");
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const desafio = await desafio.findById(req.params.id);
    desafio.CNPJ = req.body.CNPJ;
    const a1 = await desafio.save();
    res.json(a1);
  } catch (err) {
    res.send("Error");
  }
});

module.exports = router;
