module.exports = {
  env: {
    node: true
  },
  globals: {
    ga: true
  },
  extends: ["plugin:vue/essential", "@vue/airbnb"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "import/extensions": [
      "off",
      "always",
      {
        js: "never",
        vue: "never"
      }
    ],
    quotes: [2, "double", { avoidEscape: true }],
    semi: "error",
    "import/no-dynamic-require": ["off"],
    "no-param-reassign": ["off"],
    "no-shadow": ["off"],
    "global-require": ["off"],
    "no-shadow-restricted-names": ["off"],
    "no-plusplus": ["off"],
    radix: ["off"],
    "max-len": ["off"],
    "arrow-parens": ["off"],
    "function-paren-newline": ["off"],
    "implicit-arrow-linebreak": ["off"],
    "operator-linebreak": ["off"],
    "comma-dangle": ["off"],
    "object-curly-newline": ["off"],
    "nonblock-statement-body-position": ["off"],
    curly: ["off"],
    "template-curly-spacing": "off",
    indent: "off",
    "linebreak-style": "off",
    avoidEscape: true,
    allowTemplateLiterals: true,
    "import/no-unresolved": "off"
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
