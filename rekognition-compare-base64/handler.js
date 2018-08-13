'use strict';
const AWS = require('aws-sdk');
const rekognition = new AWS.Rekognition();

module.exports.compareFacesBase64 = (event, context, callback) => {
  const json = JSON.parse(event.body);
  let sourceBase64 = json.source;
  let targetBase64 = json.target;
  let sourceBuffer = new Buffer.from(sourceBase64, 'base64');
  let targetBuffer = new Buffer.from(targetBase64, 'base64');

  var params = {
    SourceImage: { 
      Bytes: sourceBuffer
    },
    TargetImage: { 
      Bytes: targetBuffer
    },
    SimilarityThreshold: 90
  };

  rekognition.compareFaces(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
  
    let similarityCount = 0;
    if (data.FaceMatches.length > 0) {
      data.FaceMatches.forEach(element => {
        if (element.Similarity > 90) {
          similarityCount++;
        }
      });
    }
    
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        "similarFaces": similarityCount
      })
    };
    callback(null, response); 
  });
};



