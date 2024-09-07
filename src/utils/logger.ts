import winston from "winston";
import path from "path";

const logFilePath = path.join(__dirname, "../logs/app.log");

const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => {
      return `${timestamp} [${level}]: ${message}`;
    })
  ),
  transports: [
    new winston.transports.File({ filename: logFilePath }),
    new winston.transports.Console(),
  ],
});

const fs = require("fs");
if (!fs.existsSync(path.dirname(logFilePath))) {
  fs.mkdirSync(path.dirname(logFilePath));
}

class Logger {
  public static info(message: string): void {
    logger.info(message);
  }

  public static error(message: string): void {
    logger.error(message);
  }

  public static warn(message: string): void {
    logger.warn(message);
  }
}

export default Logger;
