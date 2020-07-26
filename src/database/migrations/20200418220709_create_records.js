exports.up = function(knex) {
    return knex.schema.createTable('records', function (table) {
        table.increments()
        table.string('status').notNullable()
        table.string('description').notNullable()
        table.date('data_register').notNullable()


        table.string('projects_id').notNullable()
     //   table.foreign('projects_id').references('id').inTable('projects')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('records')
};