const conn = require('./connector.js');

module.exports = {
  list : function (username) {
    conn.query(
     'SELECT * FROM task WHERE username = ?', username, (err, result) => {
        if (err) throw err;
        console.log(result);
    });
  },
  add : function (username, task) {
    conn.query(
    'INSERT INTO task (username, task) VALUES (?,?)', username, task, (err, result) => {
      if (err) throw err;
      console.log(result);
    });
  },
  delete : function (username, task) {
    conn.query(
      'DELETE FROM task WHERE username = ?, task = ?', username, task, (err, result) => {
        if (err) throw err;
        console.log(result);
    });
  }
};




