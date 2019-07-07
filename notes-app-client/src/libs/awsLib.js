import { Storage } from "aws-amplify";

export const s3Upload = async file => {
  const fileName = `${Date.now()}-${file.name}`;
	debugger
  const stored = await Storage.vault.put(fileName, file, {
    contentType: file.type
  });
  return stored.key;
};
