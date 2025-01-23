import { Sequelize } from 'sequelize';
import { Dialect } from 'sequelize/types';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(process.env.DB_NAME!, process.env.DB_USER!, process.env.DB_PASSWORD!, {
  host: process.env.DB_HOST,
  dialect: 'postgres' as Dialect,
  storage: ':memory:',
  logging: false, // Enable detailed logging
});

export default sequelize;