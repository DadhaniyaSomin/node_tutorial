const { format } = require("date-fns");
const { v4: uuid } = require("uuid");

const fs = require("fs");
const fsp = require("fs").promises;
const path = require("path");

const logEvents = async (msg) => {
    const datetime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
  const logTime = `${datetime}\t${uuid()}\t${msg}}`;
  console.log(logTime);
  try {
    await fsp.appendFile(
      path.join(__dirname, "logs", "eventLogs,txt"),
      logTime
    );
  } catch (error) {
    console.log(error);
  }
};
// console.log(format)


module.exports = logEvents;
