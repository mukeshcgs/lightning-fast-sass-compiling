module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            sass: {
                files: ['src/sass/**/*.{scss,sass}', 'src/sass/_partials/**/*.{scss,sass}'],
                tasks: ['sass:dist']
            },
            livereload: {
                files: ['dist/*.html', 'dist/*.php', 'dist/js/**/*.{js,json}', 'dist/css/*.css', 'dist/img/**/*.{png,jpg,jpeg,gif,webp,svg}'],
                options: {
                    livereload: true
                }
            }
        },
        sass: {
            options: {
                sourceMap: true,
                outputStyle: 'compressed'
            },
            dist: {
                files: {
                    'dist/css/bootstrap.min.css': 'src/sass/bootstrap.scss'
                }
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src: ['dist/css/*.css', 'dist/*.html']
                },
                options: {
                    watchTask: true,
                    server: 'dist/'
                }
            }
        },
    });
    grunt.registerTask('default', ['browserSync', 'watch', 'sass:dist']);
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
};
