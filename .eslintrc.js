module.exports = {
    "extends": "airbnb-base",
    "env": {"node": true,
      "es6": true,
      "jest": true,
    },
    "plugins": [
      "react",
      "jsx-a11y",
      "import"
    ],
    "parserOptions": {
      "ecmaVersion": 6,
      "sourceType": "module",
    },
    "ecmaFeatures": {
      "jsx": true,
      "arrowFunctions": true,
    },
    "rules": {"one-var": 0,
      "semi": [2, "always"],
      "no-constant-condition": 1,
      "one-var-declaration-per-line": 2,
      "new-cap": 0,
      "consistent-return": 0,
      "no-param-reassign": 0,
      "comma-dangle": 0,
      "space-before-function-paren": 0,
      "no-use-before-define": 0,
      "curly": ["error", "multi-line" 
      ],
      "import/no-unresolved": [0, {"commonjs": true
        } 
      ],
      "import/newline-after-import": 0,
      "no-shadow": ["error", { "allow": ["req", "res", "err"] } ],
      "valid-jsdoc": ["error", {
          "requireReturn": true,
          "requireReturnType": true,
          "requireParamDescription": false,
          "requireReturnDescription": true
        } 
      ],
      "require-jsdoc": ["error", {
        "require": {
          "FunctionDeclaration": true,
          "MethodDefinition": true,
          "ClassDeclaration": true
        }
      }],
    }
}
