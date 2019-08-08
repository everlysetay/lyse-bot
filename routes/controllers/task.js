const tasksql = require('../../db/task.js');

module.exports = {
  list: function (username){
    console.log('In controller task');
    var listed = tasksql.list(username);

    console.log(listed);
    if (listed.length <= 0 ){
       console.log( 'Hi Boss, you do not have pending tasks.');
    } else {
       console.log('In development');
    }
  }
};
