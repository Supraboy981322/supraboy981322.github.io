$('body').terminal({
    hello: function () {
        this.echo(
            'Hello, welcome.');
    },
    bye: function () {
        this.echo(
            'Bye, I guess.');
    },
    vDir_set: function (location) {
        const vDir = location;
        this.echo('vDir set to: ' + vDir);
        this.echo('Note:');
        this.echo('If the vDir is not set to a valid URL, file related functions will not work properly. Please make sure you have a valid URL.');
    },
    vDir: function () {
        this.echo('')
    },
    help_specify: function (what) {
        if (what == 'hello') {
            this.echo(
                '"hello" returns "Hello, welcome."');
        } else if (what == 'bye') {
            this.echo(
                '"bye" returns "Bye, I guess."');
        } else {
            this.echo(
                'Err. no command for ' + what);
        }
    },
    hakr: function () {

        
            let syntax = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
      
            var modules = [
                "axios", "lodash", "sentry-cli", "babel", "nodemon", "mongoose", "underscore", "async", "request", "lodash", "commander", "express", "optimist", "colors", "coffee-script",
                "mkdirp", "debug", "q", "chalk", "yeoman-generator", "moment", "glob", "through2", "jade", "uglify-js",
                "socket.io", "gulp-util", "redis", "cheerio", "through", "node-uuid", "connect", "winston", "mime",
                "minimist", "bluebird", "grunt", "handlebars", "mongodb", "rimraf", "semver", "ejs", "mongoose", "marked",
                "xml2js", "lodash.string", "fs-extra", "mocha", "js-yaml", "superagent", "less", "extend", "esprima",
                "jquery", "stylus", "body-parser", "xtend", "jsdom", "event-stream", "shelljs", "minimatch", "prompt",
                "browserify", "wrench", "ws", "mysql", "readable-stream", "yosay", "inherits", "when", "pkginfo",
                "backbone", "nopt", "cli-color", "concat-stream", "passport", "nodemailer", "gulp", "chai", "inquirer",
                "nconf", "validator", "yargs", "mustache", "qs", "clean-css", "npm", "ncp", "should", "open", "aws-sdk",
                "graceful-fs", "temp", "http-proxy", "iconv-lite", "requirejs", "socket.io-client", "hiredis", "uuid",
                "promise", "escodegen", "bower", "oauth", "log4js", "cli-table"
            ];

      var ranNum = Math.round(Math.random() * (syntax.length - 1) + 1);
            var senteces = [
                "it worked if it ends with ok",
                "cli [ 'node', '" + "vTerm-Break By Lunch Break Software" + "', 'install', '--verbose' ]",
                "using npm@1.4.28 " + "vTerm-Break By Lunch Break Software",
                "using node@v0.10.32",
                "readDependencies using package.json deps",
                "install where, deps " + "vTerm-Break By Lunch Break Software" + ", [ '" + modules[ranNum] + "' ] ]",
                "readDependencies using package.json deps",
                "already installed skipping  " + modules[ranNum] + "@" + Math.random() * (syntax.length - 1) + 1,
                "already installed skipping boganipsum@0.1.0 " + "vTerm-Break By Lunch Break Software",
                "build /Users/samuel/Documents/bebusy",
                "linkStuff [ false, false, false, '/Users/samuel/Documents' ]",
                "rebuildBundles " + modules[ranNum] + "@" + Math.random() * (syntax.length - 1) + 1,
                "rebuildBundles [ '.bin', 'boganipsum', 'colors' ]",
                "install " + modules[ranNum] + "@" + Math.random() * (syntax.length - 1) + 1,
                "postinstall " + modules[ranNum] + "@" + Math.random() * (syntax.length - 1) + 1,
                "prepublish " + modules[ranNum] + "@" + Math.random() * (syntax.length - 1) + 1,
                "preinstall " + modules[ranNum] + "@" + Math.random() * (syntax.length - 1) + 1,
                "linkStuff " + modules[ranNum] + "@" + Math.random() * (syntax.length - 1) + 1,
                "linkBins " + modules[ranNum] + "@" + Math.random() * (syntax.length - 1) + 1,
                "linkMans " + modules[ranNum] + "@" + Math.random() * (syntax.length - 1) + 1,
                "exit [ 0, true ]",
                "ok",
                "etag " + getHexNumber()
            ];
            var otherModules = [
                "npm", "install", "download", "parse", "ok", "verb", "WARN", "info"
            ];
            var allColors = [
                "100 Continue", "101 Switching Protocols", "102 Processing", "200 OK", "201 Created", "202 Accepted",
                "203 Non-Authoritative Information", "204 No Content", "205 Reset Content", "206 Partial Content",
                "207 Multi-Status", "208 Already Reported", "226 IM Used (RFC 3229)", "300 Multiple Choices",
                "301 Moved Permanently", "302 Found", "303 See Other", "304 Not Modified", "305 Use Proxy",
                "306 Switch Proxy", "307 Temporary Redirect", "308 Permanent Redirect", "prepublish", "postinstall",
                "install", "rebuildBundles", "linkMans", "linkBins", "linkStuff", "install", "about to build", "addNamed",
                "lock", "etag", "parsed url", "search", "query", "host", "auth", "slashes", "cache add", "GET", "POST",
                "trying", "installOne", "tar unpack"
            ];

            function getHexNumber() {
                var stringSize = 60;
                var generatedHexString = "";
                var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
                for (var i = 0; i < stringSize; i++) {
                    generatedHexString += possible.charAt(Math.floor(Math.random() * possible.length));
                }
                return generatedHexString;
            }
            this.echo('> ' + modules[ranNum]);
            this.echo(senteces[ranNum]);
            this.echo('>' + otherModules[ranNum]);
            this.echo(allColors[ranNum]);
            this.echo('>' + syntax[ranNum]);
    },
    echo: function (what) {
        this.echo(what);
    }
}, {
    greetings: greetings4.innerHTML
});
