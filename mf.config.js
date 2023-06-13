const { dependencies } = require("./package.json");

module.exports = {
  name: "lowTitle",
  exposes: {
    fields: "./src/schema/fields.ts",
    edit: "./src/schema/edit.tsx",
    preview: "./src/schema/preview.tsx",
  },
  filename: "remoteEntry.js",
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      // eager: true,
      requiredVersion: dependencies["react"],
    },
    "react-dom": {
      singleton: true,
      requiredVersion: dependencies["react-dom"],
    },
  },
};
