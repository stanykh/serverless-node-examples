'use strict';

module.exports.hello = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello Serverless! Hello Mocha! Hello Chai!'
    }),
  };

  callback(null, response);
};

module.exports.login = (event, context, callback) => {
  const data = JSON.parse(event.body);
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      role: 'admin',
      username: data.username
    }),
  };

  callback(null, response);
};


