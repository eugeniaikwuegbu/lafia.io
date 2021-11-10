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
                  .integer('doctors')
                tableBuilder
                  .integer('pharmacists')
                tableBuilder
                  .integer('pharmacy_technicians')
                tableBuilder
                  .integer('dentists')
                tableBuilder
                  .integer('dental_technicians')
                tableBuilder
                  .integer('nurses')
                tableBuilder
                  .integer('midwifes')
                tableBuilder
                  .integer('nurses_or_midwifes')
                tableBuilder
                  .integer('lab_technicians')
                tableBuilder
                  .integer('lab_scientists')
                tableBuilder
                  .integer('health_records_officers')
                tableBuilder
                  .integer('community_health_officers')
                tableBuilder
                  .integer('community_health_extension_workers')
                tableBuilder
                  .integer('junior_community_health_extension_workers')
                tableBuilder
                  .integer('environment_health_officers')
                tableBuilder
                  .integer('health_attendants')
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
