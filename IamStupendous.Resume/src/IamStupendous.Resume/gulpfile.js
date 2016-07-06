/// <binding Clean='clean' />
"use strict";

var gulp = require("gulp");
var clean = require("gulp-clean");
var typescript = require("gulp-typescript");
var sourcemaps = require("gulp-sourcemaps");
var Builder = require("systemjs-builder");


var destination = {
    libraries: "./wwwroot/libraries/",
    css: "./wwwroot/css/",
    typescripts: "./wwwroot/scripts/app/"
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
        .src(destination.libraries)
        .pipe(clean());
    gulp
        .src(destination.typescripts + '/**/*.map')
        .pipe(clean());
});

/**
 * Javascript and CSS deployment task
 */
gulp.task("deploy-javascript-css", function () {
    gulp
        .src([
                "es6-shim/**/*.js",
                "systemjs/dist/**/*.js",
                "reflect-metadata/**/*.js",
                "rxjs/**/*.js",
                "zone.js/**/*.js",
                "@angular/**/*.js",
                "jquery/**/*.js*",
                "bootstrap/**/*.js",
                "typescript/**/*.js",
                "ng2-charts/**/*.js",
                "chart.js/**/*.js",
                "ng2-bootstrap/**/*.js",
                "moment/**/*.js",
                "core-js/**/*.js",
                "angular2-in-memory-web-api/**/*.js"
        ],
            {
                cwd: "node_modules/**"
            })
        .pipe(gulp.dest(destination.libraries));

    gulp
        .src(["node_modules/bootstrap/dist/css/bootstrap.css"])
        .pipe(gulp.dest(destination.css));
});

/**
* Transpile typescripts
*/
gulp.task("typescript-transpile", function () {
    return gulp.
        src(source.typescripts + "/**/*.ts")
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(typescript(typescriptProject))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest(destination.typescripts));
});

/**
* Bundles the typscript, this is required as the loading time is quite long
*/
gulp.task("typscript-output-bundle", function () {
    // optional constructor options
    // sets the baseURL and loads the configuration file
    console.log("loading systemjs.config.js");
    var builder = new Builder("", source.scripts + "systemjs.config.js");
    console.log("loading systemjs.config.js done");

    /*
       the parameters of the below buildStatic() method are:
           - your transcompiled application boot file (the one wich would contain the bootstrap(MyApp, [PROVIDERS]) function - in my case 'dist/app/boot.js'
           - the output (file into which it would output the bundled code)
           - options {}
    */
    return builder
        .buildStatic(source.typescripts + "/boot.js", source.typescripts + "/bundle.js", { minify: true, sourceMaps: true })
        .then(function () {
            console.log("Build complete");
        })
        .catch(function (err) {
            console.log("Build error");
            console.log(err);
        });
});