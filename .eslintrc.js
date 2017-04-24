module.exports = {
  "extends": "airbnb",
  "plugins": [
    "react",
    "jsx-a11y",
    "import"
  ],
  "env": {
    "node": true,
    "es6": true,
    "jest": true,
  },
  "ecmaFeatures": {
    "arrowFunctions": true,
  },
  "rules": {
    "no-param-reassign": 0,
    "comma-dangle": 0,
    "camelcase": 0,
    "no-underscore-dangle": 0,
  }

}