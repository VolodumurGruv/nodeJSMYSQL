if (process.env.NODE_ENV !== "production") {
	require("dotenv").config();
}

const mysql = require("mysql");

const connectionConf = {
	host: "127.0.0.1",
	user: "root",
	password: process.env.MYSQL_PASS,
	database: "todo",
};

const connection = mysql.createConnection(connectionConf);

connection.connect((err) => {
	if (err) throw err;
	console.log("Connected");
});

connection.query("CREATE DATABASE IF NOT EXISTS accounter", (err, res) => {
	if (err) throw new Error(err);

	console.log(res);
});

connection.query("USE accounter", (err) => {
	if (err) throw new Error("The DB accounter wasn't setted up as default");

	console.log("current default Db is accounter");
});

connection.query(
	`CREATE TABLE IF NOT EXISTS companies(
    company_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    account VARCHAR(29) NOT NULL,
    EDRPUO INT NOT NULL,
    IPN INT NOT NULL 
  )`,
	(err, res) => {
		if (err) throw new Error(err);

		console.log(res);
	}
);

connection.end();
