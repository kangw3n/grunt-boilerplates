module.exports = function(grunt) {
  // load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    watch: {
      sass: {
        files: 'dev/sass/**/*.scss',
        tasks: ['compass', 'purifycss']
      },
      script: {
        files: ['dev/js/*.js'],
        tasks: ['uglify', 'purifycss']
      },
      html: {
        files: ['dev/**/*.html'],
        tasks: ['htmlmin', 'purifycss']
      }

    },
    sass: {
      dev: {
        files: {
          // OUTPUT_PATH : SOURCES_PATH
          'dev/css/style.css': 'dev/sass/style.scss'
        }
      }
    },
    compass: { // Task
      dist: { // Target
        options: { // Target options
          config: 'config.rb'
        }
      }
    },
    imagemin: {
      dynamic: { // Another target
        options: { // Target options
          optimizationLevel: 3,
          progressive: true,
          svgoPlugins: [{
            removeViewBox: false
          }]
        },
        files: [{
          expand: true, // Enable dynamic expansion
          cwd: 'dev/', // Src matches are relative to this path
          src: ['**/*.{png,jpg,gif}'], // Actual patterns to match
          dest: 'dist/' // Destination path prefix
        }]
      }
    },
    requirejs: {
      compile: {
        options: {
          appDir: 'dev/',
          baseUrl: 'js',
          dir: 'dist',
          mainConfigFile: 'dev/js/script.js',
          name: 'lib/almond/almond', // assumes a production build using almond
          // uglify2: {
          // output: {
          // beautify: false
          // },
          // warning: true,
          // mangle: true //replace var name
          // },
          preserveLicenseComments: false
        }
      }
    },
    purifycss: {
      options: {
        minify: true
      },
      target: {
        src: ['dist/**/*.html', 'dist/js/*.js'], // Observed files
        css: ['dev/css/*.css'], // Take all css files into consideration
        dest: 'dist/css/style.css' // Write to this path
      }
    },
    browserSync: {
      dev: {
        bsFiles: {
          src: [
            'dist/css/*.css',
            'dist/js/*.js',
            'dist/**/*.html'
          ]
        },
        options: {
          watchTask: true,
          server: './dist',
          ghostMode: {
            clicks: true,
            forms: true,
            scroll: true
          }
        }
      }
    },
    uglify: {
      options: {
        compress: true,
        mangle: true,
        banner: '/*---------kangw3n 2015-----------*/\n'
      },
      my_target: {
        files: {
          'dist/js/script.js': 'dev/js/script.js'
        }
      }
    },
    htmlmin: { // Task
      dist: { // Target
        options: { // Target options
          removeComments: true,
          collapseWhitespace: true
        },
        files: [{ // Dictionary of files
          expand: true,
          cwd: 'dev',
          src: '**/*.html', // 'destination': 'source'
          dest: 'dist'
        }]
      }
    },
    wiredep: {
      task: {
        // Point to the files that should be updated when
        // you run `grunt wiredep`
        src: [
          'dev/**/*.html'
        ],
        options: {
          // See wiredep's configuration documentation for the options
          // you may pass:

          // https://github.com/taptapship/wiredep#configuration
        }
      }
    }
  });

  // define default task
  grunt.registerTask('default', ['browserSync', 'watch']);
};
