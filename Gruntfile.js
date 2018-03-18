module.exports = function(grunt) {
    // configuration.
    grunt.initConfig({
        qunit: {
            files: ['test/**/*.html']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-qunit');

    // Default task
    grunt.registerTask('default', ['qunit']);
    // CI task
    grunt.registerTask('travis', ['qunit']);
};
