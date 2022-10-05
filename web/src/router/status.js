/* Import views. */
import Status from '@/views/Status'

import BitDB from '@/views/Status/BitDB'

/* Initialize routes. */
const routes = [
    {
        path: '/status',
        component: Status,
    },
    {
        path: '/status/bitdb',
        component: BitDB,
    },
]

/* Export routes. */
export default routes
