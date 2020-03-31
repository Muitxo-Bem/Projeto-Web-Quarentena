
exports.up = function(knex) {
  return knex.schema.createTable('usuario', function(table){
    table.string('tipo_conta').notNullable();
    table.string('nome').notNullable();
    table.string('email').primary();

  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('usuario');
};
