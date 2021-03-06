const path = require('path');
module.exports = {
    //模式
    mode: 'development',
    //入口
    entry: './index.js',
    // 出口
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    //加载器
    module: {
        rules: [{
                // 匹配后缀为css的文件
                test: /\.html|htm$/,
                // 用两个加载器style-loader和css-loader
                use: ['html-loader']
            }, {
                // 匹配后缀为css的文件
                test: /\.css$/,
                // 用两个加载器style-loader和css-loader
                use: ['style-loader', 'css-loader']
            }, {
                test: /\.js$/,
                // 除了node_modules和bower_components之外
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 81920
                    }
                }]
            }
        ]
    }
    // 插件
}