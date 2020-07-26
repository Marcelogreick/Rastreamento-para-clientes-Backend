const connection = require('../database/connection')

module.exports = {
    async listar(req, res) {
        const projects_id = req.headers.authorization

        const records = await connection('records')
        .where('projects_id', projects_id)
        .select('*')

        return res.json(records)
    }
}