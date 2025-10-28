import winston from "winston";

const {combine, timestamp, printf, align} = winston.format

const LOGDIR = 'logs';
const LOGFILE = 'logfile.dat';

const logger = winston.createLogger({
    level: process.env.LOG_LEVEL || 'debug',
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