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
import authRoute from "./routes/auth.js";
import userRoute from "./routes/user.js";

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
