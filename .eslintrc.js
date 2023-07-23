module.exports = {
  "env": {
  "browser": true,
  "es2021": true,
  },
  "extends": 'airbnb-base',
  "overrides": [
  ],
  "parserOptions": {
  "ecmaVersion": "latest",
  "sourceType": "module"
  },
  "ignorePatterns": [".eslintrc.js", "webpack.config.js"],
  "rules": {
  "no-underscore-dangle": "off",
  "consistent-return": "off",
  "import/no-cycle": "off"
  }
  }