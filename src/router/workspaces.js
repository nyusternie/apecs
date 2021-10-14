/* Import views. */
import Editors from '@/views/Workspaces/Editors'
import Studios from '@/views/Workspaces/Studios'

/* Labs */
import Labs from '@/views/Workspaces/Labs'
import LabsAuth from '@/views/Workspaces/Labs/Auth'
import LabsCashFusion from '@/views/Workspaces/Labs/CashFusion'
import LabsCashScript from '@/views/Workspaces/Labs/CashScript'
import LabsCashShuffle from '@/views/Workspaces/Labs/CashShuffle'
import LabsCrypto from '@/views/Workspaces/Labs/Crypto'
import LabsEvents from '@/views/Workspaces/Labs/Events'
import LabsDecode from '@/views/Workspaces/Labs/Decode'
import LabsHardware from '@/views/Workspaces/Labs/Hardware'
import LabsHashing from '@/views/Workspaces/Labs/Hashing'
import LabsLibp2p from '@/views/Workspaces/Labs/Libp2p'
import LabsMessaging from '@/views/Workspaces/Labs/Messaging'
import LabsQuery from '@/views/Workspaces/Labs/Query'
import LabsTransaction from '@/views/Workspaces/Labs/Transaction'
import LabsWallet from '@/views/Workspaces/Labs/Wallet'

/* SmartBCH */
import SmartBCH from '@/views/Workspaces/SmartBCH'

/* Initialize routes. */
const routes = [
    {
        path: '/editors',
        component: Editors
    },
    {
        path: '/smartbch',
        component: SmartBCH
    },
    {
        path: '/studios',
        component: Studios
    },

    /* Labs */
    {
        path: '/labs',
        component: Labs
    },
    {
        path: '/labs/auth',
        component: LabsAuth
    },
    {
        path: '/labs/bitdb',
        component: () => import(/* webpackChunkName: "labs" */ '@/views/Workspaces/Labs/BitDB'),
    },
    {
        path: '/labs/cashfusion',
        component: LabsCashFusion
    },
    {
        path: '/labs/cashscript',
        component: LabsCashScript
    },
    {
        path: '/labs/cashshuffle',
        component: LabsCashShuffle
    },
    {
        path: '/labs/crypto',
        component: LabsCrypto
    },
    {
        path: '/labs/decode',
        component: LabsDecode
    },
    {
        path: '/labs/events',
        component: LabsEvents
    },
    {
        path: '/labs/hardware',
        component: LabsHardware
    },
    {
        path: '/labs/hashing',
        component: LabsHashing
    },
    {
        path: '/labs/libp2p',
        component: LabsLibp2p
    },
    {
        path: '/labs/messaging',
        component: LabsMessaging
    },
    {
        path: '/labs/query',
        component: LabsQuery
    },
    {
        path: '/labs/tx',
        component: LabsTransaction
    },
    {
        path: '/labs/wallet',
        component: LabsWallet
    },
]

/* Export routes. */
export default routes
