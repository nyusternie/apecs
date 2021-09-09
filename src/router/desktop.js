/* Import views. */
import FileManager from '@/views/Desktop/FileManager'
import Newsfeed from '@/views/Desktop/Newsfeed'
import Notebook from '@/views/Desktop/Notebook'

/* Initialize routes. */
const routes = [
    {
        path: '/file-mgr',
        component: FileManager
    },
    {
        path: '/feed',
        component: Newsfeed
    },
    {
        path: '/notebook',
        component: Notebook
    },
]

/* Export routes. */
export default routes
