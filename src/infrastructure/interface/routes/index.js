const Routes = require('./route');

module.exports = (app) => {
  console.log('get this route');
  app.get("/", (req, res) => {
    res.json({ message: "API is connected! LOL" });
  });
  app.use(Routes);
};
