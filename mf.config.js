const { dependencies } = require("./package.json");

function getMFConfig() {
  return {
    name: "lowTitle",
    exposes: {
      fields: "./src/schema/fields.ts",
      edit: "./src/schema/edit.tsx",
      preview: "./src/schema/preview.tsx",
    },
    filename: "remoteEntry.js",
    // 依赖包 依赖的包 webpack在加载的时候会先判断本地应用是否存在对应的包，如果不存在，则加载远程应用的依赖包。
    shared: {
      ...dependencies,
      react: {
        // 是否开启单例模式，true 则开启。如何启用单例模式，那么 remote 应用组件和 host 应用共享的依赖只加载一次，且与版本无关。 如果版本不一致，会给出警告。不开启单例模式下，如果 remote 应用和 host 应用共享依赖的版本不一致，remote 应用和 host 应用需要分别各自加载依赖。
        singleton: true,
        // eager: true, // eager 为 false， 共享依赖被单独分离为 async chunk； eager 为 true， 共享依赖会打包到 main、remoteEntry，不会被分离。
        requiredVersion: dependencies["react"],
      },
      "react-dom": {
        singleton: true,
        requiredVersion: dependencies["react-dom"],
      },
    },
  };
}

module.exports = getMFConfig;
