import express from "express";
import {addfood,listFood,removeFood} from "../controllers/foodcontroller.js";
import multer from "multer";

const foodrouter = express.Router();


//image upload configuration
const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => { 
        return cb(null, `${Date.now()}${file.originalname}`);
    }
});

const upload = multer({storage:storage});

foodrouter.post('/add',upload.single('image'),addfood);
//get method
foodrouter.get('/list', listFood);

// remove food item
foodrouter.post('/remove', removeFood);


export default foodrouter;