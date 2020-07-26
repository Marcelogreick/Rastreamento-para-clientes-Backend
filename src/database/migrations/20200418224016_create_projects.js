exports.up = function(knex) {
    return knex.schema.createTable('projects', function (table) {
        table.string('id').primary()
        table.string('name').notNullable()
        table.string('tipo').notNullable()
        table.date('data_entrada').notNullable()
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('projects')
};