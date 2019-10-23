// karma.conf.js
module.exports = function (config) {
    config.set({
        plugins: [
            'karma-jasmine',
            'karma-firefox-launcher',
            'karma-jasmine-html-reporter'
        ],

        frameworks: ['jasmine'],

        files: [
            'app/**/*.js',
            'app/**/*.spec.js'
        ],

        browsers: ['Firefox'],

        client: {
            clearContext: false
        },

        reporters: ['kjhtml', 'progress']
    })
}