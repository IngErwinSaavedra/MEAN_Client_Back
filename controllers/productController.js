const Product = require("../models/Product");

exports.createProduct = async (req, res) => {
    try {
        let product;
        //Create Product
        // Creamos nuestro producto
        product = new Product(req.body);
        await product.save();
        res.json(product);

    }  catch (error) {
        console.log(error);
        res.status(500).send('Error creating product');
    }
}

exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error creating product');
    }
};

exports.updateProduct = async (req, res) => {
    try {
        const {name, category, location, price } = req.body;
        let product = await Product.findById(req.params.id);

        if (!product) {
            res.status(404).json({ msg: 'Product not found'});
        }

        product.name = name;
        product.category = category;
        product.location = location;
        product.price = price;

        product = await Product.findOneAndUpdate({ _id: req.params.id}, product, { new: true})
        res.json(product);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error updating product');
    }
};


exports.getProduct = async (req, res) => {
    try {
        let product = await Product.findById(req.params.id);

        if (!product) {
            res.status(404).json({ msg: 'Product not found'});
        }

        res.json(product);
    } catch (error) {
        
    }
};

exports.deleteProduct = async (req, res) => {
    try {
        let product = await Product.findById(req.params.id);

        if (!product) {
            res.status(404).json({ msg: 'Product not found'});
        }
        await Product.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'Product removed successfully' });
    } catch (error) {
        
    }
}