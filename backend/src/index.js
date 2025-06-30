const PORT = process.env.PORT || 8001;
const ENV = require("./environment");

const app = require("./application")(ENV);
const server = require("http").Server(app);
const cors = require("cors");

app.use(cors({
  origin: "https://photolabs-1.onrender.com",
  credentials: true
}));

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT} in ${ENV} mode.`);
});
