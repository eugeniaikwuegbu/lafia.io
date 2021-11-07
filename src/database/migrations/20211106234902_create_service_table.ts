import * as Knex from 'knex';
import { Schema } from '../schema';
import { Table } from '../table';

export async function up(knex: Knex): Promise<void> {
  return knex
    .transaction(async (trx: Knex.Transaction) => trx.schema
      .createSchemaIfNotExists(Schema.lafiaService)
      .then(() => trx.schema.hasTable(Table.services)
        .then((tableExists: boolean) => {
          if (!tableExists) {
            return trx.schema
              .withSchema(Schema.lafiaService)
              .createTable(Table.services, (tableBuilder: Knex.CreateTableBuilder) => {
                tableBuilder
                  .uuid('id')
                  .unique()
                  .notNullable()
                  .defaultTo(knex.raw('gen_random_uuid()'))
                  .primary(`${Table.services}_id`);
                tableBuilder
                  .boolean('out_patient')
                  .notNullable();
                tableBuilder
                  .boolean('in_patient')
                  .notNullable();
                tableBuilder
                  .string('medical')
                  .notNullable();
                tableBuilder
                  .string('surgical')
                  .notNullable();
                tableBuilder
                  .string('obsterics_and_gynae')
                  .notNullable();
                tableBuilder
                  .string('paediatrics')
                  .notNullable();
                tableBuilder
                  .string('dental')
                  .notNullable();
                tableBuilder
                  .string('specific_clinical')
                  .notNullable();
                tableBuilder
                  .integer('bed')
                  .notNullable();
                tableBuilder
                  .boolean('onsite_lab')
                  .notNullable();
                tableBuilder
                  .boolean('onsite_imaging')
                  .notNullable();
                tableBuilder
                  .boolean('onsite_pharmacy')
                  .notNullable();
                tableBuilder
                  .boolean('mortuary')
                  .notNullable();
                tableBuilder
                  .boolean('ambulance')
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
  return knex.schema.withSchema(Schema.lafiaService).dropTableIfExists(Table.services);
}
