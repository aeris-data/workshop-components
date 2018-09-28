import Vue from "vue";
import VueCustomElement from "vue-custom-element";
import Vuex from "vuex";
import VueI18n from "vue-i18n";
import VueResource from "vue-resource";
import VeeValidate, { Validator } from "vee-validate";
import fr from "vee-validate/dist/locale/fr";
import TasksComponents from "./components/tasks-components.js";

import taskModule from "./store/tasks-store.js";

Vue.use(Vuex);
Vue.use(VueCustomElement);
Vue.use(VueI18n);
Vue.use(VueResource);
Vue.use(VeeValidate);
Validator.localize("fr", fr);

const store = new Vuex.Store({
  modules: {
    task: taskModule
  }
});

Vue.use(TasksComponents, {
  store: store
});
