<template>
      <div class="attribute-container">
        <div class="row">
                <ejs-combobox :dataSource="options" :select='select' v-model="$data.data.CustomerID" :fields='fields'></ejs-combobox>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import { ComboBoxPlugin } from "@syncfusion/ej2-vue-dropdowns";
import { CheckBoxPlugin } from '@syncfusion/ej2-vue-buttons';

Vue.use(ComboBoxPlugin);
Vue.use(CheckBoxPlugin);

export default {
  data() {
    return {
        fields: { text: 'CustomerID', value: 'CustomerID' },
        options: [{ CustomerID: "VINET" }, { CustomerID: "TOMSP" }, { CustomerID: "HANAR" }, { CustomerID: "VICTE" }, { CustomerID: "SUPRD" }, { CustomerID: "CHOPS" }, { CustomerID: "RICSU" }, { CustomerID: "WELLI" }, { CustomerID: "HILAA" }, { CustomerID: "ERNSH" }, { CustomerID: "CENTC" }]
    };
  },
  methods: {
    select: function(args) {
       this.$eventHub.$emit("CustomerID", args.itemData.CustomerID);
    }
  }
};
</script>