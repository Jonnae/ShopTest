const Router = require('koa-router');
const router = new Router();
const mongoose = require('mongoose');

router.post('/registUser', async (ctx) => {
    //获取model
    const User = mongoose.model('User');
    //接收post请求，封装成User对象
    let newUser = new User(ctx.request.body);
    //使用save保存用户信息
    await newUser.save().then(() => {
        ctx.body = {
            code: 200,
            message: '注册成功'
        };
    }).catch(err => {
        ctx.body = {
            code: 500,
            message: err
        };
    })
});
router.post('/logintUser', async (ctx) => {
    //接收前端发送的数据
    let loginUser = ctx.request.body;
    let userName = loginUser.userName;
    let password = loginUser.password;
    //引入model
    const User = mongoose.model('User');
    //先查询用户名是否存在，存在再去比较密码
    await User.findOne({
        userName: userName
    }).exec().then(async (result) => { //查询用户名存在与否
        if (result) {
            let newUser = new User(); //实例化的方法，所以要new一个,才能去使用ta
            await newUser.comparePassword(password, result.password)
                .then(isMatch => {
                    if (isMatch) { //登录成功
                        ctx.body = {
                            code: 200,
                            message: '登录成功',
                            userInfo: result
                        };
                    } else { //登录失败
                        ctx.body = {
                            code: 201,
                            message: '登录失败'
                        };
                    }
                })

        } else {
            ctx.body = {
                code: 201,
                message: '用户名不存在'
            };
        };
    });

})

module.exports = router;