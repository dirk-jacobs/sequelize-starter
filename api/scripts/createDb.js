const pgtools = require("pgtools");
const { DB_HOST, DB_NAME, DB_USER, DB_PASSWORD } = require('../config.js');


const createDb = async () => {
    const host = DB_HOST;
    const port = 5432; // MySQL: 3306
    const user = DB_USER;
    const password = DB_PASSWORD;

    // create db if it doesn't already exist
    const config = {
    user: "postgres",
    host: host,
    password: password,
    port: 5432
  };
  console.log("Creating DB");
  try {
    result = await pgtools.createdb(config, DB_NAME);
    console.log("Result",result);
  } catch(error) {
    console.log("error",error)
  }
  
}

createDb().then(() => {
        process.exit();
});