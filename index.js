var OSinfo = require('./modules/OSinfo');
var EventEmitter = require('events');
var Color = require('colors');

var emitter = new EventEmitter();

emitter.on('beforeCommand', function (instruction) {
    console.log('You wrote %s, trying to run a command', instruction.red);
})

emitter.on('finishCommand', function() {
    console.log('Finish command'.red);
})

process.stdin.setEncoding('utf-8');
process.stdout.write('Wprowadz komendę: ');
process.stdin.on('readable', function () {
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        emitter.emit('beforeCommand', instruction);
        switch (instruction) {
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            case '/sayhello':
                process.stdout.write('Say Hello!\n');
                break;
            case '/getOsinfo':
                OSinfo.print();
                break;
            default:
                process.stderr.write('Wrong instruction!!!\n');
        }
        emitter.emit('finishCommand');
    }
})
