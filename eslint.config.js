import { ESLint } from "eslint";

export default new ESLint({
  overrideConfig: {
    plugins: ["eslint-config-prettier"],
  },
});
