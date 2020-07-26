const connection = require("../database/connection");

module.exports = {
  async listar(req, res) {
    const steps = await connection("steps").select("*");

    return res.json(steps);
  },

  async create(req, res) {
    const { title, description, date } = req.body;

    await connection("steps").insert({
      title,
      description,
      date,
    });

    return res.json({ title, description, date });
  },
};
