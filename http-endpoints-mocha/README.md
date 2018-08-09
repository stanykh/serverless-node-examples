# HTTP endpoints unit testing with Mocha/Chai

A sample to demonstrate TDD (Test Driven Development) using Mocha/Chai on HTTP endpoints. This testing concept is the same for any Node.js application. The key to enabling this by setting the environment variable before running mocha. Next is to ensure that the spec file (hello-spec.js or login-spec.js) uses the environment variables `process.env.HTTP_ROOT`, to form a complete path for the respective HTTP endpoint. 

## Deploy project
```
serverless deploy
```
The default is set to region ap-southeast-1 and stage dev. You may overwrite it to your own region and stage.
```
serverless deploy --stage dev --region ap-southeast-1
```

## Before Testing

1. Identify the root path of the endpoints:

```
Service Information
service: http-endpoints-mocha
stage: dev
region: ap-southeast-1
stack: http-endpoints-mocha-dev
api keys:
  None
endpoints:
  GET - https://notreal.execute-api.ap-southeast-1.amazonaws.com/dev/hello
  POST - https://notreal.execute-api.ap-southeast-1.amazonaws.com/dev/login
functions:
  hello: http-endpoints-mocha-dev-hello
  login: http-endpoints-mocha-dev-login
```

2. Set up the environment variable by assigning HTTP_ROOT as the root path. 

```
export HTTP_ROOT=notreal.execute-api.ap-southeast-1.amazonaws.com/dev
```

3. Install the required package for testing:

```
npm install
```

## Test

To test:

```
npm test
```

or 

```
mocha
```

## Result

The result from testing should somewhat similar to the following:


```
$ mocha

  HTTP routes test
    /GET /hello
      ✓ should return 200 with message (647ms)

  HTTP routes test
    /POST /login
      ✓ should return 200 with message (499ms)


  2 passing (1s)
```