var log4js = require('log4js');
var path = require('path');
var config = require('./../config');

log4js.configure({ "appenders": [{
  "type": "console",
  "layout": {
    "type": "pattern",
    "pattern": "%[[%p]%] - %m"
  }
}], replaceConsole: true });

var logger = log4js.getLogger();
logger.setLevel(config.logLevel);
module.exports = logger;

if (require.main === module) {
  logger.trace('Entering cheese testing');
  logger.debug('Got cheese.');
  logger.info('Cheese is Gouda.');
  logger.warn('Cheese is quite smelly.');
  logger.error('Cheese is too ripe!', {s: "gouda"});
  logger.fatal('Cheese was breeding ground for listeria.');
}
