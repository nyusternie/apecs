import { defineStore } from 'pinia'

/**
 * Profile Store
 */
export const useProfileStore = defineStore('profile', {
    state: () => ({
        /* Initialize session id. */
        sessionid: null,

        /* Initialize session. */
        session: null,

        /* Initialize (lazy dev) mnemonic phrase. */
        // FIXME: FOR LAZY DEVELOPMENT PURPOSES ONLY
        mnemonic: 'bacon mind chronic bean luxury endless ostrich festival bicycle dragon worth balcony',

        /* Initialize cash accounts. */
        cashAccounts: [],

        /* Initialize (Bitcoin Cash) test address. */
        // NOTE: HöS on EC
        bchTestAddress: 'bitcoincash:qqwsfram5cc87k2n26gshjnylg8gdjnauuum5sws3c',

        // TBD
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
    persist: true,
})
