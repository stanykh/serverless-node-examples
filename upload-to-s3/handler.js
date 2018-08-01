'use strict';

const aws = require('aws-sdk');
const s3 = new aws.S3();

module.exports.uploadToS3 = (event, context, callback) => {
  
  // (echo -n '{"image": "'; base64 ./original.jpg; echo '", "filename": "margot-robbie", "ext": "jpg"}') | curl -H "Content-Type: application/json" -d @-  <HTTP endpoint>
  // expected JSON
  // {
  //   "image": <base64str>,
  //   "filename": <filename>,
  //   "ext": <file extension>    
  // } 
  
  const json = JSON.parse(event.body);
  let base64String = json.image;
  let buffer = new Buffer.from(base64String, 'base64');
  let key = json.filename + '.' + json.ext;

  var params = {
    Bucket: process.env.BUCKET,
    Key: key,
    Body: buffer
  }

  s3.putObject(params, function (err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else console.log(data); // successful response

    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Successfully uploaded to S3'
      })
    };
    callback(null, response);         
  });  
};
