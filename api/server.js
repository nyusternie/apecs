'use strict'

/* Require modules. */
const express = require('express')

/* Set constants. */
const HOST = '127.0.0.1'
const PORT = process.env.PORT || 3000

/* Initialize application. */
const app = express()

/* Initialize JSON parser. */
app.use(express.json())

/* Initialize URL parser. */
app.use(express.urlencoded({ extended: true }))

/* Configure application. */
app.use(function (req, res, next) {
    /* Initialize headers. */
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'content-type') // superagent "case-sensitive" bug??
    // res.header('Access-Control-Allow-Headers', 'X-DevOps-Address, X-DevOps-Signature')

    /* Move to next process. */
    next()
})

// TODO: Replace with a "static" site.
app.get('/', (req, res) => {
    res.end('<h1>Welcome to the DevOps.cash API</h1>')
})

/*******************************************************************************
 * (CashID) AUTH Endpoint
 */
// app.post('/v1/cashid', require('./handlers/auth'))

/*******************************************************************************
 * PROJECTS Endpoint
 */
app.get('/v1/projects', require('./handlers/projects'))

/*******************************************************************************
 * Sessions Endpoint
 */
app.post('/v1/sessions', require('./handlers/sessions'))

/*******************************************************************************
 * Solidity Compiler
 */
app.post('/v1/solc', require('./handlers/solc'))

/* Start listening for connections. */
app.listen(PORT, HOST)

/* Display current environment variables. */
console.info()
console.log(`Running on http://${HOST}:${PORT}`)
console.info()
console.info('Current Environment Variables')
console.info('-----------------------------')
console.info('  - NODE_ENV        :', process.env.NODE_ENV)
console.info('  - API_ENDPOINT    :', process.env.API_ENDPOINT)
console.info('  - SLACK_BOT_TOKEN :', process.env.SLACK_BOT_TOKEN)
console.info()
