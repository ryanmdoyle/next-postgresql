const { Pool, client } = require('pg');
const fs = require('fs');
const path = require('path');
const parentDirectory = path.dirname(__dirname);
require('dotenv').config({ path: `${parentDirectory}/.env` });

const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
  ssl: {
    ca: fs.readFileSync(parentDirectory + '/ca-certificate.crt')
  }
})

exports.querydb = async function querydb(text, params) {
  const results = await pool.query(text, params);
  await pool.end();
  console.log(results);
  return results;
}

