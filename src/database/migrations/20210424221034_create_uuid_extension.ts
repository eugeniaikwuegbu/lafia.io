import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
    return knex.raw(`CREATE EXTENSION IF NOT EXISTS "pgcrypto"`);
}

// noinspection JSUnusedGlobalSymbols
export async function down(knex: Knex): Promise<void> {
    return knex.raw(`CREATE EXTENSION IF NOT EXISTS "pgcrypto"`);
}
