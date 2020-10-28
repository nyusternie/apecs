<template>
    <footer class="main-footer">
        <div class="row">
            <div class="col-6">
                &copy; {{curYear}} <a href="https://bchplease.org" target="_blank">Bitcoin Please</a>.
                All rights reserved.
            </div>

            <div class="col-6 text-right">
                Donate BCH <small><i class="fa fa-heart text-danger"></i></small>
                <a href="https://explorer.bitcoin.com/bch/address/bitcoincash:qrlsrw8qyrce75pp654rx9s8hftgywkxwv89uwafs3" target="_blank">
                    qrlsrw8qyrce75pp654rx9s8hftgywkxwv89uwafs3</a>
            </div>
        </div>
    </footer>
</template>

<script>
/* Import libraries. */
import moment from 'moment'

export default {
    computed: {
        curYear: function () {
            return moment().format('YYYY')
        },
    },
}
</script>

<style scoped>
/*  */
</style>
