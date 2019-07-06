import Vue from "vue";
import { GridPlugin, Edit, Page, Toolbar } from "@syncfusion/ej2-vue-grids";
import { DataManager, UrlAdaptor } from "@syncfusion/ej2-vue-grids/node_modules/@syncfusion/ej2-data";

Vue.use(GridPlugin);

export default Vue.extend({
    data: () => {
        return {
            pageSettings: { pageSize: 12 },
            toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
            editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
            data: new DataManager({
                url: "Home/UrlDatasource",
                updateUrl: "Home/Update",
                insertUrl: "Home/Insert",
                removeUrl: "Home/Delete",
                adaptor: new UrlAdaptor()
            }),
        };
    },
    methods: {
    },
    provide: {
        grid: [Edit, Page, Toolbar ]
    }
});