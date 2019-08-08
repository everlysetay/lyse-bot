var task = require('./task.js');

module.exports = {
  task: function (msg){
    var username = msg.from.username;
    var chattype = msg.chat.type;

    if (username) {
      console.log('got username - ' + username + ', chat type: ' + chattype);
      if (chattype === 'group') { //might need to record group id -- so doesn't repeat
        //need user to confirm that they are okay to share information with group
        return "Hi Boss, Do you want me to share in this group?";
      } else  {
        //retrieve list
        var result = task.list(username);
        console.log(result);
        //reply.text(task.list);
      }

    } else  {
      //if no username
      return "Hi Boss, you will require a username in order to use this";
    }

    console.log("Get user's username: " + msg.from.username); //works for individual
    console.log("Get chat type: " + msg.chat.type);
    return "I am not done...";
    //msg.from.first_name -- display name of user
    //if group need to get confirmation if want to display task to group
    //retrieve information
  }
};
