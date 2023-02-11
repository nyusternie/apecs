import { defineStore } from 'pinia'

/**
 * System Store
 */
export const useCounterStore = defineStore('system', {
    state: () => ({
        error: null,
        notification: null,

        /* Initialize API Endpoint (constant). */
        apiEndpoint: 'https://api.apecs.dev/v1',
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
            this.state.error = _error
        },

        /**
         * Set Notification
         */
        _setNotification (_notification) {
            /* Update notification message. */
            this.state.notification = _notification
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
    // persist: true,
})
