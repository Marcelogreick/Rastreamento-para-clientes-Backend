exports.up = function (knex) {
  return knex.schema.createTable("steps", function (table) {
    table.increments();
    table.string("title").notNullable();
    table.string("description").notNullable();
    table.date("date").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("steps");
};
