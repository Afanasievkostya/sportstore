   module.exports = function(grunt) {
  
    grunt.initConfig({
	 cssmin : {
			target: {
				src: ["css/style.css"],
				dest: "css/style.min.css"
			}
	 },
	 imagemin: {
      options: {
        cache: false
      },

      dist: {
        files: [{
          expand: true,
          cwd: 'img/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'img/'
        }]
      }
    },
	autoprefixer: {
		options: {
			browsers: ['last 2 versions', 'ie 11', 'firefox ESR']
		},
		    no_dest: {
			    src: "css/style.css"
		    }
	 },
	 uglify: {
		 options: {
			 beautify: false
		 },
		 my_target: {
			 files: {
				 'js/script.min.js' : ['js/card.js', 'js/advertising.js', 'js/scale.js']
			 }
		 }
	 }
    });
	grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
 
    grunt.registerTask('default', ['cssmin', 'imagemin', 'autoprefixer', 'uglify']);
};
 
 