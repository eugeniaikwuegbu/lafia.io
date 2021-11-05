import * as Knex from 'knex';
import { Schema } from '../schema';
import { Table } from '../table';

export async function up(knex: Knex): Promise<void> {
  try {
    return await knex.schema
      .withSchema(Schema.dropperService)
      .table(Table.users, (tableBuilder: Knex.TableBuilder) => {
        tableBuilder.boolean('phone_verified').defaultTo(false);
      });
  } catch (e) {
    console.error('MIGRATION_ERROR', e);
  }
}

// noinspection JSUnusedGlobalSymbols
export async function down(knex: Knex): Promise<void> {
  return knex.schema.withSchema(Schema.dropperService)
    .table(Table.users, (tableBuilder: Knex.TableBuilder) => {
      tableBuilder.dropColumn('phone_verified');
    });
}
