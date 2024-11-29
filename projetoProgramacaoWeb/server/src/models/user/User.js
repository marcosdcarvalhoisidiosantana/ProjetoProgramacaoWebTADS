const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const Usuario = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER, // Tipo inteiro
    autoIncrement: true, // Incrementa automaticamente
    primaryKey: true, // Define como chave primária
    allowNull: false, // Não permite valores nulos
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  genero: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  data_nascimento: {
    type: DataTypes.DATE,
    allowNull: true,
  },   
  pais_origem: {
    type: DataTypes.STRING,
    allowNull: true
  },
}, {
  tableName: 'user', // Nome da tabela no banco
});

module.exports = Usuario;
