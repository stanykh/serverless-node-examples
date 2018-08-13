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
To test, simply make sure both image source.jpg and target.jpg is in the directory where you execute the test command. The command to encodes source.jpg and target.jpg image as base64-encoded image in a JSON object and send it to the HTTP endpoint.

```
(echo -n '{"source": "'; base64 ./source.jpg; echo '", "target": "'; base64 ./target.jpg; echo '"}') | curl -H "Content-Type: application/json" -d @-  https://notreal.execute-api.ap-northeast-1.amazonaws.com/dev/compare-faces-base64
```

The result: 

```
{"similarFaces":1}
```