const Koa = require('koa');
const Router = require('koa-router');
let router = new Router();
const mongoose = require('mongoose');
const fs = require('fs')

router.get('/insertProductInfo', async (ctx) => {
    fs.readFile('./data/product.json', 'utf8', (err, data) => {
        data = JSON.parse(data);
        console.log(data);
        let count = 0; //计数器,记录数据的条数
        const Product = mongoose.model('Product')
        data.map((value, index) => {
            let product = new Product(value);
            console.log(value);
            //随机生成类型，范围1~8
            product.type = Math.floor(Math.random() * 8) + 1;


            product.save().then(() => {
                count++;
                console.log('数据请求成功数量' + count);

            }).catch(err => {
                console.log('数据请求失败原因' + err);

            });
        });

    });
    ctx.body = '导入数据'
});

router.get('/getProductListByType', async (ctx) => {
    const Product = mongoose.model('Product');
    await Product.find({
            type: ctx.query.typeId
        })
        .skip(parseInt(ctx.query.start))
        .limit(parseInt(ctx.query.limit))
        .exec().then(res => {
            ctx.body = res;
        })
});

router.get('/getDetail', async (ctx) => {
    const Product = mongoose.model('Product');
    await Product.findOne({
            _id: ctx.query.id
        })
        .exec().then(res => {
            ctx.body = res;
        })
});
module.exports = router;