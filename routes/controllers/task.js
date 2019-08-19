const tasksql = require('../../db/task.js');

module.exports = {
  list: function (username){
    var listed = tasksql.list(username);
    console.log('listed', listed);
    if (listed.length <= 0 ){
       console.log( 'Hi Boss, you do not have pending tasks.');
    } else {
       console.log('In development');
    }
    return listed;
  },
  add: function (username, task){
    tasksql.add(username, task);
  },
  delete: function (username, task){
    tasksql.delete(username, task);
  }
};
