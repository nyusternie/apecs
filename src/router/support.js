/* Import views. */
import Babel from '@/views/Support/Babel'
import BUIDLing from '@/views/Support/BUIDLing'
import FAQ from '@/views/Support/FAQ'
import Guides from '@/views/Support/Guides'
import Slack from '@/views/Support/Slack'
import Tickets from '@/views/Support/Tickets'

/* Initialize routes. */
const routes = [
    {
        path: '/babel',
        component: Babel
    },
    {
        path: '/buidling',
        component: BUIDLing
    },
    {
        path: '/faq',
        component: FAQ
    },
    {
        path: '/guides',
        component: Guides
    },
    {
        path: '/slack',
        component: Slack
    },
    {
        path: '/tickets',
        component: Tickets
    },
]

/* Export routes. */
export default routes
