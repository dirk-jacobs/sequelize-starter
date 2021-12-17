const pgtools = require("pgtools");
const { DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASSWORD } = require('../env-config.js');


const createDb = async () => {
    const host = DB_HOST;
    const port = DB_PORT;
    const user = DB_USER;
    const password = DB_PASSWORD;

    // create db if it doesn't already exist
    const config = {
    user: user,
    host: host,
    password: password,
    port: port
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