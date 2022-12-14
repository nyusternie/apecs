const getUnspentOutputs = async (cashAddress) => {
    const url = `https://insomnia.fountainhead.cash/v1/address/utxos/${cashAddress}`
    const response = await fetch(url, {
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

    return utxos
}

/* Export module. */
export default getUnspentOutputs
