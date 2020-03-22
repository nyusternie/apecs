<template>
    <footer class="main-footer">
        &copy; {{curYear}} <a href="https://bchplease.org" target="_blank">Bitcoin Cash Please</a>.
        All rights reserved.
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
