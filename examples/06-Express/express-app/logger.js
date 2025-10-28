import winston from "winston";

// {error, warn, info, http, verbose, debug, silly}
const {combine, timestamp, printf, align, json} = winston.format

const LOGDIR = 'logs';
const LOGFILE = 'access.log';

const logger = winston.createLogger({
    level: process.env.LOG_LEVEL || 'debug',
    // format: winston.format.cli(),
    // transports: [new winston.transports.Console()],
    transports: [
        new winston.transports.Console({
            format: winston.format.cli()
        }),
        new winston.transports.File({
            filename: `${LOGDIR}/${LOGFILE}`,
            format: combine(timestamp({
                format: 'YYYY-MM-DD hh:mm:ss.SSS A'
            }), 
                align(),
                printf((info) => `[${info.timestamp}] ${info.level}: ${info.message}`)
            )

        })
    ]
});

export default logger;