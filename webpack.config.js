const path = require('path');

module.exports = {
    mode: 'development',
    entry: ['./src/style.css', './src/index.js'],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                sideEffects: true,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.jpg$/i,
                type: 'asset/resource',
            },
        ],
    },
};