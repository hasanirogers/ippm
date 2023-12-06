const { join } = require('path');
const webpack = require('webpack');
// const StyleLintPlugin = require('stylelint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');


// configuration options
// ---------------------

const pluginConfigs = {
  frontend: {
    styleLint: {
      context: './src',
      failOnError: false
    },

    miniCSSExtract: {
      filename: "frontend.css" // this is what actually get served after sass is compiled
    },

    browserSync: {
      files: '**/*.php', // we have to tell browserSync to reload when we change php files
      proxy: 'http://interactiveposts.local' // this address your WordPress site runs on locally
    }
  },
  admin: {
    styleLint: {
      context: './src',
      failOnError: true
    },
    miniCSSExtract: {
      filename: 'admin.css' // this is what actually get served after sass is compiled
    },
  }
}

const loaderConfigs = {
  babel: [{
    loader: 'babel-loader',
  }],

  // order is important here
  // execute bottom first to top
  miniCSSExtract: [
    MiniCssExtractPlugin.loader,
    {
      loader: "css-loader",
      options: {sourceMap: true}
    },
    {
      loader: "postcss-loader",
      options: {sourceMap: true}
    },
    {
      loader: "sass-loader",
      options: {sourceMap: true}
    }
  ]
}


// main export configs
// -------------------

// eslint-disable-next-line prefer-object-spread
const frontend = {
  context: __dirname,

  entry: [
    'regenerator-runtime/runtime', // is needed for async/await
    `./src/javascript/frontend.js`,
    `./src/styles/frontend.scss`,
  ],

  output: {
    path: join(__dirname, 'bundles'),
    filename: 'frontend.js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: loaderConfigs.babel
      },

      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: loaderConfigs.miniCSSExtract
      }
    ]
  },

  devtool: 'cheap-module-source-map',

  plugins: [
    // new StyleLintPlugin(pluginConfigs.frontend.styleLint),
    new MiniCssExtractPlugin(pluginConfigs.frontend.miniCSSExtract),
    new webpack.optimize.LimitChunkCountPlugin({maxChunks: 1}), // we only want to produce 1 file
    new BrowserSyncPlugin(pluginConfigs.frontend.browserSync, { reload: false })
  ]
};

// eslint-disable-next-line prefer-object-spread
const admin = {
  context: __dirname,

  entry: [
    'regenerator-runtime/runtime', // is needed for async/await
    `./src/javascript/admin.js`,
    `./src/styles/admin.scss`
  ],

  output: {
    path: join(__dirname, 'bundles'),
    filename: 'admin.js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: loaderConfigs.babel
      },

      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: loaderConfigs.miniCSSExtract
      }
    ]
  },

  devtool: 'cheap-module-source-map',

  plugins: [
    // new StyleLintPlugin(pluginConfigs.admin.styleLint),
    new MiniCssExtractPlugin(pluginConfigs.admin.miniCSSExtract),
    new webpack.optimize.LimitChunkCountPlugin({maxChunks: 1}) // we only want to produce 1 bundle.js file
  ]
};


// main export
// -----------

module.exports = [frontend, admin];
