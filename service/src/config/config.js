// default config

const port = process.env.publish ? 9003 : 9002;
module.exports = {
  workers: 1,
  port,
  jwt: {
    secret: 'ConstOwn',
    cookie: 'jwt-token',
    expire: 60 * 60 * 24, // 24小时
  },
};
