module.exports = function(grunt) {
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options: {
          trace: true,
          style: 'nested',
          lineNumbers: true
        },
        files: {
          'static/css/main.css': 'scss/main.scss'
        }
      }
    },
    watch: {
      scripts: {
        files: ['static/js/*.js'],
        tasks: ['jshint']
      },
      css: {
        files: ['scss/*.scss'],
        tasks: ['sass'],
        options: {
          
        }
      }
    },
    jshint: {
      all: ['Gruntfile.js', 'static/js/*.js']
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  grunt.registerTask('default', ['sass']);
  
};