// Karma configuration

module.exports = function(config) {
	config.set({
		basePath: '',
		browsers: ['Firefox', 'Chrome', 'Safari'],
		reporters: ['progress'],
		singleRun: true,
		frameworks: ['jasmine'],
		files: [
			'tests/config.js',
			'dist/imgix.js',
			'tests/test.js'
		]
	});
};
