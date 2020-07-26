exports.up = function (knex) {
  return knex.schema.alterTable("projects", function (table) {
    table.string("email").notNullable();
    table.string("phone").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("projects");
};
