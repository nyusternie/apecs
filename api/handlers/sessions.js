const PouchDB = require('pouchdb')
// const uuidv4 = require('uuid/v4')
// const moment = require('moment')
// const superagent = require('superagent')

/* Add Mango queries to PouchDB. */
// PouchDB.plugin(require('pouchdb-find'))

/* Initialize database. */
const db = new PouchDB('http://api:password@localhost:5984/devops_sessions')

/**
 * Projects
 */
const projects = async function (req, res) {
    /* Set headers. */
    // const headers = req.headers
    // console.log('HEADERS', headers)

    /* Set body. */
    const body = req.body
    // console.log('BODY', body)

    /* Validate body. */
    if (!body) {
        /* Set status code. */
        res.status(400)

        return res.json({
            error: 'A request BODY is required with this request.'
        })
    }

    /* Initialize query. */
    let query = null

    /* Initialize result. */
    let result = null

    /* Validate session id. */
    // a9c8d400-88fa-404f-975a-2d23dfe0616b
    if (body.sessionId) {
        result = await db.get(body.sessionId)
            .catch(err => console.error('SESSION ID ERROR:', err))
    }

    /* Validate authentication hash. */
    // 0a4145ed9f2f63c0118f2ea2778e446c183abbdbe666e745df318c095049757c
    if (!body.sessionId && body.authHash) {
        /* Set (mango) query. */
        query = {
            selector: {
                'authHash': body.authHash
            },
            sort: [{'createdAt':'desc'}]
        }

        /* Request data. */
        result = await db.find(query)
            .catch(err => console.error('AUTH HASH ERROR:', err))

        /* Validate documents. */
        if (result && !result.docs) {
            result = null
        } else {
            /* Select most recent document. */
            result = result.docs[0]
        }
    }

    /* Validate query. */
    if (!result) {
        if (!body.sessionId && !body.authHash) {
            /* Set status code. */
            res.status(400)

            return res.json({
                error: '`sessionId` OR `authHash` is required for this request.',
            })
        }

        /* Set status code. */
        res.status(404)

        return res.json({
            error: 'No session was found',
            sessionId: body.sessionId,
            authHash: body.authHash,
        })
    }

    /* Return session data. */
    res.json({
        // headers,
        ...result,
    })
}

module.exports = projects
