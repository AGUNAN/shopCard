import productModel from "../models/productModel.js";



//get all products
export const getProduct = async(req,res)=>{
  try {
    const getAllProduct = await productModel.find({})
    res.status(200).json({
      success:true,
      getAllProduct
    })
    
  } catch (error) {
    console.log(`Error at getProduct: ${error}`);
    res.status(400).json({message:"Unable to get product"})
  }
  
}


//get single products
export const getSingleProduct = async (req,res)=>{
   try {
    const id=req.params.id
    const getProduct = await productModel.findById(id)
    res.status(200).json({
      success:true,
      getProduct
    })
    
  } catch (error) {
    console.log(`Error at getProduct: ${error}`);
    res.status(400).json({message:"product not found"})
  }
  
}