/* Initialize routes. */
const routes = [
    /* Audit */
    {
        path: '/audits',
        component: () => import(/* webpackChunkName: "audits" */ '@/views/Workspaces/Audits'),
    },
    {
        path: '/audit-pricing',
        component: () => import(/* webpackChunkName: "audits" */ '@/views/Workspaces/Audits/Pricing'),
    },
    {
        path: '/audit/:id',
        component: () => import(/* webpackChunkName: "audits" */ '@/views/Workspaces/Audits/Detail'),
    },

    /* Editors */
    {
        path: '/editors',
        component: () => import(/* webpackChunkName: "editors" */ '@/views/Workspaces/Editors'),
    },

    /* SmartBCH */
    {
        path: '/smartbch',
        component: () => import(/* webpackChunkName: "smartbch" */ '@/views/Workspaces/SmartBCH'),
    },
    {
        path: '/sbch/address/:address',
        component: () => import(/* webpackChunkName: "smartbch" */ '@/views/Workspaces/SmartBCH/Address'),
    },
    {
        path: '/tsbch/address/:address',
        component: () => import(/* webpackChunkName: "smartbch" */ '@/views/Workspaces/SmartBCH/Address'),
    },
    {
        path: '/sbch/transaction/:txid',
        component: () => import(/* webpackChunkName: "smartbch" */ '@/views/Workspaces/SmartBCH/Transaction'),
    },
    {
        path: '/sbch/tx/:txid',
        component: () => import(/* webpackChunkName: "smartbch" */ '@/views/Workspaces/SmartBCH/Transaction'),
    },
    {
        path: '/tsbch/transaction/:txid',
        component: () => import(/* webpackChunkName: "smartbch" */ '@/views/Workspaces/SmartBCH/Transaction'),
    },
    {
        path: '/tsbch/tx/:txid',
        component: () => import(/* webpackChunkName: "smartbch" */ '@/views/Workspaces/SmartBCH/Transaction'),
    },
    {
        path: '/smartbch/contracts',
        component: () => import(/* webpackChunkName: "smartbch" */ '@/views/Workspaces/SmartBCH/Contracts'),
    },
    {
        path: '/studios',
        component: () => import(/* webpackChunkName: "studios" */ '@/views/Workspaces/Studios'),
    },

    /* Sandbox */
    {
        path: '/sandbox',
        component: () => import(/* webpackChunkName: "labs" */ '@/views/Workspaces/Sandbox'),
    },
    {
        path: '/sandbox/auth',
        component: () => import(/* webpackChunkName: "labs" */ '@/views/Workspaces/Sandbox/Auth'),
    },
    {
        path: '/sandbox/bitdb',
        component: () => import(/* webpackChunkName: "labs" */ '@/views/Workspaces/Sandbox/BitDB'),
    },
    {
        path: '/sandbox/cashfusion',
        component: () => import(/* webpackChunkName: "labs" */ '@/views/Workspaces/Sandbox/CashFusion'),
    },
    {
        path: '/sandbox/cashscript',
        component: () => import(/* webpackChunkName: "labs" */ '@/views/Workspaces/Sandbox/CashScript'),
    },
    {
        path: '/sandbox/cashshuffle',
        component: () => import(/* webpackChunkName: "labs" */ '@/views/Workspaces/Sandbox/CashShuffle'),
    },
    {
        path: '/sandbox/couchdb',
        component: () => import(/* webpackChunkName: "labs" */ '@/views/Workspaces/Sandbox/CouchDB'),
    },
    {
        path: '/sandbox/crypto',
        component: () => import(/* webpackChunkName: "labs" */ '@/views/Workspaces/Sandbox/Crypto'),
    },
    {
        path: '/sandbox/decode',
        component: () => import(/* webpackChunkName: "labs" */ '@/views/Workspaces/Sandbox/Decode'),
    },
    {
        path: '/sandbox/elasticsearch',
        component: () => import(/* webpackChunkName: "labs" */ '@/views/Workspaces/Sandbox/Elasticsearch'),
    },
    {
        path: '/sandbox/events',
        component: () => import(/* webpackChunkName: "labs" */ '@/views/Workspaces/Sandbox/Events'),
    },
    {
        path: '/sandbox/hardware',
        component: () => import(/* webpackChunkName: "labs" */ '@/views/Workspaces/Sandbox/Hardware'),
    },
    {
        path: '/sandbox/hashing',
        component: () => import(/* webpackChunkName: "labs" */ '@/views/Workspaces/Sandbox/Hashing'),
    },
    {
        path: '/sandbox/libp2p',
        component: () => import(/* webpackChunkName: "labs" */ '@/views/Workspaces/Sandbox/Libp2p'),
    },
    {
        path: '/sandbox/messaging',
        component: () => import(/* webpackChunkName: "labs" */ '@/views/Workspaces/Sandbox/Messaging'),
    },
    {
        path: '/sandbox/query',
        component: () => import(/* webpackChunkName: "labs" */ '@/views/Workspaces/Sandbox/Query'),
    },
    {
        path: '/sandbox/slpdb',
        component: () => import(/* webpackChunkName: "labs" */ '@/views/Workspaces/Sandbox/SLPDB'),
    },
    {
        path: '/sandbox/tx',
        component: () => import(/* webpackChunkName: "labs" */ '@/views/Workspaces/Sandbox/Transaction'),
    },
    {
        path: '/sandbox/u2f',
        component: () => import(/* webpackChunkName: "labs" */ '@/views/Workspaces/Sandbox/U2F'),
    },
    {
        path: '/sandbox/wallet',
        component: () => import(/* webpackChunkName: "labs" */ '@/views/Workspaces/Sandbox/Wallet'),
    },
]

/* Export routes. */
export default routes
