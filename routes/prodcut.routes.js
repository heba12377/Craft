const express = require("express");
const productController = require("../controllers/product.controller");
const multer = require("../utils/multerConfig");
const {createProduct} = require("../utils/validation/product.validator");

// mergeParams allows us to access parameters from other routers
// we need to access category name from other router

const productRouter = express.Router({mergeParams: true});

productRouter.route("/").post(createProduct,productController.createProduct)
.get(productController.findAll);

productRouter.route("/:id").get(productController.findone)
.patch(productController.updateOne)
.delete(productController.deleteOne);

productRouter.route('/products/sale').get(productController.saleProducts)
productRouter.route('/image/:id').patch(multer,productController.uploadImage)


module.exports = productRouter;
