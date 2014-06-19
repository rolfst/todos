// Define Minimongo collections to match server/publish.js.
todos.client.Lists = new Meteor.Collection("lists");
todos.client.Todos = new Meteor.Collection("todos");
GroundDB(todos.client.Lists);
GroundDB(todos.client.Todos);

isOffline = function() {
    if (navigator.connection){
    var networkState = navigator.connection.type;

    return (networkState === Connection.UNKNOWN || networkState === Connection.NONE);
    }
    return !navigator.onLine;
}

