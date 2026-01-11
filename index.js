const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const app = express();

app.use(
  "/auth",
  createProxyMiddleware({
    target: "https://auth-moac9hzup-bikashs-projects-12b52b64.vercel.app",
    changeOrigin: true,
  })
);

app.use(
  "/captain",
  createProxyMiddleware({
    target: "https://captain-y1p6yl7eb-bikashs-projects-12b52b64.vercel.app",
    changeOrigin: true,
  })
);

app.use(
  "/user",
  createProxyMiddleware({
    target: "https://user-5p4w5lb4n-bikashs-projects-12b52b64.vercel.app",
    changeOrigin: true,
  })
);

app.listen(3000, () => {
  console.log("server is running on 3000");
});
