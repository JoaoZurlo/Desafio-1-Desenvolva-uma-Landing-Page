const path = require('path');

module.exports = {
  entry: './src/index.js', // Caminho para o arquivo de entrada
  output: {
    filename: 'bundle.js', // Nome do arquivo de saída
    path: path.resolve(__dirname, 'dist') // Diretório de saída
  },
  mode: 'development' // Pode ser 'development' ou 'production'
};
