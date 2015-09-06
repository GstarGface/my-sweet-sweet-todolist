if (Meteor.isClient) {
  // this code only runs on the client

  Template.body.helpers({
    tasks: [
    { text: "This is task one" },
    { text: "This is task two"},
    { text : "This is task three"}
    ]
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
