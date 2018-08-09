# HTTP endpoints demo

Demonstrate different usage of HTTP endpoints for GET/POST request, with query string and path parameter. The demo includes different combination of the two above for most possible usage. The endpoints in this demo are:

1. Query string
2. Path parameter or path parameter + query string
3. Multiple path parameters or multi-path parameters + query string
4. POST with JSON

## Deploy project
```
serverless deploy
```
The default is set to region ap-southeast-1 and stage dev. You may overwrite it to your own region and stage.
```
serverless deploy --stage dev --region ap-southeast-1
```

## Test

You will find the HTTP endpoints after you deploy the project to AWS.
```
endpoints:
  GET - https://notreal.execute-api.ap-southeast-1.amazonaws.com/dev/query-string
  GET - https://notreal.execute-api.ap-southeast-1.amazonaws.com/dev/path-parameters/{id}
  GET - https://notreal.execute-api.ap-southeast-1.amazonaws.com/dev/multipath-parameters/{id1}/{id2}
  POST - https://notreal.execute-api.ap-southeast-1.amazonaws.com/dev/post-request
```

Following are the CURL commands to test these endpoints: 

Query String

```
curl "https://notreal.execute-api.ap-southeast-1.amazonaws.com/dev/query-string?id=1001&username=JSWarrior&param1=1337"
```

Path parameter

```
curl https://notreal.execute-api.ap-southeast-1.amazonaws.com/dev/path-parameters/malaysia
```

Path parameter + query string

```
curl "https://notreal.execute-api.ap-southeast-1.amazonaws.com/dev/path-parameters/malaysia?city=kuala_lumpur"
```

Multi-path parameters

```
curl "https://notreal.execute-api.ap-southeast-1.amazonaws.com/dev/multipath-parameters/malaysia/kuala_lumpur"
```

Multi-path parameters + query string

```
curl "https://notreal.execute-api.ap-southeast-1.amazonaws.com/dev/multipath-parameters/malaysia/kuala_lumpur?postcode=52100"
```

POST with JSON

```
curl -H "Content-Type: application/json" -X POST -d '{"firstName":"Warrior","lastName":"JS"}' https://notreal.execute-api.ap-southeast-1.amazonaws.com/dev/post-reques
```