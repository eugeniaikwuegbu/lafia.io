import { JSONSchema, Model } from 'objection';
import visibilityPlugin from 'objection-visibility';
import { PostgresConnection } from '../../config';
import { IBase } from './interfaces';
import { BaseValidation } from './validation';

/*
* @description: Initialize Knex instance -
* giving objection access to db connection
*/
Model.knex(PostgresConnection.getDb());


/*
* @class: BaseModel
*
* @description: Set general configuration for
* all other models
*/
export class BaseModel extends visibilityPlugin(Model) implements IBase {
  public id: IBase['id'];
  public created_at: IBase['created_at'];
  public updated_at: IBase['updated_at'];

  // Set timestamps before creating new data in the db
  $beforeInsert() {
    this.created_at = new Date();
    this.updated_at = new Date();
  }

  // Update the updated_at timestamp for the affected rows
  $beforeUpdate() {
    this.updated_at = new Date();
  }

  // Set the default path for all the models
  static get modelPaths(): string[] {
    return [__dirname];
  }

  static get jsonSchema(): JSONSchema {
    return BaseValidation;
  }
}
