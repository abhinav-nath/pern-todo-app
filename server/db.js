const Pool = require("pg").Pool;

const pool = new Pool({
  user: "pernTodoDbUser",
  password: "pernTodoDbPassword",
  host: "localhost",
  port: 5432,
  database: "pernTodoDb",
});

module.exports = pool;
