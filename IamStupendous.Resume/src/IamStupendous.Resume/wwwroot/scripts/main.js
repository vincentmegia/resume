//System.config({
//    packages: {
//        app: {
//            format: 'register',
//            defaultExtension: 'js'
//        }
//    }
//});
System.import('app')
      .then(null, console.error.bind(console));