var cluster = require('cluster');

if (cluster.isMaster) {
    var cpuCount = require('os').cpus().length;
    for(let i = 0; i < cpuCount; i++){
        cluster.fork();
    }
    cluster.on('exit', function () {
        cluster.fork();
    });
} else {
    require('./server');
}