/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
"use strict";
const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');
const ts = require('gulp-typescript');

const fs = require('fs-extra');
const merge = require('merge-stream');
const path = require('path');

const outdir = path.resolve('./out');

function clean() {
    return fs.emptyDir(outdir);
}

function compile() {
    const srcProj = ts.createProject('./tsconfig.json');
    const sources = gulp
        .src('src/**/*.ts')
        .pipe(srcProj())
        .pipe(gulp.dest(path.join(outdir, 'src')));

    const testProj = ts.createProject('./tsconfig.json');
    const tests = gulp
        .src('test/**/*.ts')
        .pipe(testProj())
        .pipe(gulp.dest(path.join(outdir, 'test')));

    return merge(sources, tests);
}

function lint() {
    return gulp
        .src('src/**/*.ts')
        .pipe(gulp.src('test/**/*.ts'))
        .pipe(eslint({
                formatter: 'verbose',
                configuration: '.eslintrc.js'
            }))
        .pipe(eslint.format());
}

function test() {
    return gulp
        .src('test/**/*.ts', { read: false })
        .pipe(mocha({
                require: [ "ts-node/register" ],
                ui: 'bdd'
            }))
        .pipe(eslint.format());
}

exports.clean = clean;
exports.compile = compile;
exports.lint = lint;
exports.test = test;

exports.default = gulp.series(
    clean,
    compile,
    lint,
    test
);
