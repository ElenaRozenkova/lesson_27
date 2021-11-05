const path = require('path')

module.exports = (env, options) => {
const conf = {
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
                path: path.resolve(__dirname, './dist'),
                filename: '[name].bundle.js',
            },
    
};

return conf;
};
