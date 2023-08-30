import { defineStore } from 'pinia'

/**
 * Counter Store
 */
export const useCounterStore = defineStore('counter', {
    state: () => ({
        count: 0,
        name: 'Satoshi'
    }),

    getters: {
        doubleCount: (state) => state.count * 2,
    },

    actions: {
        increment() {
            this.count++
        },
    },
})
