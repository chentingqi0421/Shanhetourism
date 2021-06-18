const webpack = require('webpack')
module.exports = {
    // devServer: {
    //     public: require('os').networkInterfaces()[Object.keys(require('os').networkInterfaces())[0]][1].address + ':8081',
    //     disableHostCheck: true
    //   },

    publicPath: './',
 
chainWebpack: (config) => {
    config.plugin('provide').use(webpack.ProvidePlugin, [{
        $: 'jquery',
        jquery: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
    }])


},


}

