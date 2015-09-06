Tasks = new Mongo.Collection("tasks");

if (Meteor.isClient) {
  // this code only runs on the client

  Template.body.helpers({
    tasks: function(){
      return Tasks.find({}, {sort: {createdAt:-1}});
    }
  });

  Template.body.events({
    "submit .new-task": function(event){
      //Prevent default browser form action
      event.preventDefault();

      //Get value from text form element
      var text = event.target.text.value;

      //Insert a teask into the collection
      Tasks.insert({
        text: text,
        createdAt:new Date() //current timestamp
      });

      //Clear form 
      event.target.text.value = "";

    }
  });
  Template.task.events({
    "click .toggle-checked": function(){
      //Toggles the checked property
      Tasks.update(this._id, {
        $set: {checked: ! this.checked}
      });
    },
    "click .delete": function() {
      Tasks.remove(this._id);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
