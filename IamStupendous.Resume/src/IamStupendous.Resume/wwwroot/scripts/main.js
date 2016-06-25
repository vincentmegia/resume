System.config({
    packages: {
        app: {
            format: 'register',
            defaultExtension: 'js'
        }
    }
});
System.import('scripts/app/boot')
      .then(null, console.error.bind(console));