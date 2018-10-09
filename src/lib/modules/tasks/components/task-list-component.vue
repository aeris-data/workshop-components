<i18n>
    {
    "en":{
    "todolist":"Todo list",
    "add":"Add"
    },
    "fr":{
    "add":"Ajouter",
    "todolist":"Liste de tâches"
    }
    }
</i18n>
<template>
   <section aeris-task-component-host>
      <label v-if="getLang==='fr'" name="lang" type="button" title="En / Fr" @click="switchLang('en')">
         {{ getLang.toUpperCase() }}
      </label>
      <label v-else name="lang" type="button" title="En / Fr" @click="switchLang('fr')">
         {{ getLang.toUpperCase() }}
      </label>
      <h2>{{ $t('todolist') }}</h2>
      <button :title="$t('add')" name="add" type="button" @click="add">
         <i class="fa fa-plus"/>
      </button>
      <section :class="{active:showNewTask}" aeris-task-component-add>
         <task-edit-component v-show="showNewTask" @close="showNewTask=false"/>
      </section>
      <section aeris-task-component-list>
         <task-display-component v-for="task in tasks" :key="task.id" :task="JSON.stringify(task)"/>
      </section>
   </section>
</template>
<script>
export default {
  name: "task-list-component",

  watch: {
    isRefresh(value) {
      if (value) {
        this.refresh();
      }
    },
    getLang(lang) {
      this.$i18n.locale = lang;
    }
  },
  created: function() {
    this.$store.commit("setLang", "fr");
    // to catch in the console in order to debug
    console.log("task list component created");
    // call service for data
    this.refresh();
  },
  data() {
    return {
      tasks: [],
      showNewTask: false
    };
  },
  computed: {
    getLang() {
      return this.$store.getters.getLang;
    }
  },
  methods: {
    add() {
      this.showNewTask = !this.showNewTask;
    },
    refresh() {
      console.log("get tasks");
      this.showNewTask = false;
    },
    switchLang(lang) {
      this.$store.commit("setLang", lang);
    }
  }
};
</script>
<style scoped>
[aeris-task-component-host] {
  box-sizing: border-box;
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  position: relative;
  border: 1px solid #ccc;
}

[aeris-task-component-host] h2 {
  text-align: center;
}

[aeris-task-component-host] label {
  cursor: pointer;
}

[aeris-task-component-host] label:hover {
  color: #08a5fe;
}

[aeris-task-component-host] > button {
  width: 30px;
  height: 30px;
  position: absolute;
  top: 20px;
  right: 20px;
  border: none;
  outline: none;
  border-radius: 50%;
  background: #ccc;
  color: #444;
  cursor: pointer;
  text-align: center;
  line-height: 30px;
}

[aeris-task-component-host] > button:hover {
  background: #08a5fe;
  color: #fff;
}

[aeris-task-component-host] > section {
  width: 100%;
  margin-top: 10px;
}
</style>
