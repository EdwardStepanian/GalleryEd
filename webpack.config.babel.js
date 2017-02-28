export default {
    output: {
        filename: 'client-bundle.js',
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                },
                exclude: [/node_modules/],
            },
        ],
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
};


