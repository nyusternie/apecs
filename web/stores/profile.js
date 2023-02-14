import { defineStore } from 'pinia'

/**
 * Profile Store
 */
export const useProfileStore = defineStore('profile', {
    state: () => ({
        /* Initialize session id. */
        sessionId: null,

        /* Initialize session. */
        session: null,

        /* Initialize cash accounts. */
        cashAccounts: null,
    }),

    getters: {
        //
    },

    actions: {
        /**
         * Set Cash Accounts
         *
         * @param {Object} _cashAccounts An array of accounts.
         */
        _setCashAccounts (_cashAccounts) {
            this.state.cashAccounts = _cashAccounts
        },

        /**
         * Set Session
         *
         * @param {String} _session A session id.
         */
        _setSession (_session) {
            /* Set session. */
            this.state.session = _session

            /* Validate session. */
            if (_session) {
                /* Set session id. */
                this.state.sessionId = _session._id
            } else {
                /* Set session id. */
                this.state.sessionId = null
            }
        },

        deleteSession() {
            /* Set session. */
            _setSession(null)

            /* Set cash accounts. */
            _setCashAccounts(null)
        },

        initSession (_session) {
            /* Set session. */
            _setSession(session)
        },

        updateCashAccounts (_cashAccounts) {
            /* Set cash accounts. */
            _setCashAccounts(_cashAccounts)
        },
    },
    // persist: true,
})
