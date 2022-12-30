/* Import modules. */
import {
    binToHex,
    instantiateSecp256k1,
    instantiateSha256,
} from '@bitauth/libauth'

import createSigningSerialization from './createSigningSerialization'

/**
 * Sign a single transaction input using a private key.
 *
 * @function
 *
 * @param transaction        {Transaction} The transaction to use.
 * @param satoshis           {number}      The input's satoshi value.
 * @param inputIndex         {number}      Input index to sign.
 * @param coveredBytecodeBin {Uint8Array}  The input's locking script.
 * @param hashtype           {number}      Hash type to use for signing serialization.
 * @param privateKeyBin      {Uint8Array}  Private Key in binary format.
 *
 * @returns {Uint8Array}	The signed transaction input.
 */
const signTransactionInput = async (
    transaction,
    satoshis,
    inputIndex,
    coveredBytecodeBin,
    hashtype,
    privateKeyBin,
) => {
    // Generate the signing serialization for this transaction input.
    const signingSerialization = await createSigningSerialization(
        transaction,
        satoshis,
        inputIndex,
        coveredBytecodeBin,
        hashtype
    )
    console.log('COVERED BYTECODE BIN', coveredBytecodeBin)
    console.log('HASH TYPE', hashtype)
    console.log('SIGNING SERIALIZATION', binToHex(signingSerialization))

    // Generate the "sighash" by taking the double SHA256 of the signing serialization.
    const sha256 = await instantiateSha256()

    const sighash = sha256.hash(sha256.hash(signingSerialization))
    console.log('SIGNATURE HASH', binToHex(sighash))

    // Instantiate the Secp256k1 interface.
    const secp256k1 = await instantiateSecp256k1()

    // Generate a signature over the "sighash" using the passed private key.
    const signatureBin = secp256k1.signMessageHashSchnorr(privateKeyBin, sighash)
    console.log('PRIVATE KEY', binToHex(privateKeyBin))
    console.log('SCHNORR SIGNATURE', binToHex(signatureBin))

    // Append the hashtype to the signature to turn it into a valid transaction signature.
    const transactionSignature = Uint8Array.from([ ...signatureBin, hashtype ])
    console.log('TRANSACTION SIGNATURE', binToHex(transactionSignature))

    return transactionSignature
}

/* Export module. */
export default signTransactionInput
