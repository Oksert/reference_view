module.exports = {
    "extends": "eslint:recommended",
    "plugins": [
        "import"
    ],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module"
    },
    "env": {
        "browser": true,
        "node": true,
        "es6": true,
        "jasmine": true,
        "protractor": true,
        "jquery": true
    },
    "rules": {
        /*
            eslint:recommended rules
        */
        "no-console": 0,
        "no-debugger": 0,
        "no-mixed-spaces-and-tabs": "warn",
        "no-unused-vars": [
            "warn",
            {
                "args": "none"
            }
        ],
        /*
            Possible Errors
        */
        "no-prototype-builtins": "warn",
        "no-template-curly-in-string": "error",
        "no-unsafe-negation": "warn",
        /*
            eslint-plugin-import
        */
        "import/no-unresolved": [
            "error",
            {
                "commonjs": true,
                "amd": true
            }
        ],
        "import/named": "error",
        "import/default": "error",
        /*
            Other
        */
        "quotes": [
            "error",
            "single"
        ],
        "new-cap": "error",
        "strict": "error",
        "quote-props": [
            "error",
            "as-needed"
        ]
        // "object-property-newline": "error",
        // "object-curly-newline": [
        //     "error",
        //     {
        //         "ObjectExpression": "always",
        //         "ObjectPattern": {
        //             "multiline": true
        //         }
        //     }
        // ],
        // "no-new-object": "error",
        // "object-curly-spacing": "error",
        // "no-array-constructor": "error",
        // "array-bracket-spacing": "error"
    },
    "globals": {
        /* libs */
        "angular": true,
        "d3": true,
        "kendo": true,
        "nv": true,
        "c3": true,
        "joint": true,
        "ace": true,
        "word": true,
        "score": true,
        /* gantt-lib */
        "GanttMaster": true,
        "Task": true,
        "GridEditor": true,
        "Ganttalendar": true,
        "TaskFactory": true,
        "computeEndByDuration": true,
        "computeStartDate": true,
        "computeEndDate": true,
        "isHoliday": true,
        /* idea */
        "toSystemCase": true,
        "$nocase": true,
        "idea": true,
        "numberWithCommas": true,
        "replaceAll": true,
        "isNumber": true,
        "isInt": true,
        "isEmpty": true,
        "isDefined": true,
        "toDate": true,
        "isNull": true,
        "getCookie": true,
        "setCookie": true,
        "deleteCookie": true,
        "getCookieSecurity": true,
        "setCookieSecurity": true,
        "deleteCookieSecurity": true
    }
};