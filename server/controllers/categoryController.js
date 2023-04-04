const categoryModel = require("../models/categoryModel");
const slugify = require("slugify");

//create category
const createCategoryController = async(req,res) =>{
    try {
        const {name} = req.body;
        if(!name){
            return res.status(400).send({
                message:"Name is required"
            })
        }
        const existingCategory = await categoryModel.findOne({name});
        if(existingCategory){
            return res.status(200).send({
                success: true,
                message:"Category already exists"
            })
        }

        const category = await categoryModel({name, slug:slugify(name)}).save();
        res.status(200).send({
            success: true,
            message:" New category created",
            category,
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error: error.message,
            message: "Error in category"
        })
    }
}

// update category
const updateCategoryController = async(req,res)=>{

    try {
        const {name}=req.body;
        const {id}=req.params;
        const category = await categoryModel.findByIdAndUpdate(id,{name, slug:slugify(name)}, {new:true});
        res.status(200).send({
            success: true,
            message: "Category updated successfully",
            category,
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error updating category"
        })
    }
}

// get all categories
const getcategoryControlller = async(req, res) => {
    try {
        const category = await categoryModel.find({});
        res.status(200).send({
            success: true,
            message:"All categories list successfully",
            category,
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error getting category"
        })
    }
}


// single category
const singleCategoryController = async (req, res) => {
    try {
        // const {slug} = req.params;
        const category = await categoryModel.findOne({slug:req.params.slug});
        res.status(200).send({
            success: true,
            message: "Get single category successfully",
            category,
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error getting single category"
        })
    }
}

// delete category
const deleteCategoryCOntroller = async (req, res) => {
    try {
        const {id} = req.params;
        await categoryModel.findByIdAndDelete(id);
        res.status(200).send({
            success: true,
            message: "Category deleted successfully"
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error deleting category"
        })
        
    }
}


module.exports = {
    createCategoryController,
    updateCategoryController,
    getcategoryControlller,
    singleCategoryController,
    deleteCategoryCOntroller
}