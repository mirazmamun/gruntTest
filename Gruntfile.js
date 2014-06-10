module.exports = function(grunt){
	//the initial configuration
	grunt.initConfig({
		package: grunt.file.readJSON('package.json'),
		express:{
			all:{
				options:{
					port: 9999,
					hostname: 'grunttest.mirazalmamun.com',
					bases: ['.'],
					livereload: true
				}
			}

		},
		lint: {
		    files: ['js/site.js']
		}
	});
	
	//the travis task
  	grunt.registerTask('travis', 'lint');
}
