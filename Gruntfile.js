module.exports = function(grunt){
	//the initial configuration
	grunt.initConfig({
		package: grunt.file.readJSON('package.json'),
		less:{
			compile:{
				files:{
					'css/*.css':'less/*.less'
				}
			}
		},
		coffee:{
			compile:{
				files:{
					'js/site.js':['coffee/*.coffee']
				}
			}
		},
		watch:{
			files:['less/*.less', 'index.html'],
			tasks:['less', 'coffee'],
			options:{
				livereload: true
			}
		},
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
	//the loadtask
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-coffee');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-express');
	grunt.registerTask('default',['less', 'coffee']);
	grunt.registerTask('server',['express','watch']);
	
	//the travis task
  	grunt.registerTask('travis', 'lint');
}
