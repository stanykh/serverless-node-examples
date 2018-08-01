# Upload base64-encoded file to S3

A simple HTTP POST request to upload a image file to S3. Bucket information is configured in YAML. This code does not create a bucket, you may want to create a bucket prior to testing it. 

## Deploy project
```
serverless deploy
```
The default is set to region ap-southeast-1 and stage dev. You may overwrite it to your own region and stage.
```
serverless deploy --stage dev --region ap-southeast-1
```

## Request body
The code expect the payload to be of the JSON format below
```
{
  "image": <base64str>,
  "filename": <filename>,
  "ext": <file extension>    
}
```

## Test
To test, the cURL command below shall read the file original.jpg, format it as base64-encoded string, and send the HTTP request as per the JSON format above. 
```
(echo -n '{"image": "'; base64 ./original.jpg; echo '", "filename": "margot-robbie", "ext": "jpg"}') | curl -H "Content-Type: application/json" -d @-  <HTTP endpoint>
```
You will find the HTTP endpoint after you deploy the project to AWS.
```
Service Information
service: aws-lambda-node-upload-to-s3
stage: dev
region: ap-southeast-1
stack: aws-lambda-node-upload-to-s3-dev
api keys:
  None
endpoints:
  POST - https://notreal.execute-api.ap-southeast-1.amazonaws.com/dev/uploadToS3
functions:
  uploadToS3: aws-lambda-node-upload-to-s3-dev-uploadToS3
```
