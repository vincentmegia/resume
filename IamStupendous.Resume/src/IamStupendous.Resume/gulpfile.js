/// <binding AfterBuild='deploy-javascript-css, deploy-html' Clean='clean' />
"use strict";

var gulp = require("gulp");
var clean = require("gulp-clean");
var typescript = require('gulp-typescript');

var destination = {
    libraries: "./wwwroot/libraries/",
    css: "./wwwroot/css",
    typescripts: "./wwwroot/scripts/app"
};

var typescriptProject = typescript.createProject("./wwwroot/scripts/tsconfig.json");

/**
 * Cleanup task
 */
gulp.task("clean", function () {
    gulp
        .src(destination.libraries)
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
                "zone.js/**/zone.js",
                "@angular/**/*.js",
                "jquery/**/*.*js",
                "bootstrap/**/*.*js",
                "typescript/**/*.js",
                "angular2/**/*.js",
                "ng2-charts/**/*.js",
                "chart.js/**/*.js",
                "ng2-bootstrap/**/*.js",
                "moment/**/*.js"
        ],
            {
                cwd: "node_modules/**"
            })
        .pipe(gulp.dest(destination.libraries));

    gulp
        .src(["node_modules/bootstrap/dist/css/bootstrap.css"])
        .pipe(gulp.dest(destination.css));
});