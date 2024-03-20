const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',          
  username: 'root',           
  password: 'Ameymin@12345',      
  database: 'new'            
});

module.exports = sequelize;