// Define Minimongo collections to match server/publish.js.
todos.client.Lists = new Offline.Collection("lists");
todos.client.Todos = new Offline.Collection("todos");
Offline.subscriptions(['lists'
, 'todos']);

isOffline = function() {
    if (navigator.connection){
    var networkState = navigator.connection.type;

    return (networkState === Connection.UNKNOWN || networkState === Connection.NONE);
    }
    return !navigator.onLine;
}

