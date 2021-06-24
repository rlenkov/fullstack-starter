const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env) => {
    const isProduction = env === 'production'
    const isDevelopment = env === 'development'

    return {
        mode: 'development',
        stats: {
            // logging: 'verbose',
            children: false,
        },
        entry: path.resolve(__dirname, 'src', 'app.js'),
        output: {
            path: path.resolve(__dirname, 'public'),
            filename: 'bundle.js',
        },
        module: {
            rules: [
                {
                    use: 'babel-loader',
                    test: /\.js$/,
                    exclude: /node_modules/,
                },
                {
                    test: /\.svg$/,
                    use: ['@svgr/webpack'],
                },
                {
                    test: /\.module\.s(a|c)ss$/,
                    use: [
                        isDevelopment
                            ? 'style-loader'
                            : MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: isDevelopment,
                                url: false,
                                modules: {
                                    compileType: 'module',
                                    mode: 'local',
                                    auto: true,
                                    localIdentName: '[local]--[hash:base64:5]',
                                    exportLocalsConvention: 'camelCase',
                                },
                            },
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: isDevelopment,
                                postcssOptions: {
                                    plugins: [['autoprefixer']],
                                },
                            },
                        },
                        {
                            loader: 'resolve-url-loader',
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                implementation: require('node-sass'),
                                sourceMap: true,
                            },
                        },
                    ],
                },
                {
                    test: /\.s?(a|c)ss$/,
                    exclude: /\.module.(s(a|c)ss)$/,
                    use: [
                        isDevelopment
                            ? 'style-loader'
                            : MiniCssExtractPlugin.loader,
                        'css-loader',
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: isDevelopment,
                                sassOptions: {
                                    includePaths: ['node_modules'],
                                },
                            },
                        },
                    ],
                },
            ],
        },
        resolve: {
            extensions: ['.js', '.jsx', '.scss'],
        },
        plugins: [
            // CSSExtract,
            new MiniCssExtractPlugin(),
        ],
        devtool: isProduction ? 'source-map' : 'eval-cheap-module-source-map',
        devServer: {
            contentBase: path.resolve(__dirname, 'public'),
        },
    }
}
