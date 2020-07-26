const connection = require("../database/connection");
const crypto = require("crypto");

module.exports = {
  async listar(req, res) {
    const projects = await connection("projects").select("*");

    return res.json(projects);
  },

  async create(req, res) {
    const { name, tipo, data_entrada, email, phone } = req.body;

    const random = crypto.randomBytes(4).toString("HEX");
    const id = `FB${random}704`;

    await connection("projects").insert({
      id,
      name,
      tipo,
      data_entrada,
      email,
      phone,
    });

    return res.json({ id });
  },
};
