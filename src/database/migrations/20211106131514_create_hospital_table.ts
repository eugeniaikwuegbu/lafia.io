import * as Knex from 'knex';
import { Schema } from '../schema';
import { Table } from '../table';

export async function up(knex: Knex): Promise<void> {
  return knex
    .transaction(async (trx: Knex.Transaction) => trx.schema
      .createSchemaIfNotExists(Schema.lafiaService)
      .then(() => trx.schema.hasTable(Table.hospitals)
        .then((tableExists: boolean) => {
          if (!tableExists) {
            return trx.schema
              .withSchema(Schema.lafiaService)
              .createTable(Table.hospitals, (tableBuilder: Knex.CreateTableBuilder) => {
                tableBuilder
                  .uuid('id')
                  .unique()
                  .notNullable()
                  .defaultTo(knex.raw('gen_random_uuid()'))
                  .primary(`${Table.hospitals}_id`);
                tableBuilder
                  .string('facility_code')
                  .unique()
                  .notNullable();
                tableBuilder
                  .string('state_unique_id')
                  .unique()
                  .notNullable();
                tableBuilder
                  .string('registration_number')
                  .unique()
                tableBuilder
                  .string('facility_name')
                  .notNullable();
                tableBuilder
                  .string('alternate_name')
                  .notNullable();
                tableBuilder
                  .uuid('status_id')
                  .unique()
                  .notNullable();
                tableBuilder
                  .uuid('contact_id')
                  .unique()
                  .notNullable();
                tableBuilder
                  .uuid('personnel_id')
                  .unique()
                  .notNullable();
                tableBuilder
                  .dateTime('start_date')
                  .notNullable();
                tableBuilder
                  .string('ownership')
                  .notNullable();
                tableBuilder
                  .string('ownership_type')
                  .notNullable();
                tableBuilder
                  .string('facility_level')
                  .notNullable();
                tableBuilder
                  .string('facility_level_option')
                tableBuilder
                  .string('days_of_operation')
                  .notNullable();
                tableBuilder
                  .string('hours_of_operation')
                  .notNullable();
                tableBuilder
                  .timestamps(true, true);

                // Foreign Key Constraints
                tableBuilder
                  .foreign('status_id')
                  .references('id')
                  .inTable(`${Schema.lafiaService}.${Table.statuses}`);

                tableBuilder
                  .foreign('contact_id')
                  .references('id')
                  .inTable(`${Schema.lafiaService}.${Table.contacts}`);
                
                  tableBuilder
                  .foreign('personnel_id')
                  .references('id')
                  .inTable(`${Schema.lafiaService}.${Table.personnels}`);
              });
          }
        }))
      .catch((e) => console.error('MIGRATION_ERROR', e)));
}

// noinspection JSUnusedGlobalSymbols
export async function down(knex: Knex): Promise<void> {
  return knex.schema.withSchema(Schema.lafiaService).dropTableIfExists(Table.hospitals);
}
