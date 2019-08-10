const Product = require('../database/models/product');
module.exports = {
    async index(req, res){
        Product.find((err, products)=>{
            res.send(products)
        })
    },

    async create(req, res){
        res.set('Content-Type','application/json')
        let response = req.body
        let product = new Product(response);
        product.save((err, result)=>{
            res.send(result)
        })

    },

    async edit(req, res){
        let bodyreq = req.body
        res.set('Content-Type','application/json')
        Product.findByIdAndUpdate(req.params.id, bodyreq,(err, result)=>{
            if (err) return console.log(err)
        }).then(()=>{
            Product.findById(req.params.id, function (err, product) {
                res.send(product)
            });
        })
    },

    async delete(req, res){
        Product.findByIdAndDelete(req.params.id, function (err) {
            if (err) return console.log('Nope')
            res.send('Good')
        })
    }
}