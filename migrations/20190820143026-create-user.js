'use strict';

const DataTypes = require('sequelize/lib/data-types');
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Users', {
			id: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
				primaryKey: true,
				autoIncrement: true
			},
			email: {
				type: DataTypes.STRING(256),
				allowNull: false
			},
			password: {
				type: DataTypes.STRING(256),
				allowNull: false
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('Users');
	}
};