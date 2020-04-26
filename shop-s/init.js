const mongoose = require('mongoose')
const db = 'mongodb://localhost/shop' //端口号默认是27017

//引入schema
const glob = require('glob');
const path = require('path');
exports.initSchemas = () => {
    //引入所有的schema
    glob.sync(path.resolve(__dirname, './model', '*.js')).forEach(require)
}

exports.connect = () => {
    //连接数据库
    mongoose.set('useCreateIndex', true)
    mongoose.connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    mongoose.connection.on('disconnected', () => {
        mongoose.connect(db)
    });
    //数据库出现错误
    mongoose.connection.on('error', err => {
        console.log(err);
        mongoose.connect(db);
    });
    mongoose.connection.once('open', () => {
        console.log('连接成功');
    })
}