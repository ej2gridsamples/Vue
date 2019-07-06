import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.config.productionTip = false


import '@syncfusion/ej2-base/styles/fabric.css';
import '@syncfusion/ej2-buttons/styles/fabric.css';
import '@syncfusion/ej2-calendars/styles/fabric.css';
import '@syncfusion/ej2-dropdowns/styles/fabric.css';
import '@syncfusion/ej2-inputs/styles/fabric.css';
import '@syncfusion/ej2-navigations/styles/fabric.css';
import '@syncfusion/ej2-popups/styles/fabric.css';
import '@syncfusion/ej2-splitbuttons/styles/fabric.css';
import "@syncfusion/ej2-grids/styles/fabric.css";


Vue.use(VueRouter)

const router = new VueRouter({routes});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
