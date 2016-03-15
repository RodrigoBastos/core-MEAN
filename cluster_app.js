/**
 * Created by Rodrigo Bastos on 28/10/15.
 */

const logger  = require('./server/utils/logger');
const config  = require('./server/config');
const cluster = require('cluster');

if (cluster.isMaster) {
  for (var i = 0; i < config.concurrency; i += 1) {
    cluster.fork();
  }

  cluster.on('exit', function (worker) {
    logger.warn('Cluster number ' + worker.id + ' died :(. Respawning...');
    cluster.fork();
  });

} else {

  var App = require('./app');

  //Instance Express
  var app = new App();
  app.listen(app.get('port'));

  logger.info(
    'Express cluster number ' + cluster.worker.id +
    ' listening on port ' + app.get('port') +
    ' in ' + app.get('env') + ' mode');
}