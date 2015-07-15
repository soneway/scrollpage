//npm install gulp gulp-jshint gulp-sass gulp-concat gulp-uglify gulp-rename gulp-minify-css --save-dev
'use strict';

//输出文件夹
var dest = './out';
//配置对象
var config = {
    css: {
        //源文件
        src: ['./css/*.scss'],
        //监听文件
        watch: ['./css/**'],
        //输出文件夹
        dest: dest,
        //是否压缩
        isPack: 0
    },
    js: {
        src: ['./js/*.js'],
        watch: ['./js/**'],
        dest: dest,
        isPack: 0,
        //模块化js文件shim
        shim: {
            jq: {
                path: '/static/v1/jq/jq.js',
                //闭包中module是undefined,js代码中将按照没有模块化的方式运行,从而使得成员变量正常添加到全局变量(var a = require('jq')时,a的值将是window.$)
                exports: '$'
            }
        }
    }
};


//引入gulp
var gulp = require('gulp');


//编译sass,压缩css
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
gulp.task('css', function () {
    var css = config.css;

    var task = gulp.src(css.src)
        //编译
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(css.dest));

    //压缩
    if (css.isPack) {
        task.pipe(minifyCss())
            .pipe(gulp.dest(css.dest));
    }
});


//browserify编译合并,压缩文件js
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');
gulp.task('js', function () {
    var js = config.js;

    var task = gulp.src(js.src)
        //编译合并
        .pipe(browserify({
            shim: js.shim
        }))
        .pipe(gulp.dest(js.dest));

    //压缩
    if (js.isPack) {
        task.pipe(uglify())
            .pipe(gulp.dest(js.dest));
    }
});


//监听任务
gulp.task('watch', function () {
    //监听文件变化
    gulp.watch(config.css.watch, ['css']);
    gulp.watch(config.js.watch, ['js']);
});


//默认任务
gulp.task('default', ['watch', 'css', 'js']);