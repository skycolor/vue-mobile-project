module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    extends: 'eslint:recommended',
    plugins: [
        'html'
    ],
    rules: {
        'indent': [2, 2, {
            'SwitchCase': 1
        }],
        'semi': [2, 'never'],
        'no-console': 'off',
        "arrow-parens":2 ,
        "no-unused-vars": [2, {"vars":"all","args":"none"}]
    }
}