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
                  .defaultTo(0)
                tableBuilder
                  .integer('pharmacists')
                  .defaultTo(0)
                tableBuilder
                  .integer('pharmacy_technicians')
                  .defaultTo(0)
                tableBuilder
                  .integer('dentists')
                  .defaultTo(0)
                tableBuilder
                  .integer('dental_technicians')
                  .defaultTo(0)
                tableBuilder
                  .integer('nurses')
                  .defaultTo(0)
                tableBuilder
                  .integer('midwifes')
                  .defaultTo(0)
                tableBuilder
                  .integer('nurses_or_midwifes')
                  .defaultTo(0)
                tableBuilder
                  .integer('lab_technicians')
                  .defaultTo(0)
                tableBuilder
                  .integer('lab_scientists')
                  .defaultTo(0)
                tableBuilder
                  .integer('health_records_officers')
                  .defaultTo(0)
                tableBuilder
                  .integer('community_health_officers')
                  .defaultTo(0)
                tableBuilder
                  .integer('community_health_extension_workers')
                  .defaultTo(0)
                tableBuilder
                  .integer('junior_community_health_extension_workers')
                  .defaultTo(0)
                tableBuilder
                  .integer('environment_health_officers')
                  .defaultTo(0)
                tableBuilder
                  .integer('health_attendants')
                  .defaultTo(0)
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
