Package.describe({
  summary: "REPLACEME - What does this package (or the original one you're wrapping) do?"
});

Package.on_use(function (api, where) {
  var cs = ['client', 'server'];
  api.use('todos', cs);
  api.add_files('namespaces.js', ['server']);
  api.add_files('todos-collection.js', 'server');
});

Package.on_test(function (api) {
  api.use('todos-collection');

  api.add_files('todos-collection_tests.js', ['client', 'server']);
});
