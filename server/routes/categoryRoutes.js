const express = require('express');

const { isAdmin, requireSignIn } = require("../middlewares/authMiddleware");
const {
    createCategoryController,
    updateCategoryController,
    getcategoryControlller,
    singleCategoryController,
    deleteCategoryCOntroller
    } = require('../controllers/categoryController')

const router = express.Router();

//routes
// create category
router.post("/create-category",requireSignIn,isAdmin,
  createCategoryController
);

//update category
router.put("/update-category/:id",requireSignIn,
  isAdmin,
  updateCategoryController
);

//getALl category
router.get("/get-category", getcategoryControlller);

//single category
router.get("/single-category/:slug", singleCategoryController);

//delete category
router.delete("/delete-category/:id",requireSignIn,
  isAdmin,
  deleteCategoryCOntroller
);

module.exports = router;