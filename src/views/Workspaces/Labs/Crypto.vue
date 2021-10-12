<template>
    <main>
        <!-- Header -->
        <Header pageId="labs" />

        <!-- Page Section -->
        <section class="content">
            <div class="container-fluid">

                <div class="row">
                    <div class="col-md-6">
                        <Navbar />

                        <div class="card">
                            <div class="card-body">

                                TODO...

                            </div>
                        </div>
                    </div>

                    <div class="col-md-6">

                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">
                                    <i class="fas fa-info-circle mr-1"></i>
                                    Cryptography Guide
                                </h3>
                            </div>

                            <div class="card-body">
                                <dl class="row">
                                    <dt class="col-sm-4">Description lists</dt>
                                    <dd class="col-sm-8">A description list is perfect for defining terms.</dd>
                                    <dt class="col-sm-4">Euismod</dt>
                                    <dd class="col-sm-8">Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
                                    <dd class="col-sm-8 offset-sm-4">Donec id elit non mi porta gravida at eget metus.</dd>
                                    <dt class="col-sm-4">Malesuada porta</dt>
                                    <dd class="col-sm-8">Etiam porta sem malesuada magna mollis euismod.</dd>
                                    <dt class="col-sm-4">Felis euismod semper eget lacinia</dt>
                                    <dd class="col-sm-8">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo
                                        sit amet risus.
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </main>
</template>

<script>
/* Import components. */
import Header from '@/components/Header'
import Navbar from './Navbar'

export default {
    components: {
        Header,
        Navbar,
    },
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
        // Nodejs encryption with CTR
        const crypto = require('crypto')

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

<style scoped>
/*  */
</style>
