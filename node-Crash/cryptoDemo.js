import crypto from "crypto";

//createHash()
const hash = crypto.createHash("sha256");
hash.update("password1234");
console.log(hash.digest("hex"));

//randomBytes()
crypto.randomBytes(16, (err, buf) => {
  if (err) throw err;
  console.log(buf.toString("hex"));
});

//createCipheriv & createDecipheriv
const algorithm = "aes-256-cbc";
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);
