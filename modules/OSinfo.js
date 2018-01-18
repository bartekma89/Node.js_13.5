var os = require('os');
var Time = require('./Time');
var Colors = require('colors');

function getOSinfo() {
    if (type === 'Darwin') {
        type = 'OSX';
    } else if (type === 'Windows_NT') {
        type = 'Windows';
    }
    
    var type = os.type();
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var uptime = os.uptime();
    var user = os.userInfo();
    
    console.log('System: '.gray, type);
    console.log('Release: '.red, release);
    console.log('CPU model: '.blue, cpu);
    process.stdout.write('Uptime: ~ '.green + (uptime / 60).toFixed(0) + ' min\n');
    process.stdout.write('User name: '.yellow + user.username + '\n');
    process.stdout.write('Home dir: ' + user.homedir + '\n');
    process.stdout.write('Time from start OS: '.america + Time.transformTime(uptime) + "\n");
}

module.exports = {
    print: getOSinfo
};