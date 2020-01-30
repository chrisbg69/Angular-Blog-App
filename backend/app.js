const express = require('express');

const app = express();

app.use((req, res,next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Header",
  "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
  next();

});

app.post("/api/posts", (req, res, next) => {
  console.log();
});

app.use("/api/posts",(req, res, next) => {
  const posts = [
    {
      id: "123sdgfsdgfdghfdsvg",
      title: "First server-side post",
      content: "This is coming first from the server!"
    },
    {
      id: "456fhljdhdhlkdhlkdh",
      title: "Second server-side post",
      content: "This is coming second from the server!"
    }
  ];
  res.status(200).json({
    message: 'Posts fetched succesfully',
    posts: posts
  });
});

module.exports = app;
