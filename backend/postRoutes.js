const express = require("express");
const database = require("./connect");

let postRouters = express.Router();

// Get all posts
postRouters.route("/posts").get(async (request, response) => {
  let db = database.getDb();
  let data = await db.collection("posts").find({}).toArray();
  if (data.length > 0) {
    response.json(data);
  } else {
    throw new Error("No posts found");
  }
});
// Get one post
postRouters.route("/posts/:id").get(async (request, response) => {
  let db = database.getDb();
  let data = await db
    .collection("posts")
    .findOne({ _id: new ObjectId(request.params.id) });
  if (data.length > 0) {
    response.json(data);
  } else {
    throw new Error("No posts found");
  }
});
// Create a post
postRouters.route("/posts").post(async (request, response) => {
  let db = database.getDb();
  let mongoObject = {
    title: request.body.title,
    content: request.body.content,
  };
  let data = await db.collection("posts").insertOne(mongoObject);
  response.json(data);
});
// Update a post
postRouters.put("/:id", async (req, res) => {
  const post = req.body;
  const result = await database.posts.updateOne(
    { _id: req.params.id },
    { $set: post }
  );
  res.json(result);
});
// Delete a post
postRouters.delete("/:id", async (req, res) => {
  const result = await database.posts.deleteOne({ _id: req.params.id });
  res.json(result);
});
