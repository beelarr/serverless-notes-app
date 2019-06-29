import * as AWS from "aws-sdk";

export function call(action, params) {
  const dynamoDb = new AWS.DynamoDB.DocumentClient();

	// an alternative to the standard callback function syntax
  return dynamoDb[action](params).promise();
}
