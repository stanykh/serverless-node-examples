# Compare faces of two images stored in S3 using Rekognition

This example compare two images that were stored in S3. You have to create a bucket in the region that you will be testing your code and upload 2 images that you wished to compare.

## Edit serverless.yml
You will need to do some simple editing on the serverless.yml to specify the bucket name, source image, and target image.

```
custom:
  bucket: ap-northeast-1-test-content
  sourceImage: margot-1.jpg
  targetImage: margot-2.jpg  
```  

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
serverless invoke -f compareFaces --stage dev --region ap-northeast-1
```
The result: 
```
{
    "SourceImageFace": {
        "BoundingBox": {
            "Width": 0.3050000071525574,
            "Height": 0.40666666626930237,
            "Left": 0.38999998569488525,
            "Top": 0.09866666793823242
        },
        "Confidence": 99.91866302490234
    },
    "FaceMatches": [
        {
            "Similarity": 99,
            "Face": {
                "BoundingBox": {
                    "Width": 0.3131868243217468,
                    "Height": 0.47226232290267944,
                    "Left": 0.3008241653442383,
                    "Top": 0.1794184297323227
                },
                "Confidence": 99.99230194091797,
                "Landmarks": [
                    {
                        "Type": "eyeLeft",
                        "X": 0.38787633180618286,
                        "Y": 0.38038885593414307
                    },
                    {
                        "Type": "eyeRight",
                        "X": 0.4981350600719452,
                        "Y": 0.36188048124313354
                    },
                    {
                        "Type": "nose",
                        "X": 0.42342880368232727,
                        "Y": 0.4618764817714691
                    },
                    {
                        "Type": "mouthLeft",
                        "X": 0.4061221778392792,
                        "Y": 0.5406349301338196
                    },
                    {
                        "Type": "mouthRight",
                        "X": 0.5015688538551331,
                        "Y": 0.5295439958572388
                    }
                ],
                "Pose": {
                    "Roll": -5.936450958251953,
                    "Yaw": -19.9495792388916,
                    "Pitch": -0.674013078212738
                },
                "Quality": {
                    "Brightness": 54.60268783569336,
                    "Sharpness": 99.9305191040039
                }
            }
        }
    ],
    "UnmatchedFaces": [],
    "SourceImageOrientationCorrection": "ROTATE_0"
}
```