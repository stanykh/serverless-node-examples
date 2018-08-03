'use strict';

const aws = require('aws-sdk');
const s3 = new aws.S3();

module.exports.downloadBase64Content = (event, context, callback) => {

  //curl <HTTP endpoint>/<filename> | base64 --decode > filename.jpg
  // e.g. curl https://somewhere.execute-api.ap-southeast-1.amazonaws.com/dev/download/sample.jpg | base64 --decode > sample.jpg

  const key = event.pathParameters.filename;
  var params = {
    Bucket: process.env.BUCKET,
    Key: key
  };

  s3.getObject(params, function (err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else console.log(data); // successful response

    // convert binary content to base64
    let file = new Buffer(data.Body, 'binary');
    let response = {
      statusCode: 200,
      body: file.toString('base64'),
      isBase64Encoded: true
    };

    callback(null, response);   
  });
};