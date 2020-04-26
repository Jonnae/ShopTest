const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Id = Schema.Types.ObjectId

const cartSchema = new Schema({
    Id: Id,
    productId: {
        type: Id,
        ref: 'Product', //指向联合查询的model
    },
    userId: Id,
    createDate: {
        type: Date,
        default: Date.now()
    }
});


//发布模型
mongoose.model('Cart', cartSchema);