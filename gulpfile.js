const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');

gulp.task('default', function(){
	// Gulp tasks go here
	gulp.src(["es6/components/*.js"])
		.pipe(eslint())
		.pipe(eslint.format());
	// Node source
	gulp.src("es6/components/*.js")
		.pipe(babel())
		.pipe(gulp.dest("dist/components/"));
});
