import express from "express";
import routes from "./src/routes/crmRoutes";
import mongoose from 'mongoose';


const app = express();
const PORT = 3000;

// connect to mongodb
// mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://stephen:crmdb@crmdb.q6ynddj.mongodb.net/CRMdb",{
  useNewUrlParser: true,
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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
