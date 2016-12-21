var gulp = require('gulp'),
    less = require('gulp-less'),
    cleanCSS = require('gulp-clean-css'),
    minify = require('gulp-minify'),
    browserify = require('gulp-browserify'),
    mocha = require('gulp-mocha');

gulp.task('build-monaco-config', function () {
    return gulp.src('./client/src/js/monaco-config.js')
        .pipe(browserify())
        .pipe(gulp.dest('./client/dist/js'));
 });

gulp.task('less', function () {
    gulp.src('./client/src/less/**/*.less')
        .pipe(less())
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        .pipe(gulp.dest('./client/dist/css'))
        .on('error', function () {
            this.emit('end');
        });
});

gulp.task('validation-js', function () {
    gulp.src('./client/src/js/validation/**/*.js')
        .pipe(minify({
            ext: {
                src: '.js',
                min: '.js'
            },
            exclude: ['tasks'],
            ignoreFiles: ['-min.js']
        }))
        .pipe(gulp.dest('./client/dist/js/validation'))
        .on('error', function () {
            this.emit('end');
        });
});

gulp.task('browserify', function () {
    return gulp.src('./client/src/js/app.js').
    pipe(browserify()).
    pipe(gulp.dest('./client/dist/js/'));
});

gulp.task('build-ace-lib', function () {
    return gulp.src('./node_modules/ace/build/src/*.js')
        .pipe()
});

gulp.task('build', ['less', 'validation-js', 'browserify', 'build-monaco-config']);

gulp.task('continuous-build', function () {
    gulp.watch(['./client/src/**/*.*'], ['build']);
});

gulp.task('test', function () {
    gulp.src('./client/tests/*.js')
        .pipe(mocha())
        .on('error', function () {
            this.emit('end');
        });
});

gulp.task('watch', function () {
    gulp.watch('./client/src/**/*.js', ['test']);
});