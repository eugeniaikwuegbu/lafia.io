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
                tableBuilder
                  .boolean('in_patient')
                tableBuilder
                  .string('medical')
                tableBuilder
                  .string('surgical');
                tableBuilder
                  .string('obsterics_and_gynae')
                tableBuilder
                  .string('pediatrics')
                tableBuilder
                  .string('dental')
                tableBuilder
                  .text('specific_clinical')
                tableBuilder
                  .integer('beds')
                  .defaultTo(0)
                tableBuilder
                  .boolean('onsite_lab')
                tableBuilder
                  .boolean('onsite_imaging')
                tableBuilder
                  .boolean('onsite_pharmacy')
                tableBuilder
                  .boolean('mortuary')
                tableBuilder
                  .boolean('ambulance')
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
