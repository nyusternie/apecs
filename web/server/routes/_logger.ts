/* Import modules. */
import moment from 'moment'

export default defineEventHandler(async (event) => {
    /* Initialize locals. */
    let body
    let method
    let query

    // console.log('EVENT', event)

    /* Set method. */
    method = event.node.req?.method
    // console.log('METHOD', method)

    if (method === 'GET') {
        query = getQuery(event)
        // console.log('QUERY', query)
    }

    if (method === 'POST') {
        body = await readBody(event)
        // console.log('BODY', body)
    }

    // TODO Record this event to the database.

    return {
        // event,
        body,
        query,
        timestamp: moment().unix(),
    }
})
