# The nodejs + express + jwt + mysql + sequelize project Template!
## Feature
- User create, login, list
- Build project faster!
## Install and running
Clone project:
` git clone https://github.com/Rice9547/nodejs-express-template.git project `
Instal package:
` npm install `
Create database in mysql command:
` create database database_development `
Migration:
` npx sequelize db:migrate `
Run server:
` npm start `
## Usage
### DB
You need create database `database_development`, or change sequelize db setting in `config/config.json`.
Migration:
` npx sequelize db:migrate `
Clean database:
` npx sequelize db:migrate:undo `
Create table:
` npx sequelize-cli model:generate --name Cat --attributes name:string `
Find more info in [sequelize ducument](https://sequelize.org/master/)
### Route
- /register
- /login
- /list
## License
The project is licensed under the BSD license.