const MOCKURL = 'http://www.123.com/'; //mock接口
const SERVEURL = 'http://localhost:3000/' //真实的接口地址

const URL = {
    getVarietyItem: MOCKURL + 'getVarietyItem',
    registUser: SERVEURL + 'user/registUser', //user对应后端控制器controller,registUser对应user下面的一个方法
    logintUser: SERVEURL + 'user/logintUser',
    getTypes: SERVEURL + 'type/getTypes',
    getProductListByType: SERVEURL + 'product/getProductListByType',
    getDetail: SERVEURL + 'product/getDetail',
    addCart: SERVEURL + 'cart/addCart',
    getCart: SERVEURL + 'cart/getCart',
    delCart: SERVEURL + 'cart/delCart',
};

export default URL;