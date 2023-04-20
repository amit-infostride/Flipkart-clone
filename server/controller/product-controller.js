import Product from "../modal/product-schema.js"

export const getProducts = async (request, response) => {
    try {
        // find({}) means no condition is there so it will give all the data 
        // find({id:'Product1'}) means it will find data with condition based  
        const products = await Product.find({})

        response.status(200).json(products)

    } catch (error) {
        response.status(500).json({ message: error.message })
    }

}