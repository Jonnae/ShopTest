import Mock from 'mockjs'
// import data from './data.json'

// Mock.mock('http://www.123.com/getList',{data:data.list})

// Mock.mock('http://www.123.com/getUsers',{
//     'name|2':'zhang',
//     'age|10-20':0
// })

// Mock.mock('http://www.123.com/regexp',{
//     'regexp1':/[a-z][A-Z][0-9]/,
//     'regexp':/\d{2,5}/
// })
let Random = Mock.Random
let productData = () => {
    let productList = [] //存放商品信息数组
    for (let i = 0; i < 50; i++) {
        let product = {
            name: Random.ctitle(5, 50),
            img: Random.dataImage('125x125', '手机' + Random.integer(1, 50)),
            price: Random.integer(999, 7999),
            owner: Random.cname(),
        }
        productList.push(product)
    }
    return productList
}

Mock.mock('http://www.123.com/getVarietyItem', productData)