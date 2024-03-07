import {defineStore} from "pinia"
import {parse, stringify} from "JSON";

export const useUserStore = defineStore('user', {
    // 推荐使用 完整类型推断的箭头函数
    state: () => ({

    }),
    // 状态的计算值computed, 无法向它们传递任何参数; 但是，可以从 getter 返回一个函数以接受任何参数
    getters: {},
    // 相当于组件的methods
    actions: {},
    // 开启此store的持久化存储
    persist: {
        enabled: true,
        storage: sessionStorage,
        // 实现序列化
        serializer: {
            deserialize: parse,
            serialize: stringify
        }
    }
})