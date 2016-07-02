(function (global) {

    // map tells the System loader where to look for things
    var map = {
        'app': 'scripts/app', // 'dist',
        'rxjs': 'libraries/rxjs',
        'angular2-in-memory-web-api': 'libraries/angular2-in-memory-web-api',
        '@angular': 'libraries/@angular',
        'jquery': 'libraries/jquery',
        'bootstrap': 'libraries/bootstrap',
        'moment': 'libraries/moment/moment.js',
        'ng2-bootstrap': 'libraries/ng2-bootstrap',
        'ng2-charts': 'libraries/ng2-charts',
    };

    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app': { main: 'boot.js', defaultExtension: 'js' },
        'rxjs': { defaultExtension: 'js' },
        'angular2-in-memory-web-api': { defaultExtension: 'js' },
        'bootstrap': { defaultExtension: 'js' },
        'ng2-charts': { defaultExtension: 'js' },
        'moment': { defaultExtension: 'js' },
        'ng2-bootstrap': { defaultExtension: 'js' },
    };

    var ngPackageNames = [
      'common',
      'compiler',
      'core',
      'http',
      'router',
      'platform-browser',
      'platform-browser-dynamic',
      'router-deprecated',
      'testing',
      'upgrade',
    ];

    // Individual files (~300 requests):
    function packIndex(pkgName) {
        packages['@angular/' + pkgName] = { main: 'index.js', defaultExtension: 'js' };
    }

    // Bundled (~40 requests):
    function packUmd(pkgName) {
        packages['@angular/' + pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
    }
    // Most environments should use UMD; some (Karma) need the individual index files
    var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
    // Add package entries for angular packages
    ngPackageNames.forEach(setPackageConfig);

    var config = {
        transpiler: 'typescript',
        typescriptOptions: {
            emitDecoratorMetadata: true
        },
        map: map,
        packages: packages
    }

    // filterSystemConfig - index.html's chance to modify config before we register it.
    if (global.filterSystemConfig) { global.filterSystemConfig(config); }

    System.config(config);

})(this);