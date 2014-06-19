Package.describe({
  summary: "REPLACEME - What does this package (or the original one you're wrapping) do?"
});

Package.on_use(function (api, where) {
    var cs = ['client', 'server'];
  api.add_files('todos.js', cs);
  api.add_files('namespaces.js', cs)
  api.export('todos', cs);
});

Package.on_test(function (api) {
  api.use('todos');

  api.add_files('todos_tests.js', ['client', 'server']);
});
