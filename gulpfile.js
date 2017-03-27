
var gulp = require('gulp'),
	less = require('gulp-less'),
	cssmin = require('gulp-clean-css'),

	//当发生异常时提示错误
	notify = require('gulp-notify'),
	plumber = require('gulp-plumber');


//less编译为css
gulp.task('less2css',function(){
	gulp.src('./src/less/*.less')
		.pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
		.pipe(less())
		.pipe(cssmin())
		.pipe(gulp.dest('./src/css'));
});

//监视less编译
gulp.task('watch',function(){
	gulp.watch('./src/less/*.less',['less2css']);
	console.log("success");
});