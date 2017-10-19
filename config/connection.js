var Mysql = require('mysql');
var Connection;

if (process.env.JAWSDB_URL) {
	Connection = Mysql.createConnection(process.env.JAWSDB_URL);
} else {
	Connection = Mysql.createConnection({
		port: 3306,
		host: 'localhost',
		user: 'root',
		password: 'Wagstaff2017',
		database: 'burgers_db'
	})
};
Connection.connect(function(err) {
  if (err) {
    console.error('Error with MySQL Connection ' + err.stack + '\n\n');
    return;
  }
  console.log('Connected to MySQL database as id ' + Connection.threadId + '\n\n');
});
module.exports = Connection;