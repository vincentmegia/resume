(function (global) {

    // map tells the System loader where to look for things
    var map = {
        'app': 'scripts/app', // 'dist',
        'rxjs': 'libraries/rxjs',
        'angular2-in-memory-web-api': 'libraries/angular2-in-memory-web-api',
        '@angular': 'libraries/@angular',
        'chartjs': 'libraries/chart.js/dist',//TODO: later
        'ng2-charts': 'libraries/ng2-charts',
        'moment': 'libraries/moment/moment.js',
        'ng2-bootstrap': 'libraries/ng2-bootstrap'
    };

    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app': { main: 'boot.js', defaultExtension: 'js' },
        'rxjs': { defaultExtension: 'js' },
        'angular2-in-memory-web-api': { defaultExtension: 'js' },
        'ng2-charts': { defaultExtension: 'js' },
        //'moment': { defaultExtension: 'js' },
        'ng2-bootstrap': { defaultExtension: 'js' }
        //'chartjs': { defaultExtension: 'js' }//TODO: later
    };

    var packageNames = [
      '@angular/common',
      '@angular/compiler',
      '@angular/core',
      '@angular/http',
      '@angular/platform-browser',
      '@angular/platform-browser-dynamic',
      '@angular/router',
      '@angular/router-deprecated',
      '@angular/testing',
      '@angular/upgrade',
    ];

    // add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
    packageNames.forEach(function (pkgName) {
        packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
    });

    var config = {
        map: map,
        packages: packages
    }

    // filterSystemConfig - index.html's chance to modify config before we register it.
    if (global.filterSystemConfig) { global.filterSystemConfig(config); }

    System.config(config);

})(this);