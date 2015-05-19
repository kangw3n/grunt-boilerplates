module.exports = function(grunt) {
  grunt.initConfig({
    watch: {
      sass: {
        files: 'dev/sass/**/*.scss',
        tasks: ['sass']
      },
      script: {
        files: ['dev/js/script.js'],
        tasks: ['uglify']
      }

    },
    sass: {
      dev: {
        files: {
          'client/css/style.css': 'dev/sass/style.scss'
        }
      }
    },
    browserSync: {
      dev: {
        bsFiles: {
          src: [
            'client/css/*.css',
            'client/js/*.js',
            'client/*.html'
          ]
        },
        options: {
          watchTask: true,
          server: './client'
        }
      }
    },
    uglify: {
      options: {
        compress: true,
        mangle: true,
        banner: "/*---------kangw3n 2015-----------*/\n"
      },
      my_target: {
        files: {
          'client/js/script.js': 'dev/js/script.js'
        }
      }
    },
    jshint: {
      options: {
        eqeqeq: true,
        curly: true
      },
      target: {
        src: 'dev/js/*.js'
      }
    }
  });

  // load npm tasks
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');

  // define default task
  grunt.registerTask('default', ['browserSync', 'watch']);
};
