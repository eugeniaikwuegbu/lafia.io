import * as Knex from 'knex';
import { Schema } from '../schema';
import { Table } from '../table';

export async function up(knex: Knex): Promise<void> {
  return knex
    .transaction(async (trx: Knex.Transaction) => trx.schema
      .createSchemaIfNotExists(Schema.dropperService)
      .then(() => trx.schema.hasTable(Table.twilio_services)
        .then((tableExists: boolean) => {
          if (!tableExists) {
            return trx.schema
              .withSchema(Schema.dropperService)
              .createTable(Table.twilio_services, (tableBuilder: Knex.CreateTableBuilder) => {
                tableBuilder
                  .uuid('id')
                  .unique()
                  .notNullable()
                  .defaultTo(knex.raw('gen_random_uuid()'))
                  .primary(`${Table.twilio_services}_id`);
                tableBuilder
                  .string('sid')
                  .notNullable();
                tableBuilder
                  .string('friendly_name')
                  .notNullable();
                tableBuilder
                  .timestamps(true, true);
              });
          }
        }))
      .catch((e) => console.error('MIGRATION_ERROR', e)));
}

// noinspection JSUnusedGlobalSymbols
export async function down(knex: Knex): Promise<void> {
  return knex.schema.withSchema(Schema.dropperService).dropTableIfExists(Table.twilio_services);
}
