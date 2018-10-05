import TaskEditComponent from "./task-edit-component.vue";
import HelperRegisterModule from "../../helper-register-module";

const tasksComponents = [
  {
    vueComponent: TaskEditComponent,
    isCustomElement: true
  }
];

export default {
  install: (Vue, options) => {
    Vue.use(tasksComponents, {
      store: options.store
    });
    HelperRegisterModule.registerStore(options.store, tasksComponents);
    HelperRegisterModule.registerVueComponents(Vue, tasksComponents);
    HelperRegisterModule.registerCustomElements(Vue, tasksComponents);
  }
};
