const Cart = require("../models/cartModel");
const addProductInCart =async(req, res)=>{
    const { product, quantity, userId, price}= req.body;
    try{
        const cart= await Cart.create({ product, quantity, userId, price });
        res.status(200).json({cart})
    }
    catch(error){
        res.status(400).json({error:error})
    }
};

const deleteCart = async(req, res) => {
    const { cartId } = req.params;
    try{
        const cart = await Cart.findByIdAndDelete({_id: cartId})
        if(!cart){
            return res.status(400).json({error: "Product not found"})
        }
        res.status(200).json( {cart })
    }catch(error){
        res.status(400).json({error: error})
    }
}

const getAllProductsInCart = async (req, res) => {
    try {
      const cartProducts = await Cart.find();
      res.status(200).json({ cartProducts });
    } catch (error) {
      res.status(400).json({ error: error });
    }
  };


module.exports= {addProductInCart,deleteCart,getAllProductsInCart}