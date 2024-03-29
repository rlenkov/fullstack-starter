module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'prettier', 'jsx'],
    rules: {
        'prettier/prettier': 2, // Means error
        // Indent with 4 spaces
        indent: ['error', 4, { SwitchCase: 1 }],
        semi: ['error', 'never'],
        quotes: ['error', 'single'],
        'implicit-arrow-linebreak': ['off'],
        'function-paren-newline': ['error', 'multiline-arguments'],
        'operator-linebreak': ['off'],
        'arrow-body-style': ['off'],

        // Indent JSX with 4 spaces
        'react/jsx-indent': [2, 4],

        // Indent props with 4 spaces
        'react/jsx-indent-props': [2, 4],
        // Allow js as filename extension
        'react/jsx-filename-extension': [0],
        'import/extensions': 'off',

        'jsx-quotes': ['error', 'prefer-single'],
        'react/jsx-fragments': ['error', 'element'],
        'arrow-parens': ['error', 'as-needed'],
        'react/destructuring-assignment': ['off'],
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/interactive-supports-focus': ['off'],
        'jsx-a11y/control-has-associated-label': 'off',
        'react/jsx-one-expression-per-line': [
            'error',
            { allow: 'single-child' },
        ],
    },
}
