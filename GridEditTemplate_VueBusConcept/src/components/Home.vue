// Home.vue

<template>
<ejs-grid ref='grid' id='Grid' :actionBegin='actionBegin' :editSettings='editSettings' :toolbar='toolbar' :dataSource="localData" :allowPaging="true">
    <e-columns>
        <e-column field='OrderID' headerText='Order ID' :isPrimaryKey="true" width=90 ></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=120 :editTemplate='editTemplate'></e-column>
        <e-column field='Freight' headerText='Freight' format='C2' width=90></e-column>
    </e-columns>
</ejs-grid>
</template>

<script>
import Vue from 'vue';

import vueColumnTemplate from "./columntemplate.vue"
import { GridPlugin, Page, Edit, Toolbar } from '@syncfusion/ej2-vue-grids';
import { data } from '../datasource.js';

Vue.use(GridPlugin);
Vue.prototype.$eventHub = new Vue();

export default {
    provide: {
        grid: [ Page, Edit, Toolbar ]
    },
    data() {
        return {
            localData: data,
            editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
            toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
            customerID: ""
        }
    },
    methods: {
        editTemplate: function() {
            return {
                template: vueColumnTemplate,
            };
        },
        actionBegin: function(args) {
            if(args.requestType == "beginEdit") {
                this.$eventHub.$on('CustomerID', this.getTemplateValue);
            };
            if(args.requestType == "save") {
                if(this.customerID != "")
                    args.data.CustomerID = this.customerID;
            }
        },
        getTemplateValue: function(e) {
            this.customerID = e;
        }
    }
}
</script>
