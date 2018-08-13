'use strict';
const AWS = require('aws-sdk');
const rekognition = new AWS.Rekognition();

module.exports.compareFaces = (event, context, callback) => {
  var params = {
    SourceImage: { 
      S3Object: {
        Bucket: process.env.BUCKET,
        Name: process.env.SOURCE_IMAGE
      }
    },
    TargetImage: { 
      S3Object: {
        Bucket: process.env.BUCKET,
        Name: process.env.TARGET_IMAGE
      }
    },
    SimilarityThreshold: 90
  };

  rekognition.compareFaces(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
  
    callback(null, data);
  });
};
