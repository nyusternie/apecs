/* Import modules. */
import { listUnspent } from '@nexajs/address'
import { sha256 } from '@nexajs/crypto'
import { encodePrivateKeyWif } from '@nexajs/hdnode'
import {
    getCoins,
    sendCoin,
} from '@nexajs/purse'
import { Wallet } from '@nexajs/wallet'
import { v4 as uuidv4 } from 'uuid'

const DUST_LIMIT = 546

/**
 * Ascii To Hex
 *
 * Convert from ascii to HEX.
 *
 * NOTE: Allow for (~) to be used as 0x1F.
 */
const asciiToHex = (_str) => {
    /* Initialize (hex) array. */
    const arr = []

    for (var i = 0, l = _str.length; i < l; i ++) {
        /* Convert character to hex. */
        let hex = Number(_str.charCodeAt(i)).toString(16)

        /* Allow tilde (~) to be used as 0x1F unit separator. */
        if (_str[i] === '~') {
            hex = '09'
        }

        /* Add hex (value) to array. */
        // FIXME A note on this implementation: you must manually insert a "0" when the hex value is between 0x0 and 0x9. For this, I change your arr.push(hex) to arr.push(hex.length > 1 && hex || "0" + hex);
        arr.push(hex)
    }

    /* Return (hex) array. */
    return arr.join('')
}

const getAddress = async () => {
    const mnemonic = import.meta.env.VITE_MNEMONIC
    console.log('MNEMONIC (Dash wallet):', mnemonic)

    const wallet = new Wallet(mnemonic)
    console.log('WALLET', wallet)

    const address = wallet.address
    console.log('ADDRESS', address)

    return address
}

const send = async (_receiver, _amount) => {
    const mnemonic = import.meta.env.VITE_MNEMONIC

    const wallet = new Wallet(mnemonic)

    console.log('ADDRESS', wallet.address)

    /* Encode Private Key WIF. */
    const wif = encodePrivateKeyWif({ hash: sha256 }, wallet.privateKey, 'mainnet')
    console.log('PRIVATE KEY (WIF):', wif)

    /* Build parameters. */
    const coins = await getCoins(wif)
        .catch(err => console.error(err))
    console.log('COINS', coins)

    /* Calculate the total balance of the unspent outputs. */
    const unspentSatoshis = coins
        .reduce(
            (totalValue, unspentOutput) => (totalValue + unspentOutput.satoshis), 0
        )
    console.log('UNSPENT SATOSHIS', unspentSatoshis)

    const satoshis = parseInt(_amount * 100)

    const receivers = [{
        data: asciiToHex(`NEXA.exchange~${uuidv4()}`),
    }, {
        address: _receiver,
        satoshis,
    }]

    // FIXME: FOR DEV PURPOSES ONLY
    receivers.push({
        address: wallet.address,
    })
    console.log('RECEIVERS', receivers)

    /* Set automatic fee (handling) flag. */
    const feeRate = 2.0

    /* Send UTXO request. */
    const response = await sendCoin(coins, receivers, feeRate)
    console.log('Send UTXO (response):', response)

    try {
        const txResult = JSON.parse(response)
        console.log('TX RESULT', txResult)

        if (txResult.result) {
            return txResult.result
        }

        if (txResult.error) {
            return txResult.message
        }
    } catch (err) {
        console.error(err)

        return err
    }

    return null
}

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    // console.log('REQUEST BODY', body)

    const action = body.action
    const receiver = body.receiver
    const amount = body.amount

    if (action === 'ADDRESS') {
        return await getAddress()
    }

    if (action === 'SEND') {
        return await send(receiver, amount)
    }

    return 'Oops! You MUST provide an ACTION.'
})
