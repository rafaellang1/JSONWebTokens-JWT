import { sign } from "./jwt/sign"
import { verify } from "./jwt/verify"

const secret = '#ludmillo';

const token = sign({
  exp: Date.now() + (24 * 60 * 60 * 1000),
  data: {
    sub: '@imateus.silvaa',
  },
  secret,
});

const decoded = verify({
  token,
  secret: secret,
})

console.log({decoded})
