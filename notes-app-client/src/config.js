export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-api-prod-serverlessdeploymentbucket-chmdb00bo95s"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://0kpobiymki.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_TjKQFdu7D",
    APP_CLIENT_ID: "4sm0ib0mkncljucuq2vn2vep9c",
    IDENTITY_POOL_ID: "us-east-1:ffdd4fa2-53e8-47d3-82fd-647ae04b9822"
  }
};
