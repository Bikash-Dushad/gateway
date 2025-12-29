const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const app = express();

app.use(
  "/auth",
  createProxyMiddleware({
    target: "http://localhost:3001",
    changeOrigin: true,
  })
);

app.use(
  "/auth",
  createProxyMiddleware({
    target: "http://localhost:3002",
    changeOrigin: true,
  })
);

app.use(
  "/auth",
  createProxyMiddleware({
    target: "http://localhost:3003",
    changeOrigin: true,
  })
);

app.listen(3000, () => {
  console.log("server is running on 3000");
});
