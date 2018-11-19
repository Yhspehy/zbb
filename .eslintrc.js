module.exports = {
    root: true,
    env: {
        es6: true,
        node: true
    },
    extends: ['plugin:vue/essential', '@vue/prettier'],
    rules: {
        // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-console': 'off',
        'vue/no-parsing-error': [
            2,
            {
                'x-invalid-end-tag': false
            }
        ],
        'space-before-function-paren': [2, 'never'],
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
};
