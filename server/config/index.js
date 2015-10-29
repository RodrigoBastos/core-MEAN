/**
 * Created by Rodrigo Bastos on 29/10/15.
 */


module.exports = {

  concurrency: process.env.WEB_CONCURRENCY || 1,
  logLevel: process.env.LOG_LEVEL
  || process.env.NODE_ENV === 'production' ? 'debug' : 'trace'

};