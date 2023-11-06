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
    hakr: function(what) {
        let randomSyntax
        this.echo()
        
    }
}, {
    greetings: greetings4.innerHTML
});
