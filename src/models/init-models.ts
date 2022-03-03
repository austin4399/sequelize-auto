import type { Sequelize } from "sequelize";
import { Example as _Example } from "./Example";
import type { ExampleAttributes, ExampleCreationAttributes } from "./Example";

export {
  _Example as Example,
};

export type {
  ExampleAttributes,
  ExampleCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const Example = _Example.initModel(sequelize);


  return {
    Example: Example,
  };
}
