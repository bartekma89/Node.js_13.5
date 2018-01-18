var os = require('os');
var Time = require('./Time');

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
    
    console.log('System: ', type);
    console.log('Release: ', release);
    console.log('CPU model: ', cpu);
    process.stdout.write('Uptime: ~' + (uptime / 60).toFixed(0) + ' min\n');
    process.stdout.write('User name: ' + user.username + '\n');
    process.stdout.write('Home dir: ' + user.homedir + '\n');
    process.stdout.write('Time from start OS: ' + Time.transformTime(uptime) + "\n");
}

module.exports = {
    print: getOSinfo
};