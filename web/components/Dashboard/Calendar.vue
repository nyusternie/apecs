<template>
    <div class="card bg-gradient-success">
        <div class="card-header border-0">
            <h3 class="card-title">
                <i class="far fa-calendar-alt mr-1"></i>
                Event Calendar
            </h3>

            <div class="card-tools">
                <div class="btn-group">
                    <button type="button" class="btn btn-success btn-sm dropdown-toggle" data-toggle="dropdown">
                        <i class="fas fa-bars"></i>
                    </button>

                    <div class="dropdown-menu float-right" role="menu">
                        <a href="javascript://" class="dropdown-item">Add new event</a>
                        <a href="javascript://" class="dropdown-item">Clear events</a>

                        <div class="dropdown-divider"></div>

                        <a href="javascript://" class="dropdown-item">View calendar</a>
                    </div>
                </div>

                <button type="button" class="btn btn-success btn-sm" data-card-widget="collapse">
                    <i class="fas fa-minus"></i>
                </button>

                <button type="button" class="btn btn-success btn-sm" data-card-widget="remove">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        </div>

        <div class="card-body pt-0">
            <div id="calendar" style="width: 100%"></div>
        </div>
    </div>
</template>

<script>
export default {
    mounted: function () {
        /* Set JQuery. */
        // const $ = window.$

        /* Inline calendar. */
        // $('#calendar').datetimepicker({
        //     format: 'L',
        //     inline: true
        // })

    },
}
</script>
