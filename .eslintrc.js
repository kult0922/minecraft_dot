module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
    	'airbnb-base'
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
        "cv": "true",
        "getBlockData": "true",
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "import/extensions": ["error", "never",
            { "js": "always" },
        ],
        "no-console": "off",
    }
};
