const merge = require('webpack-merge');
const glob = require('glob');
const path = require('path');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

require('dotenv').config();

module.exports = {
	env: {
		tourBoxKey: process.env.TOURBOX_KEY
	},
	build: {
		extend(config, { isDev, isClient }) {
			const urlLoader = config.module.rules.find(
				rule => rule.loader === 'url-loader'
			);

			urlLoader.exclude = /(assets\/svg)/;

			let updated = merge(config, {
				module: {
					rules: []
				},
				plugins: [new SpriteLoaderPlugin()]
			});

			updated.module.rules.push({
				test: /\.svg$/,
				include: [path.resolve(__dirname, 'assets/svg')],
				use: [
					{
						loader: 'svg-sprite-loader',
						options: {
							extract: true,
							spriteFilename: 'assets/images/icons.svg'
						}
					},
					{
						loader: 'svgo-loader',
						options: {
							plugins: [{ removeAttrs: { attrs: '(fill)' } }]
						}
					}
				]
			});

			return updated;
		},
		build: {
			postcss: [require('autoprefixer')({ browsers: ['> 5%'] })]
		}
	},
	modules: [['@nuxtjs/dotenv', { only: ['GIGS_ENDPOINT'] }]]
};
