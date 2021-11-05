import * as Knex from 'knex';
import { Schema } from '../schema';
import { Table } from '../table';

export async function up(knex: Knex): Promise<void> {
  return knex
    .transaction(async (trx: Knex.Transaction) => trx.schema
      .createSchemaIfNotExists(Schema.lafiaService)
      .then(() => trx.schema.hasTable(Table.statuses)
        .then((tableExists: boolean) => {
          if (!tableExists) {
            return trx.schema
              .withSchema(Schema.lafiaService)
              .createTable(Table.statuses, (tableBuilder: Knex.CreateTableBuilder) => {
                tableBuilder
                  .uuid('id')
                  .unique()
                  .notNullable()
                  .defaultTo(knex.raw('gen_random_uuid()'))
                  .primary(`${Table.statuses}_id`);
                tableBuilder
                  .string('operational')
                  .notNullable();
                tableBuilder
                  .string('registration')
                  .notNullable();
                tableBuilder
                  .string('license')
                  .notNullable()
                tableBuilder
                  .timestamps(true, true);
              });
          }
        }))
      .catch((e) => console.error('MIGRATION_ERROR', e)));
}

// noinspection JSUnusedGlobalSymbols
export async function down(knex: Knex): Promise<void> {
  return knex.schema.withSchema(Schema.lafiaService).dropTableIfExists(Table.statuses);
}
