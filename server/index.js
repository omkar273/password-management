import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import mongooseBeautifier from "mongoose-beautiful-unique-validation"
import authRoute from "./routes/auth";
import userRoute from "./routes/user";

/* CONFIGURATIONS */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "public/assets")));
var replacer = app.get('json replacer');
var spaces = app.get('json spaces');
app.set('json replacer', replacer); // property transformation rules
app.set('json spaces', 2); // number of spaces for indentation


/* importing middleware functions */


/* helper function */
function makeid(length, fileName) {
    let result = Date.now() + '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result + fileName;
}


/* FILE STORAGE */
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/assets");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
        console.log(`${req}`);

    },
});

const upload = multer({ storage });

/* ROUTES WITH FILES */

/* ROUTES */
app.use('/auth', authRoute);
app.use('/user', userRoute);

/* MONGOOSE SETUP */
mongoose.plugin(mongooseBeautifier);
const PORT = process.env.PORT || 5050;
const conn = mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        app.listen(PORT, () => console.log(`Server Port: http://localhost:${PORT}`));

    })
    .catch((error) => console.log(`${error} did not connect`));



//   npm i bcrypt body-parser cors dotenv  express gridfs-stream helmet  jsonwebtoken mongoose morgan multer multer-gridfs-storage cookie-parser mongoose-beautiful-unique-validation

// npm i yup redux-persist react-router-dom react-redux react-dropzone formik dotenv @reduxjs/toolkit @mui/material @mui/icons-material @emotion/styled @emotion/react

/* STEPS NEXT :

1. create a .env file under server / root directory 
2. create 2 necessary variables namely PORT & MONGO_URL to locally store mongoDB url and development port
3. create a public dir and assests sub-dir to store data
4. add .gitignore file 
5. paste the following in .env file
6. run command (mkdir public/assets) in terminal under server dir 

# Secret keys 
DB_PASS = "xu3kKxLIhfxp9ftM"

MONGO_URL = "mongodb+srv://admin:xu3kKxLIhfxp9ftM@social-pedia.z1og1dg.mongodb.net/?retryWrites=true&w=majority"

PORT = 3000

JWT_SECRET_KEY_256_BIT = "eUszVfxGuVvVXr69S5Di7UJrwRSVdBv1"
JWT_SECRET_KEY_504_BIT = "o?%XZ1&N;Gup]isA+PuF6868-QurhXky^toZ8Ga8P,P!Z3'C^Lu42tfe%kW"
JWT_SECRET_KEY_128_BIT = "c8oBO6qjBQ2Ni1aX99utif7WT8NA5smg"



//cookie template
res.cookie(`Cookie token name`,`encrypted cookie string Value`,{
        maxAge: 5000,
        // expires works the same as the maxAge
        expires: new Date('01 12 2021'),
        secure: true,
        httpOnly: true,
        sameSite: 'lax'
    });


*/


