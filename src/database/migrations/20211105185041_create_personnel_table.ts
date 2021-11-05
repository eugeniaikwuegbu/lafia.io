import * as Knex from 'knex';
import { Schema } from '../schema';
import { Table } from '../table';

export async function up(knex: Knex): Promise<void> {
  return knex
    .transaction(async (trx: Knex.Transaction) => trx.schema
      .createSchemaIfNotExists(Schema.lafiaService)
      .then(() => trx.schema.hasTable(Table.personnels)
        .then((tableExists: boolean) => {
          if (!tableExists) {
            return trx.schema
              .withSchema(Schema.lafiaService)
              .createTable(Table.personnels, (tableBuilder: Knex.CreateTableBuilder) => {
                tableBuilder
                  .uuid('id')
                  .unique()
                  .notNullable()
                  .defaultTo(knex.raw('gen_random_uuid()'))
                  .primary(`${Table.personnels}_id`);
                tableBuilder
                  .integer('doctor')
                tableBuilder
                  .integer('pharmacist')
                tableBuilder
                  .integer('pharmacy_technician')
                tableBuilder
                  .integer('dentist')
                tableBuilder
                  .integer('dental_technician')
                tableBuilder
                  .integer('nurse')
                tableBuilder
                  .integer('midwife')
                tableBuilder
                  .integer('lab_technician')
                tableBuilder
                  .integer('lab_scientist')
                tableBuilder
                  .integer('health_records_officer')
                tableBuilder
                  .integer('community_health_officer')
                tableBuilder
                  .integer('community_health_extension_worker')
                tableBuilder
                  .integer('junior_community_health_extension_worker')
                tableBuilder
                  .integer('environment_health_officer')
                tableBuilder
                  .integer('health_attendant')
                tableBuilder
                  .timestamps(true, true);
              });
          }
        }))
      .catch((e) => console.error('MIGRATION_ERROR', e)));
}

// noinspection JSUnusedGlobalSymbols
export async function down(knex: Knex): Promise<void> {
  return knex.schema.withSchema(Schema.lafiaService).dropTableIfExists(Table.personnels);
}
