const mongoose = require('mongoose');

let tshirtsSchema = new mongoose.Schema({
   "brand": {type: String},
    "name": {type: String},
    "descriprion": {type: String},
    "category": {type: String},
    "type": {type: String},
    "color": {type: String},
    "product_image": {type: Array},
    "sizes": {type: Array},
    "price": {type: Number}
}, {
    collection: 'tshirts'
});

module.exports = mongoose.model('tshirts', tshirtsSchema);