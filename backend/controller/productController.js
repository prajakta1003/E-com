const Product = require("../models/productModel");
const addProduct = async (req, res) => {
  const { name, price, dec,   } = req.body;
  try {
    const product1 = await Product.create({ name, price, dec,   });
    res.status(200).json({ product1 });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};


const deleteProduct = async (req, res) => {
    const { productId } = req.params;
    try{
        const product= await Product.findByIdAndDelete({_id:productId})
        if(!product){
            return res.status(400).json( { error: "product not found"})
        }res.status(200).json( { product })
    }catch(error){
        res.status(400).json({ error: error });
    }
}

module.exports = { addProduct,deleteProduct };