<template>
    <main class="h-full">
        <UnderConstruction />
    </main>
</template>

<script>
/* Import modules. */
import crypto from 'crypto'

export default {
    data: () => {
        return {
            //
        }
    },
    computed: {
        //
    },
    methods: {
        //
    },
    created: async function () {
        const algorithm = 'aes-256-cbc'
        const key = crypto.randomBytes(32)
        const iv = crypto.randomBytes(16)

        function encrypt (text) {
            const cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv)
            let encrypted = cipher.update(text)
            encrypted = Buffer.concat([encrypted, cipher.final()])
            return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') }
        }

        function decrypt(text) {
            const iv = Buffer.from(text.iv, 'hex')
            const encryptedText = Buffer.from(text.encryptedData, 'hex')
            const decipher = crypto.createDecipheriv(algorithm, Buffer.from(key), iv)
            let decrypted = decipher.update(encryptedText)
            decrypted = Buffer.concat([decrypted, decipher.final()])
            return decrypted
        }

        const plaintext = 'Some serious stuff'
        console.log('\nPLAINTEXT', plaintext)

        const json = {
            // key,
            // iv,
            plaintext
        }
        console.log('\nJSON', json)

        const data = JSON.stringify(json)
        console.log('\nDATA', data)

        const buf = Buffer.from(data, 'utf-8')
        console.log('\nBUFFER', buf.length, buf)

        const hw = encrypt(buf)
        console.log('\nENCRYPTED', hw.encryptedData.length, hw)

        const decrypted = decrypt(hw)

        console.log('\nDECRYPTED', decrypted)
        console.log('\nJSON PARSED', JSON.parse(decrypted))
    },
    mounted: function () {
        //
    },
}
</script>
