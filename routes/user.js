const express = require('express')
const router = express.Router()
const path = require('path')
const rootDir = require('../utils/path')
const adminData = require('./admin')

router.get('/',(req, res, next) => {
    //render pug template
    const products = adminData.products
    res.render('shop', {prods:products, docTitle:'Shopping Pug', path:'/'})
    //render html file
    //res.sendFile(path.join(rootDir, 'views', 'shop.html'))
    //console.log('user.js', adminData.products);
})

module.exports = router;