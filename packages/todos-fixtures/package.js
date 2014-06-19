Package.describe({
  summary: "REPLACEME - What does this package (or the original one you're wrapping) do?"
});

Package.on_use(function (api, where) {
  api.add_files('todos-fixtures.js', ['server']);
});

Package.on_test(function (api) {
  api.use('todos-fixtures');

  api.add_files('todos-fixtures_tests.js', ['client', 'server']);
});
