'use strict';
module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define('users', {
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
		}
	}, {});
	User.associate = function (models) {
		// associations can be defined here
	};
	return User;
};