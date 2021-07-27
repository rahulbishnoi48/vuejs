
const path = require('path');

module.exports ={
    context : __dirname,
    entry : './src/calculate.ts',
    output : {
        path : path.resolve(__dirname,'public'),
        filename : 'calculate.js',
        publicPath : '/public/'
    },
    module:{
        rules:[{
            test: /\.ts$/,
            exclude :/node_modules/,
            use: {
                loader: 'ts-loader',
            }
        }]
    },
    resolve:{
        extensions : ['.ts']
    }
}