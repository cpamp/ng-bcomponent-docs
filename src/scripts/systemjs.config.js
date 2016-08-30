/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {
  // map tells the System loader where to look for things
  var map = {
    'app':                        'scripts/transpiled', // 'dist',
    '@angular':                   'node_modules/@angular',
    'rxjs':                       'node_modules/rxjs',
    'ng-bcomponents':             'node_modules/ng-bcomponents'
  };
  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'main.js',  defaultExtension: 'js' },
    'rxjs':                       { defaultExtension: 'js' },
    '@angular':                   { defaultExtension: 'js' },
    'ng-bcomponents':             { main: 'index.js', defaultExtension: 'js' }
  };
  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'forms',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade',
  ];
  // function pack(pkgName) {
  //   packages['@angular/'+pkgName] = { main: '/../angular.js', defaultExtension: 'js' };
  // }
  function pack(pkgName) {
    packages['@angular/'+pkgName] = { main: '/bundles/' + pkgName + '.umd.min.js', defaultExtension: 'js' };
  }
  // Add package entries for angular packages
  ngPackageNames.forEach(pack);
  var config = {
    map: map,
    packages: packages,
    defaultJSExtensions: true
  };
  System.config(config);
})(this);