const winston = require("winston");

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      colorize: true,
      timestamp: true,
      level: "silly"
    }),
    new winston.transports.File({
      filename: "dump.log",
      level: "debug",
      timestamp: true
    })
  ]
});

module.exports = logger;
