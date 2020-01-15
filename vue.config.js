const path = require('path');
// 导入gzip压缩库
const compressionWebpackPlugin = require("compression-webpack-plugin")
// 导入postcss-px-to-viewport
const pxtovw = require('postcss-px-to-viewport')
const resolve = (dir) => {
	return path.join(__dirname, dir);
}
module.exports = {
	devServer: {
		port: 9527,
		open: true
	},
	assetsDir: 'static',
	productionSourceMap: false,
	chainWebpack: config => {
		config.resolve.alias
			.set('@', resolve('src'));
	},
	configureWebpack: config => {
		if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test') {
			//gzip压缩配置
			config.plugins.push(new compressionWebpackPlugin({
				filename: '[path].gz[query]',
				algorithm: 'gzip',
				test: new RegExp('\\.(' + ['js', 'css'].join('|') + ')$'),
				threshold: 10240,
				minRatio: 0.8
			}))
		}
	},
	css: {
		sourceMap: false,
		loaderOptions: {
			scss: {
				//css全局变量
				prependData: `@import "~@/style/reset.scss";@import "~@/style/all.scss";@import "~@/style/_all.scss";`,
			},
			//移动端项目打开
			postcss: {
				plugins: [
					pxtovw({
						viewportWidth: 375,
						viewportHeight: 667,
						unitPrecision: 3,
						propList: ['*'],
						viewportUnit: 'vw',
						selectorBlackList: ['.ignore', '.hairlines'],
						minPixelValue: 1,
						mediaQuery: false
					})
				]
			}
		}
	}

}