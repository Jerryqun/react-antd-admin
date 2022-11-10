// default config

const port = process.env.publish ? 9000 : 9001;
module.exports = {
  workers: 1,
  port
};
