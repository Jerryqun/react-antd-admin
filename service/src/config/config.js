// default config

const port = process.env.publish ? 9003 : 9002;
module.exports = {
  workers: 1,
  port
};
