import express from "express";
import bodyParser from "body-parser";
import mongoose, { mongo } from "mongoose";
import cors from 'cors';
import dotenv from "dotenv";
import postRoutes from './routes/posts.js'

const app = express();

dotenv.config();

//what to use 

app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended:true}));
app.use(cors()); 

app.use('/posts', postRoutes);
//monogodb host on the cloud atlas
const CONNECTION_URL = process.env.MONGODB_URI_WITH_CREDS;
const PORT = process.env.PORT || 5063;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server runnign on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

//mongoose.set('useFindAndModify', false);
