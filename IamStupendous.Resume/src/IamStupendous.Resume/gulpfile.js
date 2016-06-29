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
                "es6-shim/**/*.*",
                "systemjs/dist/**/*.*",
                "reflect-metadata/**/*.*",
                "rxjs/**/*.*",
                "zone.js/**/*.*",
                "@angular/**/*.*",
                "jquery/**/*.**",
                "bootstrap/**/*.*",
                "typescript/**/*.*",
                "ng2-charts/**/*.*",
                "chart.js/**/*.*",
                "ng2-bootstrap/**/*.*",
                "moment/**/*.*",
                "core-js/**/*.*",
                "angular2-in-memory-web-api//**/*.*"
        ],
            {
                cwd: "node_modules/**"
            })
        .pipe(gulp.dest(destination.libraries));

    gulp
        .src(["node_modules/bootstrap/dist/css/bootstrap.css"])
        .pipe(gulp.dest(destination.css));
});