# Download base64-encoded content from S3

A simple HTTP GET request to download a file from S3 and package it as a base64 encoded content. Which then decode with base64 to get the original file. Bucket information is configured in YAML. This code does not create a bucket, you may want to create a bucket prior to testing it. 

## Deploy project

```
serverless deploy
```
The default is set to region ap-southeast-1 and stage dev. You may overwrite it to your own region and stage.
```
serverless deploy --stage dev --region ap-southeast-1
```

## Test
To test, be sure that the bucket contains the file that you intent to download. The command below will download the content and decode the base64 content to get you the original file. The command below assumed that you have a file named margot-robbie.jpg in the bucket. 

```
curl <HTTP endpoint>/margot-robbie.jpg | base64 --decode > original-margot-robbie.jpg
```

You will find the HTTP endpoint after you deploy the project to AWS.

```
Service Information
service: download-base64-content-from-s3
stage: dev
region: ap-southeast-1
stack: download-base64-content-from-s3-dev
api keys:
  None
endpoints:
  GET - https://notreal.ap-southeast-1.amazonaws.com/dev/download-base64-content-from-s3/{filename}
```


