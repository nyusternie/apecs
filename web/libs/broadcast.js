/**
 * Broadcast a (signed) transaction to the network.
 *
 * @param {*} transaction
 */
const broadcast = async (transaction) => {
    const target = 'https://insomnia.fountainhead.cash/v1/tx/broadcast'
    /* Call remote API. */
    const response = await fetch(target, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'text/plain'
        },
        body: transaction,
    })
    .catch(err => {
        console.error(err)
        // TODO Handle error

        /* Set error. */
        // error = err
    })

    const body = await response.json()
    console.log('broadcast (body):', body)
}

/* Export module. */
export default broadcast
