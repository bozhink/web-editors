const
    srcPath = 'client/src',
    distPath = 'client/build/dist',
    compilePath = 'client/build/compiled',
    testsPath = 'client/tests',
    paths = {
        templates: 'templates',
        less: 'less',
        css: 'css',
        js: 'js',
        apps: 'js/apps',
        typescript: 'typescript',
        tsdefinitions: 'tsdefinitions'
    };

var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    cleanCSS = require('gulp-clean-css'),
    concat = require('gulp-concat'),
    less = require('gulp-less'),
    minify = require('gulp-minify'),
    mocha = require('gulp-mocha'),
    plumber = require('gulp-plumber'),
    ts = require('gulp-typescript'),
    uglify = require('gulp-uglify'),
    del = require('del'),
    path = require('path');

gulp.task('build-monaco-config', function () {
    return gulp.src(path.join(srcPath, paths.js, 'monaco-config.js'))
        .pipe(browserify())
        .pipe(concat('monaco-config.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(path.join(distPath, paths.js)));
});

gulp.task('build-codemirror-config', function () {
    return gulp.src(path.join(srcPath, paths.js, 'codemirror-config.js'))
        .pipe(browserify())
        .pipe(concat('codemirror-config.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(path.join(distPath, paths.js)));
});

gulp.task('build-ace-config', function () {
    return gulp.src(path.join(srcPath, paths.js, 'ace-config.js'))
        .pipe(browserify())
        .pipe(concat('ace-config.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(path.join(distPath, paths.js)));
});

gulp.task('less', function () {
    return gulp.src(path.join(srcPath, paths.less, '**/*.less'))
        .pipe(less())
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        .pipe(gulp.dest(path.join(distPath, paths.css)))
        .on('error', function () {
            this.emit('end');
        });
});

gulp.task('validation-js', function () {
    return gulp.src(path.join(srcPath, paths.js, 'validation/**/*.js'))
        .pipe(minify({
            ext: {
                src: '.js',
                min: '.js'
            },
            exclude: ['tasks'],
            ignoreFiles: ['-min.js']
        }))
        .pipe(gulp.dest(path.join(distPath, paths.js, 'validation')))
        .on('error', function () {
            this.emit('end');
        });
});

gulp.task('browserify', function () {
    return gulp.src(path.join(srcPath, paths.js, 'app.js'))
        .pipe(browserify())
        .pipe(gulp.dest(path.join(distPath, paths.js)));
});

gulp.task('build-ace-lib', function () {
    return gulp
        .src([
            './modules/ace/build/src/ace.js',
            './modules/ace/build/src/ext-*.js',
            './modules/ace/build/src/mode-*.js',
            './modules/ace/build/src/theme-*.js',
            //'./modules/ace/build/src/worker-*.js',
        ])
        .pipe(plumber())
        .pipe(concat('ace.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(path.join(distPath, paths.js)));
});

gulp.task('clean', function () {
    return del([compilePath, distPath]);
});

gulp.task('build', [
    'less',
    'build-ace-lib',
    'validation-js',
    'browserify',
    'build-monaco-config',
    'build-ace-config',
    'build-codemirror-config'
]);

gulp.task('watch-build', function () {
    return gulp.watch([path.join(srcPath, '**/*.*')], ['build']);
});

gulp.task('test', function () {
    gulp.src(path.join(testsPath, '**/*.js'))
        .pipe(mocha())
        .on('error', function () {
            this.emit('end');
        });
});

gulp.task('watch-test', function () {
    return gulp.watch(path.join(testsPath, '**/*.js'), ['test']);
});