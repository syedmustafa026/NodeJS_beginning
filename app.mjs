import express from "express";
const app = express();
const port = process.env.port || 3000;
app.get("/", (req, res) => {
  console.log(`someone is looking at u`);
  res.send(`Hello Mustafaaaa`)
});

app.listen(port, () => {
  console.log(`App listning on port ${port}`);
});
