exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        _id: "1",
        title: "Tech related Tips",
        content: "Lorem",
        image: "images",
        creator: {
          name: "Samir",
        },
        createdAt: new Date(),
      },
    ],
  });
};
exports.createPosts = (req, res, next) => {
  const title = req.body.title;
  console.log(name);
  const content = req.body.content;
  res.status(201).json({
    message: "Successful",
    post: { id: new Date().toISOString(), title: title, content: content },
  });
};
