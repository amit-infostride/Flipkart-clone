
//  product schema 

import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    id: {
        type: String,
        requried: true,
        unique: true
    },
    url: String,
    detailUrl: String,
    title: Object,
    price: Object,
    quantity: Number,
    description: String,
    discount: String,
    tagline: String
});

 //             ('product'---> is the collection name in which data is entered and productSchema is the schema of product)
const Product = mongoose.model('product', productSchema);

export default Product;