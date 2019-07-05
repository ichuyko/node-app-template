import * as Sequelize from 'sequelize';

const db = 'expressapp';
const username = 'newuser';
const password = 'newuser';

export const sequelize = new Sequelize(db, username, password, {
  dialect: "mysql",
  port: 3306,
});

sequelize.authenticate();