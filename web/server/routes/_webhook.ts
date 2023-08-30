/* Import modules. */
import moment from 'moment'

export default defineEventHandler(async (event) => {
    /* Initialize locals. */
    let body
    let query

    body = await readBody(event)
    console.log('BODY', body)

    query = getQuery(event)
    console.log('QUERY', query)

    return {
        body,
        query,
        timestamp: moment().unix(),
    }
})
