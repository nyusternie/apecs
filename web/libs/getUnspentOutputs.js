/* Set API endpoint. */
const API_ENDPOINT = 'https://insomnia.fountainhead.cash/v1'

/**
 * Get Unspent Outputs
 *
 * Returns an array of Unspent Transaction Outputs (UTXOs).
 *
 * @param {String} _address Address used to query for UTXOs.
 * @returns {Array} Returns a list of UTXOs.
 */
const getUnspentOutputs = async (_address) => {
    /* Set target. */
    const target = `${API_ENDPOINT}/address/utxos/${_address}`

    /* Make API request. */
    const response = await fetch(target, {
        /* Set (request) headers. */
        headers: {
            'Content-Type': 'application/json',
          }
    })
    .catch(err => {
        console.error(err)
        // TODO Handle error

        /* Set error. */
        // error = err
    })

    const body = await response.json()
    // console.log('getUnspentOutputs (body):', body)

    const utxos = body.utxos
    // console.log('getUnspentOutputs (utxos):', utxos)

    /* Return UTXOs. */
    return utxos
}

/* Export module. */
export default getUnspentOutputs
