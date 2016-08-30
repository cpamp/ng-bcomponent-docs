var src = 'src';
var dist = 'build/dist';
var dev = 'build/dev';

var paths = {
    src: src,
    source: {
        root: src,
        scripts: src + '/scripts',
        stylesheets: src + '/stylesheets',
        images: src + '/images'
    },
    dev: {
        root: dev,
        scripts: dev + '/scripts',
        stylesheets: dev + '/stylesheets',
        dependencies: dev + '/lib',
        angular: dev + '/lib/angular',
        rxjs: dev + '/lib/rxjs',
        webapi: dev + '/lib/webapi',
        scriptsTranspiled: dev + '/scripts/transpiled',
        images: dev + '/images'
    },
    dist: {
        root: dist,
        scripts: dist + '/scripts',
        stylesheets: dist + '/stylesheets',
        dependencies: dist + '/lib',
        angular: dist + '/lib/angular',
        images: dist + '/images'
    }
}

var out = {
    index: 'index.html',
    scripts: {
        minified: 'app.min.js',
        angular: 'angular.min.js'
    },
    dependencies: 'vendors.min.js',
    dependencyStyles: 'vendors.min.css',
    stylesheets: 'stylesheets.min.css'
}

var files = {
    src: {
        index: paths.src + '/' + out.index,
        typescripts: [paths.source.scripts + '/**/*.ts','typings/**/*.ts'],
        stylesheets: [paths.source.stylesheets + '/**/*.css'],
        systemjsConfig: paths.source.scripts + '/systemjs.config.js',
        images: paths.source.images + '/**/*'
    },
    dev: {
        scripts: paths.dev.scripts + '/*.js',
        scriptsTranspiled: paths.dev.scriptsTranspiled + '/**/*.js',
        scriptsBundled: paths.dev.scripts + '/' + out.scripts.minified
    },
    dist: {
        scripts: paths.dist.scripts + '/**/*.js'
    },
    dependencies: {
        appDependencies: [
            'node_modules/core-js/client/shim.min.js',
            'node_modules/zone.js/dist/zone.min.js',
            'node_modules/reflect-metadata/Reflect.js',
            'node_modules/systemjs/dist/system.js',
            paths.source.scripts + '/systemjs.config.js',
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/bootstrap/dist/js/bootstrap.min.js'
        ],
        stylesheets: [
            'node_modules/bootstrap/dist/css/bootstrap.min.css',
            'node_modules/bootstrap/dist/css/bootstrap-theme.min.css'
        ],
        fonts: 'node_modules/bootstrap/dist/fonts/*.svg',
        angular: ['node_modules/@angular/**/*',
            'node_modules/rxjs/**/*.js',
            'node_modules/angular2-in-memory-web-api/**/*.js'
        ]
    }
}

var injectables = ['/lib/*', '/stylesheets/*'];

/** Dependencies */
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var inject = require('gulp-inject');
var uglifyCss = require('gulp-uglifycss');
var embed = require('gulp-angular2-embed-templates');
var ts = require('gulp-typescript');
var tsConfig = require('./tsconfig.json');
var Builder = require('systemjs-builder');
/** End Dependencies */

function concatFiles(src, out, dest) {
    return gulp.src(src)
        .pipe(concat(out))
        .pipe(gulp.dest(dest));
}

/**
 * Concat Dependencies
 */
function concatDependencies(dest) {
    return gulp.src(files.dependencies.appDependencies)
        .pipe(concat(out.dependencies))
        .pipe(uglify())
        .pipe(gulp.dest(dest));
}

function dependenciesDev() { return concatDependencies(paths.dev.dependencies); }
gulp.task('dependencies:dev', dependenciesDev);
gulp.task('d:dev', ['dependencies:dev']);

function dependenciesDist() { return concatDependencies(paths.dist.dependencies); }
gulp.task('dependencies:dist', dependenciesDist);
gulp.task('d:dist', ['dependencies:dist']);

/**
 * Concat dependency css
 */
function concatDependencyStyles(dest) {
    return concatFiles(files.dependencies.stylesheets, out.dependencyStyles, dest);
}

function dependencyStylesDev() { return concatDependencyStyles(paths.dev.dependencies); }
gulp.task('dependencies:css:dev', dependencyStylesDev);
gulp.task('d:css:dev', dependencyStylesDev);

function dependencyStylesDist() { return concatDependencyStyles(paths.dist.dependencies); }
gulp.task('dependencies:css:dist', dependencyStylesDist);
gulp.task('d:css:dist', dependencyStylesDist);

/**
 * Fonts
 */
function copyFont(dest) {
    return gulp.src(files.dependencies.fonts)
        .pipe(gulp.dest(dest));
}

function fontsDev() { return copyFont(paths.dev.dependencies); }
gulp.task('fonts:dev', fontsDev);

function fontsDist() { return copyFont(paths.dist.dependencies); }
gulp.task('fonts:dist', fontsDist);

/**
 * Images
 */
function copyImages(dest) {
    return gulp.src(files.src.images)
        .pipe(gulp.dest(dest));
}

function imagesDev() { return copyImages(paths.dev.images); }
gulp.task('images:dev', imagesDev);

function imagesDist() { return copyImages(paths.dist.images); }
gulp.task('images:dist', imagesDist);

/**
 * Transpiling
 */
function transpile(dest) {
    return gulp.src(files.src.typescripts)
        .pipe(embed({minimize: {quotes: true}}))
        .pipe(ts(tsConfig.compilerOptions))
        .pipe(gulp.dest(dest));
}

function transpileDev() { return transpile(paths.dev.scriptsTranspiled); }
gulp.task('tsc:dev', transpileDev);

/**
 * Bundle js
 */
function bundle(base, configPath, sourceFile, outFilePath) {
    var sysBuilder = new Builder(base, configPath);
    return sysBuilder.buildStatic(sourceFile, outFilePath);
}

// app
function bundleDev() { return bundle(
        '.', 
        files.src.systemjsConfig, 
        files.dev.scriptsTranspiled, 
        paths.dev.scripts + '/' + out.scripts.minified
    ); 
}
gulp.task('bundle:dev', ['tsc:dev'], bundleDev);

/**
 * Uglify Transpiled
 */
function uglifyJs(src, dest) {
    return gulp.src(src)
        .pipe(uglify({mangle: false}))
        .pipe(gulp.dest(dest));
}

function uglifyJsDist() { return uglifyJs(files.dev.scriptsBundled, paths.dist.scripts); }
gulp.task('uglify:js:dist', ['bundle:dev'], uglifyJsDist);
gulp.task('ugjs:dist', ['bundle:dev'], uglifyJsDist);

/**
 * Uglify CSS
 */
function uglifyStyles(dest) {
    return gulp.src(files.src.stylesheets)
        .pipe(uglifyCss())
        .pipe(concat(out.stylesheets))
        .pipe(gulp.dest(dest));
}

function uglifyStylesDev() { return uglifyStyles(paths.dev.stylesheets); }
gulp.task('uglify:css:dev', uglifyStylesDev);
gulp.task('ugcss:dev', ['uglify:css:dev']);

function uglifyStylesDist() { return uglifyStyles(paths.dist.stylesheets); }
gulp.task('uglify:css:dist', uglifyStylesDist);
gulp.task('ugcss:dist', ['uglify:css:dist']);

/**
 * Build index files
 */
function buildIndex(path) {
    var toInject = [];
    injectables.forEach(function(item){
        toInject.push(path + item);
    });
    var sources = gulp.src(toInject, {read: false});
    return gulp.src(files.src.index)
        .pipe(inject(sources, {ignorePath: path, addRootSlash: true}))
        .pipe(gulp.dest(path));
}

function indexDev() { return buildIndex(paths.dev.root); }
gulp.task('index:dev', [
    'dependencies:dev',
    'dependencies:css:dev',
    'bundle:dev',
    'fonts:dev',
    'uglify:css:dev'
], indexDev);

function indexDist() { return buildIndex(paths.dist.root); }
gulp.task('index:dist', [
    'dependencies:dist',
    'dependencies:css:dist',
    'fonts:dist',
    'uglify:js:dist',
    'uglify:css:dist'
], indexDist);

/**
 * Builds
 */
gulp.task('build:dev', [
    'images:dev',
    'index:dev'
]);

gulp.task('build:dist', [
    'images:dist',
    'index:dist'
]);