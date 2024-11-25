export default [
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      react: require('eslint-plugin-react'),
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'react-app',
    ],
    rules: {
      'no-unused-vars': 'warn',
      'react/react-in-jsx-scope': 'off',
    },
  },
];
