import { generateSignature } from "./generateSignature";

interface IVerifyOptions {
  token: string,
  secret: string,
};

export function verify({ token, secret }: IVerifyOptions) {
  const [headerSent, payloadSent, signatureSent] = token.split('.');

  console.log({headerSent, payloadSent, signatureSent})

  const signature = generateSignature({
    header: headerSent,
    payload: payloadSent,
    secret,
  });

  if (signature !== signatureSent) {
    throw new Error('Invalid JWT token')
  }

  console.log('token OK')
}
