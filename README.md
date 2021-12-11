# Sequelize Starter

To get started, with a fresh database

- Make sure your have a running Relational DB
- Make sure your environment parameters are correctly set-up (.env file in development)
   - PORT
   - MODE
   - DB_HOST
   - DB_NAME
   - DB_USER
   - DB_PASSWORD
- Specify the dialect in db.js
   - mysql
   - postgres  
- Specify the correct port in createDB
   - postgres: 5432
   - mysql: 3306 
- Create the database and add a number of records by running the command : 'npm run db'.  This command is in the package.json and runs a number of js-scripts. **WATCH OUT !** This will re-create all the tables and delete any new data. 
- Run your backend with the command 'npm run dev:api'


Enjoy


