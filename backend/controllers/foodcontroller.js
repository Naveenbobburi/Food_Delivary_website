import foodModel from "../models/foodmodel.js";
import fs from 'fs';

//add food item

const addfood = async (req, res) => {
    let image_filename = req.file ? req.file.filename : "";

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: image_filename,
        category: req.body.category
    })
    console.log("Body:", req.body);
console.log("File:", req.file);
    try {
        await food.save();
        res.json({ success: true, message: "Food item added successfully" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error while adding food item" });
    }

}

//all food list
const listFood = async (req, res) => {
    try {
        const food = await foodModel.find({});
        res.json({ success: true, data:food });

    }
    catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error while fetching food items" });
    }

}

// remove food items
const removeFood = async (req, res) => {
    try{
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`, () => {})
        await foodModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Food item removed successfully" });
    }
    catch(error){
        console.log(error);
        res.json({ success: false, message: "Error while removing food item" });
    }
}

export { addfood, listFood, removeFood };