# Compare faces of two base64-encoded images through API endpoint

This example compare two images uploaded via HTTP endpoint. You may play around `SimilarityThreshold` to set the minimum level of confidence for FaceMatches.

## Deploy project
```
serverless deploy
```
The default is set to region ap-northeast-1 and stage dev. You may overwrite it to your own region and stage.
```
serverless deploy --stage dev --region ap-northeast-1
```

## Test
To test, simply invoke the function by specifying the deployment stage and region. I specify the region because ap-northeast-1 is not my default region. 

```
(echo -n '{"source": "'; base64 ./source.jpg; echo '", "target": "'; base64 ./target.jpg; echo '"}') | curl -H "Content-Type: application/json" -d @-  https://notreal.execute-api.ap-northeast-1.amazonaws.com/dev/compare-faces-base64
```

The result: 

```
{"similarFaces":1}
```