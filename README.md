# serverless-node-examples
A collection of Node.js codes that uses Serverless Framework. To keep things simple, the code examples you find in this repo may not have (or minimal) error handling. 

## Prerequisite
### Step 1: Install AWS CLI
Before you can use Serverless, you will need to AWS CLI. That will allow you to manage AWS services from the command line. I am on macOS, so this is how it is done. 

```
$ curl "https://s3.amazonaws.com/aws-cli/awscli-bundle.zip" -o "awscli-bundle.zip"
$ unzip awscli-bundle.zip
$ sudo ./awscli-bundle/install -i /usr/local/aws -b /usr/local/bin/aws
```

### Step 2: Create IAM User
Once you have done that, go to AWS IAM console and create a user. You may want to grant an AdministratorAccess to this user. Once this user is created, it will be assigned with Access key ID and Secret access key.

### Step 3: Edit ~/.aws/config 
This step is specify the default region based on the username (username must match the user that you created in IAM). Nothing fancy, you may change it to any region to your liking.

```
[default]
output = json
region = ap-southeast-1

[profile <your_username_here>]
region = ap-southeast-1
output = json
```
example:
```
[default]
output = json
region = ap-southeast-1

[profile johnappleseed]
region = ap-southeast-1
output = json
```

### Step 4: Edit ~/.aws/credentials
Insert your IAM user Access key ID and Secret access key here. Both default and username can be of the same value. 

```
[default]
aws_access_key_id = <your_access_key_id_here>
aws_secret_access_key = <your_secret_access_key_here>

[<your_username_here>]
aws_access_key_id = <your_access_key_id_here>
aws_secret_access_key = <your_secret_access_key_here>
```
example:
```
[default]
aws_access_key_id = AKIHELLOAWSEA
aws_secret_access_key = Uoi8vukjustsomeaccesskeyOZNpNr

[johnappleseed]
aws_access_key_id = AKIHELLOAWSEA
aws_secret_access_key = Uoi8vukjustsomeaccesskeyOZNpNr
```

### Step 5: Validate
So, we are done! Let's test to see if we have configured it correctly by running the command below. 
```
aws iam list-users
```

## Install Serverless
Once we get the AWS CLI bit out of the way, it is time to install the Serverless framework. By the way, you will need to install Node.js, which I assumed you have. 

```
npm install serverless -g
```


