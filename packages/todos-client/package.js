Package.describe({
  summary: "REPLACEME - What does this package (or the original one you're wrapping) do?"
});

Package.on_use(function (api, where) {
    var cs = ['client', 'server'];
  api.use('todos', cs);
  api.use('grounddb', 'client');
  api.add_files('namespaces.js', 'client');
    api.use('standard-app-packages', cs);
  api.add_files('lib/init-session.js', 'client');

  api.add_files('lib/routes.js', 'client');
  api.add_files('lib/helpers.js', cs);
  api.add_files('todos-client.js', 'client');
  api.add_files('images/todo.jpg', 'client');
  var views = ['main_todos.html'
      , 'lists.html'
      , 'tag_filter.html'
      , 'todos.html'
      , 'todo_item.html'
      , 'todos.css'
      , 'footer.html'
  ];
    var js = [
        'lists.js'
        , 'todos.js'
        , 'footer.js'
    ];

  views.forEach( function (template) {
      api.add_files('views/'+template, cs);
  })

  js.forEach( function (script) {
      api.add_files('views/'+script, 'client');
  });
  api.add_files( 'filters/filters.js', 'client');


});

Package.on_test(function (api) {
  api.use('todos-client');

  api.add_files('todos-client_tests.js', ['client', 'server']);
});
