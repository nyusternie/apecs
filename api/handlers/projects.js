const PouchDB = require('pouchdb')
// const moment = require('moment')
// const superagent = require('superagent')

/* Set Slack bot token. */
const dbAuth = process.env.DB_AUTH

/* Initialize database. */
const db = new PouchDB(`http://apecs:${dbAuth}@localhost:5984/projects`)

/**
 * Projects
 */
const projects = async function (req, res) {
    /* Set id. */
    // const baseCurrency = req.params.baseCurrency
    // const quoteCurrency = req.params.quoteCurrency
    // const symbol = req.query.symbol
    // console.log('BASE CURRENCY', baseCurrency)
    // console.log('QUOTE CURRENCY', quoteCurrency)

    /* Set (mango) query. */
    // const query = {
    //     selector: {
    //         'txid': _txid
    //     },
    //     sort: [{'index':'asc'}]
    // }

    /* Request data. */
    // const result = await this.dbTelrTxs.find(query)


    // const allProjects = [{
    //     title: 'APECS',
    //     version: 'v20.2.12'
    // }]

    /* Retrieve results. */
    const results = await db.allDocs({ include_docs: true })
        .catch(err => console.error('PROJECTS ERROR:', err))

    /*
    "projectid": "80602acd-2603-490b-af13-60018c1b710a",
            "stubs": [
                "causes",
                "causes-cash"
            ],
            "title": "Causes.cash",
            "contributors": [
                "9be643ef-5c73-441b-9bb8-1f88355a8aa5"
            ],
            "progress": 5,
            "status": 1,
            "links": {
                "homepage": "https://causes.cash"
            },
            "dateCreated": 1580576400000
    */

    const allProjects = results.rows.map(data => {
        /* Set project. */
        const project = data.doc

        /* Set project id. */
        const projectid = project.projectid

        /* Set stubs. */
        const stubs = project.stubs

        /* Set title. */
        const title = project.title

        /* Set contributors. */
        const contributors = project.contributors

        /* Set progress. */
        const progress = project.progress

        /* Set status. */
        const status = project.status

        /* Set links. */
        const links = project.links

        /* Set date created. */
        const dateCreated = project.dateCreated

        return {
            projectid,
            stubs,
            title,
            contributors,
            progress,
            status,
            links,
            dateCreated,
        }
    })

    console.log('ALL PROJECTS', allProjects)

    /* Return all projects. */
    res.json(allProjects)
}

module.exports = projects
