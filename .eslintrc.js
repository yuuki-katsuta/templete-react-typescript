module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    project: './tsconfig.eslint.json',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  plugins: [
    '@typescript-eslint',
    'import',
    'jsx-a11y',
    'react',
    'react-hooks',
  ],
  root: true,
  //各ルールの適用の可否やエラーレベルを設定
  rules: {
    // occur error in `import React from 'react'` with react-scripts 4.0.1
    //定義前の変数の使用を禁じる ESLint と TypeScript ESLint のルール
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
    ],
    //クラスメンバーの定義の間に空行を入れるかどうかを定義するルール
    'lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: true,
      },
    ],
    //void 演算子の（式としての）使用を禁ずるルール
    'no-void': [
      'error',
      {
        allowAsStatement: true,
      },
    ],
    //任意の構文の間に区切りの空行を入れるかどうかを定義するルール。return 文の前に常に空行を入れるよう設定
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      },
    ],
    //使用していない変数の定義を許さないルール
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        'vars': 'all',
        'args': 'after-used',
        'argsIgnorePattern': '_',
        'ignoreRestSiblings': false,
        'varsIgnorePattern': '_',
      },
    ],
    //インポートの際のファイル拡張子を記述するかを定義するルール
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    //… JSX のファイル拡張子を制限するルール
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
    //JSX でコンポーネントを呼ぶときの props の記述にスプレッド構文を許さないルール
    'react/jsx-props-no-spreading': [
      'error',
      {
        html: 'enforce',
        custom: 'enforce',
        explicitSpread: 'ignore',
      },
    ],
    //… JSX 記述を使用する場合に react モジュールを React としてインポートすることを強制する
    'react/react-in-jsx-scope': 'off',
  },
  overrides: [
    {
      'files': ['*.tsx'],
      'rules': {
        //コンポーネントの props に型チェックを行うための propTypes プロパティの定義を強制するルール
        'react/prop-types': 'off',
      },
    },
  ],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
};
