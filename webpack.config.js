// Important notes
// 🚨 Configuration file must use ES5 not ES6
// that's why you will see "requires" not "imports"

// Importing an file routing manager
const path = require('path');

// We export a configuration object
// that will be used by webpack
module.exports = {
  
  output: {
    // 2.1 Absolute output path
    // Note that it is being placed in the directory
    // of the project's static files
    path: path.resolve(__dirname, "public"),
    // 2.2 Output file name
    filename: "bundle.js"
  },
  // Adding a module to webpack
  module: {
    rules: [
      {
				// This section stablishes 
				// what rules to apply to ".js" files
        test: /\.js$/,
				// We Dont want to transpile any kind of modules
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    'modules': false,
                    'useBuiltIns': 'usage',
                    'targets': {"chrome": "80"},
                    'corejs': 3
                  }
                ]
              ]
            }
          }
        ]
      }
    ]
  }

}
