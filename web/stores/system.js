import { defineStore } from 'pinia'

/**
 * System Store
 */
export const useSystemStore = defineStore('system', {
    state: () => ({
        /* Error messages holder. */
        errors: [],

        /* Notification messages holder. */
        notifications: [],

        /* Initialize API Endpoint (constant). */
        apiEndpoint: 'https://api.apecs.dev/v1',

        /* Initialize price quotes. */
        quotes: {},

        // TBD
    }),

    getters: {
        //
    },

    actions: {
        /**
         * Set Error Message
         */
        _setError (_error) {
            /* Update error message. */
            this.state.errors.push(_error)
        },

        /**
         * Set Notification
         */
        _setNotification (_notifications) {
            /* Update notification message. */
            this.state.notifications.push(_notification)
        },

        setError (_error) {
            /* Commit error message. */
            _setError(_error)

            /* Set automatic dismiss delay. */
            setTimeout(() => {
                _setError(null)
            }, 3000)
        },

        setNotification (_notification) {
            /* Commit notification message. */
            _setNotification(notification)

            /* Set automatic dismiss delay. */
            setTimeout(() => {
                _setNotification(null)
            }, 3000)
        },
    },
})
