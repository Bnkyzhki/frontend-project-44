import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";


module.exports = {
  rules: {
      'no-console': 'off',
  },
};

export default [
  pluginJs.configs.recommended,
  pluginReactConfig,
];