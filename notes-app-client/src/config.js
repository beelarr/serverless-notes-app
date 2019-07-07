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
			USER_POOL_ID: "us-east-1_yaMJYKBVQ",
			APP_CLIENT_ID: "5b2kmbs2mfn1labvk3s4o9i855",
			IDENTITY_POOL_ID: "us-east-1:6e9ac21a-c3e2-479a-93c3-f839ae610960"
	}
};
