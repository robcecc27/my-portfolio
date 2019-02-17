import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
  {
  'title': "AWS Polly Text to Speech",
  'href': "https://studywithpolly.com",
  'desc': "A text to speech applications. Enter any text in the box and click submit. Use the returned ID to retrieve the audio version of the text. AWS services used in the making of this webpage were: I.A.M. roles and policies, Lambda functions, Cloud Front, SNS, DynamoDB, S3, Amazon API gateway, CloudWatch, AWS Route 53",
    'image': {
      'desc': "Text to Speech using AWS Polly",
      'src': "images/polly.png",
      'comment': ""
    }
  },
  {
    'title': "My Professional Portfolio Webpage",
    'href': "https://github.com/robcecc27/my-portfolio",
    'desc': "This webpage uses AWS and ReactJS. A list of technologies used are: Brew SSH, Git & github, HTML, CSS, Font awesome, Google fonts, Python. The AWS Services for this portfolio include: AWS Lambda, IAM, CodePipeline, SNS, S3, AWS CLI & Boto3, CloudFront & SSL, Route 53 & DNS, CloudWatch",
    'image': {
      'desc': "React image and Amazon Web Services images combined ",
      'src': "images/react_aws.png",
      'comment': ""
    }
  },
  {
    'title': "Work Example",
    'href': "https://example.com",
    'desc': "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    'image': {
      'desc': "example screenshot of this project",
      'src': "images/example1.png",
      'comment': ""
    }
  }
];

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));
