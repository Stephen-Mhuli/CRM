import express from "express";
import routes from "./src/routes/crmRoutes";
import mongoose from 'mongoose';
import 'dotenv/config';


const app = express();

const mongoURI = process.env.mongoURI;
// connect to mongodb
mongoose.Promise = global.Promise;
mongoose.connect( mongoURI ,{
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routes(app);

// serving static files
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send(`Node and express server running on port ${PORT}`);
});

// port number
const PORT = process.env.PORT || 5000;

// listen for requests
app.listen(PORT , () => {
  console.log(`Server is running on port ${PORT} `);
});
