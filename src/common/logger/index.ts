import winston, { format, transports } from 'winston';
import { Json } from '../../types/env';
import { env } from '../env';

const customLevels = {
  levels: {
    error: 0,
    warn: 1,
    info: 2,
    debug: 3,
    trace: 4,
  },
  colors: {
    error: 'red',
    warn: 'yellow',
    info: 'cyan',
    debug: 'white',
    trace: 'magenta',
  },
};

export const generateFileTransport = (level: string) =>
  new winston.transports.File({
    filename: `jinshinroku.${level}.log`,
    level,
  });

const consoleTransport = new transports.Console();
const level = env('LOG_LEVEL', { isOptional: true, defaultValue: 'trace' });
winston.addColors(customLevels.colors);
const logger = winston.createLogger({
  level,
  levels: customLevels.levels,
  format: format.combine(
    format.json(),
    format.printf((log) => `${JSON.stringify(log)}`),
    format.colorize({
      all: true,
    }),
  ),
  transports: [
    consoleTransport,
    // generateFileTransport('error'),
    // generateFileTransport('warn'),
    // generateFileTransport('trace'),
    // generateFileTransport('debug'),
    // generateFileTransport('info'),
  ],
});

export const error = (message: string, log: Json) =>
  logger.log({
    level: 'error',
    message,
    timestamp: new Date().toISOString(),
    log,
  });
export const warn = (message: string, log: Json) =>
  logger.log({
    level: 'warn',
    message,
    timestamp: new Date().toISOString(),
    log,
  });
export const info = (message: string, log: Json) =>
  logger.log({
    level: 'info',
    message,
    timestamp: new Date().toISOString(),
    log,
  });
export const debug = (message: string, log: Json) =>
  logger.log({
    level: 'debug',
    message,
    timestamp: new Date().toISOString(),
    log,
  });
export const trace = (message: string, log: Json) =>
  logger.log({
    level: 'trace',
    message,
    timestamp: new Date().toISOString(),
    log,
  });
