'use strict';

const DataTypes = require('sequelize/lib/data-types');
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('users', {
			id: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true
			},
			email: {
				type: DataTypes.STRING(256),
				allowNull: false,
				unique: true
			},
			password: {
				type: DataTypes.STRING(256),
				allowNull: false
			}
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('users');
	}
};