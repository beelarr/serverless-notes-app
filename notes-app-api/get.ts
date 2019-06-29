import * as dynamoDbLib from "./libs/dynamodb-lib.js";
import { success, failure } from "./libs/response-lib.js";

export async function main(event, context) {
  const params = {
    TableName: "notes",
    Key: {
      userId: event.requestContext.identity.cognitoIdentityId,
      noteId: event.pathParameters.id
    }
  };

  try {
    const result = await dynamoDbLib.call("get", params);
    if (result.Item) {
      return success(result.Item);
    } else {
      return failure({ status: false, error: "Item was not found" });
    }
  } catch (e) {
    console.error(e);
    return failure({ status: false });
  }
}
