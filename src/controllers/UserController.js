const connection = require("../database/connection");
const bcrypt = require("bcrypt");

module.exports = {
  // async listar(req, res) {
  //   const user = await connection("user").select("*");

  //   return res.json(user);
  // },

  async create(req, res) {
    const salt = bcrypt.genSaltSync(10);

    const { name, email, senha } = req.body;

    const senhaBc = bcrypt.hashSync(senha, salt);

    await connection("user").insert({
      name,
      email,
      senha: senhaBc,
    });

    return res.json({ name });
  },
};
