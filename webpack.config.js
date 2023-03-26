// Notas importanes
// 🚨 El archivo de configuración debe usar ES5 no ES6
// es por ello que veras "requires" no "imports"

// Importar un administrador de rutas de archivos
const path = require('path');

// Exportamos un objeto de configuración
// que sera usado por webpack
module.exports = {
  // 1. El archivo de entrada a partir del cual
  // contendra todas las definiciones a empaquetar
  entry: "./client/index.js",
  // 2. Especificar el archivo de salida
  // Aqui se detalla donde quedara el archivo
  // final empaquetado.
  output: {
    // 2.1 Ruta absoluta de salida
    // Note que se esta colocando en el directorio
    // de archivos estáticos del proyecto
    path: path.resolve(__dirname, "public"),
    // 2.2 Nombre del archivo de salida
    filename: "bundle.js"
  }, // Adding a module to webpack
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
