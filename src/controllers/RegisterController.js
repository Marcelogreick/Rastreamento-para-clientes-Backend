const connection = require('../database/connection')

module.exports = { 
    async listar(req, res) {
        const { page = 1 } = req.query

        const [count] = await connection('records').count()

        const records = await connection('records')
        .join('projects','projects.id', '=', 'records.projects_id')
        .limit(5)
        .offset((page - 1) * 5)
        .select('*')

        res.headers('X-Total-Count', count['count(*)'])

        return res.json(records)
    },

    async create(req, res) {
        const {status, description, data_register} = req.body
        const projects_id = req.headers.authorization

        const [id] = await connection('records').insert({
            status,
            description,
            data_register,
            projects_id
        })

        return res.json({ id })
    },

    async delete(req, res) {
        const { id } = req.params
        const projects_id = req.headers.authorization

        const register = await connection('records')
            .where('id', id)
            .select('projects_id')
            .first()
        
        if (register.projects_id != projects_id) {
            return res.status(401).json({ error: 'Esse registro não pertence a esse projeto'})
        }

        await connection('records').where('id', id).delete()

        return res.status(204).send()
    }
}