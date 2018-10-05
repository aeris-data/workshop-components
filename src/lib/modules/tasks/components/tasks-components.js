import TaskDisplayComponent from "./task-display-component.vue";
import TaskEditComponent from "./task-edit-component.vue";
import TaskListComponent from "./task-list-component.vue";
import HelperRegisterModule from "../../helper-register-module";

const tasksComponents = [
  {
    vueComponent: TaskDisplayComponent,
    isCustomElement: true
  },
  {
    vueComponent: TaskEditComponent,
    isCustomElement: true
  },
  {
    vueComponent: TaskListComponent,
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
