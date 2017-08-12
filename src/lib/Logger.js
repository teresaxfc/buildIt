const bunyan = require('bunyan');

const rootLogger = bunyan.createLogger({
  name: process.env.SERVICE || 'BuildIt',
  level: 'trace',
  serializers: Object.assign({}, bunyan.stdSerializers, {
    error: bunyan.stdSerializers.err,
    request: bunyan.stdSerializers.req,
    response: bunyan.stdSerializers.res,
  }),
});

class Logger {
  constructor(metadata, parent) {
    const parentLogger = parent ? parent.logger : rootLogger;
    this.logger = parentLogger.child(metadata);
  }

  error(message, meta = {}) {
    this.logger.error(meta, message);
  }
}

module.exports = Logger;
