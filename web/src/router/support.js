/* Import views. */
import DApps from '@/views/Support/DApps'
import FAQ from '@/views/Support/FAQ'
import Matrix from '@/views/Support/Matrix'
import Slack from '@/views/Support/Slack'
import Tickets from '@/views/Support/Tickets'

/* Labs */
import Guides from '@/views/Support/Guides'
import GuidesDocker from '@/views/Support/Guides/Docker'
import GuidesKeyGeneration from '@/views/Support/Guides/KeyGeneration'
import GuidesNVM from '@/views/Support/Guides/NVM'
import GuidesVeraCrypt from '@/views/Support/Guides/VeraCrypt'
import GuidesVpsSecureSetup from '@/views/Support/Guides/VpsSecureSetup'
import GuidesYarn from '@/views/Support/Guides/Yarn'

/* Initialize routes. */
const routes = [
    {
        path: '/dapps',
        component: DApps
    },
    {
        path: '/faq',
        component: FAQ
    },
    {
        path: '/matrix',
        component: Matrix
    },
    {
        path: '/slack',
        component: Slack
    },
    {
        path: '/tickets',
        component: Tickets
    },

    /* Guides */
    {
        path: '/guides',
        component: Guides
    },
    {
        path: '/guides/docker',
        component: GuidesDocker
    },
    {
        path: '/guides/key-generation',
        component: GuidesKeyGeneration
    },
    {
        path: '/guides/nvm',
        component: GuidesNVM
    },
    {
        path: '/guides/veracrypt',
        component: GuidesVeraCrypt
    },
    {
        path: '/guides/vps-secure-setup',
        component: GuidesVpsSecureSetup
    },
    {
        path: '/guides/yarn',
        component: GuidesYarn
    },

]

/* Export routes. */
export default routes
