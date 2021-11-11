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
                tableBuilder
                  .string('state_unique_id')
                tableBuilder
                  .string('registration_number')
                tableBuilder
                  .string('facility_name')
                tableBuilder
                  .string('alternate_name')
                tableBuilder
                  .dateTime('start_date')
                tableBuilder
                  .string('ownership')
                tableBuilder
                  .string('ownership_type')
                tableBuilder
                  .string('facility_level')
                tableBuilder
                  .string('facility_level_option')
                tableBuilder
                  .string('days_of_operation')
                tableBuilder
                  .string('hours_of_operation')
                tableBuilder
                  .uuid('status_id')
                  .unique()
                tableBuilder
                  .uuid('contact_id')
                tableBuilder
                  .uuid('personnel_id')
                tableBuilder
                  .uuid('location_id')
                tableBuilder
                  .uuid('service_id')
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
                tableBuilder
                  .foreign('location_id')
                  .references('id')
                  .inTable(`${Schema.lafiaService}.${Table.locations}`);
                tableBuilder
                  .foreign('service_id')
                  .references('id')
                  .inTable(`${Schema.lafiaService}.${Table.services}`);
              });
          }
        }))
      .catch((e) => console.error('MIGRATION_ERROR', e)));
}

// noinspection JSUnusedGlobalSymbols
export async function down(knex: Knex): Promise<void> {
  return knex.schema.withSchema(Schema.lafiaService).dropTableIfExists(Table.hospitals);
}
