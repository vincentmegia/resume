/// <binding Clean='clean' />
"use strict";

var gulp = require("gulp");
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");
var clean = require("gulp-clean");
var typescript = require("gulp-typescript");
var sourcemaps = require("gulp-sourcemaps");
var Builder = require("systemjs-builder");
var addsrc = require('gulp-add-src');

var destination = {
    css: "./wwwroot/css/",
    typescripts: "./wwwroot/scripts/app/",
    scripts: "./wwwroot/scripts/",
    bundles: "./wwwroot/bundles"
};

var source = {
    scripts: "./wwwroot/scripts/",
    typescripts: "./wwwroot/scripts/app"
}

var typescriptProject = typescript.createProject(source.scripts + "tsconfig.json");

/**
 * Cleanup task
 */
gulp.task("clean", function () {
    gulp
        .src(destination.typescripts + '/**/*.map')
        .pipe(clean());
});

/**
 * Javascript and CSS deployment task
 */
gulp.task("deploy-css", function () {
    gulp
        .src(["node_modules/bootstrap/dist/css/bootstrap.css"])
        .pipe(gulp.dest(destination.css));
});

/**
* Transpile typescripts
*/
gulp.task("typescript-transpile", function () {
    return gulp
        .src(source.typescripts + "/**/*.ts")
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(typescript(typescriptProject))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest(destination.typescripts));
});


/**
* Bundles the angular2 application
*/
gulp.task("bundle-application", function () {
    var builder = new Builder();
    builder.loadConfig(source.scripts + "systemjs.config.js")
        .then(function () {
            return builder.buildStatic('app', destination.scripts + "app.min.js", {
                minify: true,
                mangle: true,
                rollup: true,
            });
        })
        .then(function () {
            console.log('bundle built successfully!');
        });
});


/**
* Bundles other dependencies
*/
gulp.task('bundle-dependencies', function () {
    gulp.src(['node_modules/rxjs/**/*'])
      .pipe(gulp.dest(destination.bundles));

    gulp.src(['node_modules/angular2-in-memory-web-api/**/*'])
      .pipe(gulp.dest(destination.bundles));

    gulp.src([
      'node_modules/jquery/dist/jquery.min.js',
      'node_modules/bootstrap/dist/js/bootstrap.min.js',
      'node_modules/core-js/client/shim.min.js',
      'node_modules/zone.js/dist/zone.js',
      'node_modules/reflect-metadata/Reflect.js',
      'node_modules/chart.js/dist/Chart.min.js',
      'node_modules/es6-shim/es6-shim.min.js', 
      'node_modules/systemjs/dist/system-polyfills.js',
    ])
      .pipe(concat('vendors.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest(destination.scripts));
});

// Minify JS bundle
gulp.task('minify-javascripts', function () {
    return gulp
      .src(['wwwroot/scripts/app.min.js', "wwwroot/scripts/vendor.min.js'"])
      .pipe(uglify())
      .pipe(gulp.dest('wwwroot/bundles'));
});