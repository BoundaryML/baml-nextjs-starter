generator lang_typescript {
  language typescript
  // This is where your non-baml source code located
  // (relative directory where pyproject.toml, package.json, etc. lives)
  project_root "../"
  // This command is used by "baml test" to run tests
  // defined in the playground
  // NPM: npm explore @boundaryml/baml-core -- jest
  // YARN: yarn jest
  // PNPM: pnpm exec jest
  test_command "npm run baml_test -- --runInBand"
  // This command is used by "baml update-client" to install
  // dependencies to your language environment
  install_command "npm install @boundaryml/baml-core"
  package_version_command "npm list @boundaryml/baml-core"
}