module.exports = {
    env: { browser: true, es2020: true },
    extends: [
        'standard',
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended'
    ],
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    settings: { react: { version: '18.2' } },
    plugins: ['react-refresh'],
    rules: {
        'react-refresh/only-export-components': [
          'warn',
          { allowConstantExport: true },
        ],
        'semi': ['error', 'always'],
        'quotes': ['error', 'single'],
        'camelcase': ['error', {ignoreImports: false, ignoreDestructuring: true, properties: 'always'}],
        'no-empty-function': 'error',
        'no-var': 'error',
        'spaced-comment': ['error', 'always'],
        'arrow-spacing': ['error', {'before': true, 'after': true}],
        'indent': ['error', 2],
        'no-multi-spaces': 'error',
        'no-multiple-empty-lines': 'error',
      },
};
