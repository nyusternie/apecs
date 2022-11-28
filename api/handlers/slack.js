/* Require modules. */
const superagent = require('superagent')

/* Set Slack bot token. */
const token = process.env.SLACK_BOT_TOKEN

/**
 * Slack Notification
 *
 * References:
 * - https://api.slack.com/interactive-messages
 */
const Slack = async function (_json) {
    // console.log('BOT POST RECEIVED', _msgBlock)

    /* Set url. */
    const url = 'https://slack.com/api/chat.postMessage'

    // NOTE: UQ5AXJW06 - Modenero & UQ3B5EP53 - Shomari
    const users = 'UQ5AXJW06,UQ3B5EP53'

    /* Set group channel. */
    const channel = 'GSCHHNRPF'

    /* Set text. */
    const text = ''

    const blocks = [{
        type: "section",
        text: {
            type: "mrkdwn",
            text: "```" + JSON.stringify(_json, null, 2) + "```"
        }
    }]

    /* Build a (message) block package. */
    const msgBlock = {
        channel,
        text,
        users,
        blocks
    }

    try {
        await superagent
            .post(url)
            .send(msgBlock)
            .set('accept', 'json')
            .set('Content-type', 'application/json;charset=utf-8')
            .set('Authorization', `Bearer ${token}`)
            .end((err, json) => {
                console.log('\nBOT POST RESPONSE', JSON.stringify(json.body, null, 4))

                /* Return the json body. */
                // res.json(json.body)
            })
    } catch (err) {
        console.error('BOT POST ERROR', err)

        /* Return the error. */
        // res.json({
        //     error: err
        // })
    }

}

/* Export handler. */
module.exports = Slack
