const connection = require("../database/connection");

module.exports = {
  async create(req, res) {
    const { id } = req.body;

    const project = await connection("projects")
      .where("id", id)
      .select("name")
      .select("tipo")
      .select("data_entrada")
      .first();

    if (!project) {
      return res.status(400).json({ error: "Código Inválido" });
    }

    return res.json(project);
  },
};
