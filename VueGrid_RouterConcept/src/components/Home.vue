// Home.vue

<template>
    <ejs-grid ref='grid' id='Grid' :dataSource="data" :allowPaging="true">
        <e-columns>
            <e-column field='OrderID' headerText='Order ID' width=90></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
            <e-column field='Freight' headerText='Freight' format='C2' width=90></e-column>
        </e-columns>
    </ejs-grid>
</template>

<script>
import Vue from 'vue';
import { GridPlugin, Page } from '@syncfusion/ej2-vue-grids';
import { data } from '../datasource.js';

Vue.use(GridPlugin);

export default {
    data () {
        return {
            data: data
        }
    },
     beforeRouteLeave (to, from, next) {
         this.$refs.grid.ej2Instances.destroy = function(args){
             alert("Destroy method invoked")
         }
         next();
     },
    methods: {
        
    },
    provide: {
        grid: [Page]
    }
}
</script>