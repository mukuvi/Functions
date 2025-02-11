import http from "http";

const server = http.createServer((req, res) => {
  res.write("hello world");
  res.end();
});
