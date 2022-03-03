import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ExampleAttributes {
  id?: number;
  title?: string;
  description?: string;
}

export type ExamplePk = "id";
export type ExampleId = Example[ExamplePk];
export type ExampleOptionalAttributes = "id" | "title" | "description";
export type ExampleCreationAttributes = Optional<ExampleAttributes, ExampleOptionalAttributes>;

export class Example extends Model<ExampleAttributes, ExampleCreationAttributes> implements ExampleAttributes {
  id?: number;
  title?: string;
  description?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof Example {
    return Example.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Example',
    timestamps: false
  });
  }
}
