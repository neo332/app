import Vue from 'vue';
import Vuex from 'vuex';

// 引入模块
import user from "@/store/modules/user";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        user
    }
});
