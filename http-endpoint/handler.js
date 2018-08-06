'use strict';

module.exports.queryString = (event, context, callback) => {
  console.log('event: ' + JSON.stringify(event));
  // query string
  // curl "https://someendpoint.aws.com/query-string?id=1000&username=jswarrior&param1=2000"
  const id = event.queryStringParameters.id;
  const username = event.queryStringParameters.username;
  const param1 = event.queryStringParameters.param1;
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      id: id,
      username: username,
      param1: param1
    }),
  };

  callback(null, response);
};

module.exports.pathParameters = (event, context, callback) => {
  console.log('event: ' + JSON.stringify(event));
  // path only
  // curl "https://someendpoint.aws.com/path-parameters/kuala_lumpur"
  // path + querystring
  // curl "https://someendpoint.aws.com/path-parameters/kuala_lumpur?user=9001"
  const pathParameters = event.pathParameters.id;
  const queryStringParameters = event.queryStringParameters;
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      pathParameters: pathParameters,
      queryStringParameters: queryStringParameters
    }),
  };

  callback(null, response);
};

module.exports.multiPathParameters = (event, context, callback) => {
  console.log('event: ' + JSON.stringify(event));
  // path only
  // curl "https://someendpoint.aws.com/multipath-parameters/malaysia/kuala_lumpur"
  // path + querystring
  // curl "https://someendpoint.aws.com/multipath-parameters/malaysia/kuala_lumpur?postcode=52001"
  const id1 = event.pathParameters.id1;
  const id2 = event.pathParameters.id2;
  const queryString = event.queryStringParameters;
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      id1: id1,
      id2: id2,
      queryString: queryString
    }),
  };

  callback(null, response);
};

module.exports.postRequest = (event, context, callback) => {
  console.log('request: ' + JSON.stringify(event));
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      request: event.body
    }),
  };

  callback(null, response);
};