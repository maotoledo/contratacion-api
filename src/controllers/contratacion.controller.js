import * as dotenv from 'dotenv';
dotenv.config();
import initModels from "../models/init-models.js";
import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DATABASE_HOST_COBERTURA,
    dialect: "mysql",
  }
);
var models = initModels(sequelize);

export async function getPolizas(req, res) {
  try {
    const cliente = await models.poliza_cliente.findAll({});
    res.json(cliente);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}