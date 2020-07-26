const connection = require("../database/connection");
const bcrypt = require("bcrypt");

module.exports = {
  async create(req, res) {
    const { email, senha } = req.body;

    const user = await connection("user")
      .where("email", email)
      .select("id")
      .select("name")
      .select("senha")
      .first();

    if (!user) {
      return res.status(400).json({ error: "Usuario Inválido" });
    }

    if (bcrypt.compareSync(senha, user.senha)) {
      return res.json(user);
    } else {
      return res.status(400).json({ error: "Senha Inválida" });
    }
  },
};
