module.exports = {
    entry: './app.js',
    output: {
        path: '.',
        filename: 'bundle.js'
    },
    watch:true,
    devtool: 'source-map',
    module: {
        preLoaders: [
            {
                test: /\.jsx?$/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            }
        ],
        loaders: [{
                test: /\.html$/,
                loader: 'ng-cache?prefix=[dir]/[dir]'
            },
            
            {

                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel'
            },
            {
                //IMAGE LOADER
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader:'file-loader'
            },
            
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
              
        ]
    },
    eslint: {
        failOnWarning: false,
        failOnError: true
    },
}
