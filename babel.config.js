module.exports = {
  presets: [
    [
      '@babel/env',
      {
        modules: false /* let Webpack handle the ES Modules */,
        targets: { chrome: 57 /* current version of chromium in JPM */ },
        useBuiltIns: 'usage' /* polyfill feature only if it's used, core-js to be install */,
        corejs: '3.2.1'
      }
    ],
    '@babel/react',
    '@babel/preset-typescript'
  ],
  env: {
    development: {
      plugins: [
        'react-hot-loader/babel' // enable React code to work with HMR
      ]
    },
    production: {
      plugins: ['transform-react-remove-prop-types']
    },
    test: {
      presets: ['@babel/preset-env']
      // plugins: ['transform-es2015-modules-commonjs'] // transform ES Modules to CommonJS because of Jest
    }
  },
  plugins: [
    // Here you can add your additional proposal transforms in the correct order,
    // specified in babeljs.io documentation.

    // As of babel-7.0.0, { legacy: true } is required, until the new decorators proposal is ready,
    // because they are already set as default - you need to remove this when
    // migrating to the new decorators proposal.
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties']
  ]
}
