import Knex from 'knex';

export async function up(knex: Knex) {
    return;
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('point_item');
}