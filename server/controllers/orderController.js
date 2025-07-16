import orderModel from "../models/orderModel.js"


export  const createOrder= async (req,res)=>{
   try {
     const cartItems=req.body
     const amount = Number(cartItems.reduce((acc,items)=>
      acc + items.product.price * items.qty
     ,0)).toFixed(2)
     const status = "pending";

     //create order model and save in db
     const order= await orderModel.create({
        cartItems,
        amount,
        status
     })
     
     res.status(200).json({
        success:true,
        message:"order created successfully",
        
     })
   } catch (error) {
     console.log(`Error at ceateOrder: ${error}`);
    res.status(400).json({message:"Unable to create order"})
   }
}