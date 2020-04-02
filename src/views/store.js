import Vue  from 'vue'
import Vuex  from 'vuex' 

Vue.use(Vuex)

export default new Vuex.Store({
    state:{//数据存储
        userInfo:{
            userName:'未登录'
        }

    },
    getters:{//类似计算属性

    },
    mutations:{//相当于函数,改变state的唯一途径,这里面不能处理异步的操作
        changLogin(state,status){
            state.userInfo = status;
        }
    },
    actions:{//可调用mutations的方法，进而改变state的值。里面可以异步操作
        loginAction({commit},user){
            commit('changLogin',user);
        }
    }
})