/* Import views. */
import CodeEditor from '@/views/Workspaces/CodeEditor'
import GraphicsStudio from '@/views/Workspaces/GraphicsStudio'

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
import LabsMessaging from '@/views/Workspaces/Labs/Messaging'
import LabsTransaction from '@/views/Workspaces/Labs/Transaction'
import LabsWallet from '@/views/Workspaces/Labs/Wallet'

/* Initialize routes. */
const routes = [
    {
        path: '/code-editor',
        component: CodeEditor
    },
    {
        path: '/graphics-studio',
        component: GraphicsStudio
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
        path: '/labs/hash',
        component: LabsHashing
    },
    {
        path: '/labs/msg',
        component: LabsMessaging
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
