import * as Knex from 'knex';
import { Schema } from '../schema';
import { Table } from '../table';

export async function up(knex: Knex): Promise<void> {
  return knex
    .transaction(async (trx: Knex.Transaction) => trx.schema
      .createSchemaIfNotExists(Schema.lafiaService)
      .then(() => trx.schema.hasTable(Table.hospital_locations)
        .then((tableExists: boolean) => {
          if (!tableExists) {
            return trx.schema
              .withSchema(Schema.lafiaService)
              .createTable(Table.hospital_locations, (tableBuilder: Knex.CreateTableBuilder) => {
                tableBuilder
                  .uuid('id')
                  .unique()
                  .notNullable()
                  .defaultTo(knex.raw('gen_random_uuid()'))
                  .primary(`${Table.hospital_locations}_id`);
                tableBuilder
                  .uuid('hospital_id')
                  .unique()
                  .notNullable();
                tableBuilder
                  .uuid('location_id')
                  .unique()
                  .notNullable();
                tableBuilder
                  .timestamps(true, true);

                // Foreign Key Constraints
                tableBuilder
                  .foreign('hospital_id')
                  .references('id')
                  .inTable(`${Schema.lafiaService}.${Table.hospitals}`);
                tableBuilder
                  .foreign('location_id')
                  .references('id')
                  .inTable(`${Schema.lafiaService}.${Table.locations}`);

              });
          }
        }))
      .catch((e) => console.error('MIGRATION_ERROR', e)));
}

// noinspection JSUnusedGlobalSymbols
export async function down(knex: Knex): Promise<void> {
  return knex.schema.withSchema(Schema.lafiaService).dropTableIfExists(Table.hospital_locations);
}
