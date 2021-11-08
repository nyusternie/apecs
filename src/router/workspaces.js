/* Initialize routes. */
const routes = [
    {
        path: '/editors',
        component: () => import(/* webpackChunkName: "editors" */ '@/views/Workspaces/Editors'),
    },
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

    /* Labs */
    {
        path: '/labs',
        component: () => import(/* webpackChunkName: "labs" */ '@/views/Workspaces/Labs'),
    },
    {
        path: '/labs/auth',
        component: () => import(/* webpackChunkName: "labs" */ '@/views/Workspaces/Labs/Auth'),
    },
    {
        path: '/labs/bitdb',
        component: () => import(/* webpackChunkName: "labs" */ '@/views/Workspaces/Labs/BitDB'),
    },
    {
        path: '/labs/cashfusion',
        component: () => import(/* webpackChunkName: "labs" */ '@/views/Workspaces/Labs/CashFusion'),
    },
    {
        path: '/labs/cashscript',
        component: () => import(/* webpackChunkName: "labs" */ '@/views/Workspaces/Labs/CashScript'),
    },
    {
        path: '/labs/cashshuffle',
        component: () => import(/* webpackChunkName: "labs" */ '@/views/Workspaces/Labs/CashShuffle'),
    },
    {
        path: '/labs/couchdb',
        component: () => import(/* webpackChunkName: "labs" */ '@/views/Workspaces/Labs/CouchDB'),
    },
    {
        path: '/labs/crypto',
        component: () => import(/* webpackChunkName: "labs" */ '@/views/Workspaces/Labs/Crypto'),
    },
    {
        path: '/labs/decode',
        component: () => import(/* webpackChunkName: "labs" */ '@/views/Workspaces/Labs/Decode'),
    },
    {
        path: '/labs/elasticsearch',
        component: () => import(/* webpackChunkName: "labs" */ '@/views/Workspaces/Labs/Elasticsearch'),
    },
    {
        path: '/labs/events',
        component: () => import(/* webpackChunkName: "labs" */ '@/views/Workspaces/Labs/Events'),
    },
    {
        path: '/labs/hardware',
        component: () => import(/* webpackChunkName: "labs" */ '@/views/Workspaces/Labs/Hardware'),
    },
    {
        path: '/labs/hashing',
        component: () => import(/* webpackChunkName: "labs" */ '@/views/Workspaces/Labs/Hashing'),
    },
    {
        path: '/labs/libp2p',
        component: () => import(/* webpackChunkName: "labs" */ '@/views/Workspaces/Labs/Libp2p'),
    },
    {
        path: '/labs/messaging',
        component: () => import(/* webpackChunkName: "labs" */ '@/views/Workspaces/Labs/Messaging'),
    },
    {
        path: '/labs/query',
        component: () => import(/* webpackChunkName: "labs" */ '@/views/Workspaces/Labs/Query'),
    },
    {
        path: '/labs/slpdb',
        component: () => import(/* webpackChunkName: "labs" */ '@/views/Workspaces/Labs/SLPDB'),
    },
    {
        path: '/labs/tx',
        component: () => import(/* webpackChunkName: "labs" */ '@/views/Workspaces/Labs/Transaction'),
    },
    {
        path: '/labs/u2f',
        component: () => import(/* webpackChunkName: "labs" */ '@/views/Workspaces/Labs/U2F'),
    },
    {
        path: '/labs/wallet',
        component: () => import(/* webpackChunkName: "labs" */ '@/views/Workspaces/Labs/Wallet'),
    },
]

/* Export routes. */
export default routes
