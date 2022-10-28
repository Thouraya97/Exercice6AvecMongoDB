import express, { application, json } from 'express'; 
import mongoose from 'mongoose';
import userRoutes from './routers/user.router.js'
import morgan from 'morgan';

const app = express();
app.use(express.json())
const hostname = '127.0.0.1';
const port = process.env.PORT || 9095

app.use(morgan("dev"));
/*app.use('/game',gameRoutes); */
app.use('/user',userRoutes);
mongoose.connect(
    "mongodb://127.0.0.1/my_database",
    
  );
  
  const connection = mongoose.connection;
  connection.once("open", () => {
    console.log("MongoDb connected");
  });
  
  app.route("/").get((req, res) => res.json(data));
  


app.listen(port,hostname,()=>{console.log(`server running at http://${hostname}:${port}/`)})
