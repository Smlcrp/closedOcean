const mongoose = require('mongoose');
const  nft  = require('../Controllers');

const nftSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name can not be empty']
    },
    price: {
        type: Number,
        min: [0, 'you can not add a negative number'],
        required: [true, 'price can not be empty'],
    },
    image: {
        type: String,
        required: [true, "image can not be empty"],
    },
    description: {
        type: String,
    }
});

const NFT = mongoose.model(nft, nftSchema);
module.exports = NFT;
