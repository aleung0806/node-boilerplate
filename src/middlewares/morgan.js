const morgan = require('morgan')
const logger = require('../utils/logger')

const morganMiddleware = morgan('dev', { 
  stream: { write: (message) => logger.info(message.trim()) },
})

module.exports = morganMiddleware