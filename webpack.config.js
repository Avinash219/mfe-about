const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "about",

  exposes: {
    "./Component": "./src/app/app.component.ts",
  },

  shared: {
    ...shareAll({ singleton: true, requiredVersion: "auto" }),
  },
});
