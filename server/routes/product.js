import express from "express"
import {getProduct,getSingleProduct} from "../controllers/product.js"

const router=express.Router()

//creating routes

router.get("/product",getProduct);
router.get("/product/:id",getSingleProduct);


export default router;