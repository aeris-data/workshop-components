<template>   
   <section aeris-task-component-host>
      <h2>Todo list</h2>
      <button name="add" type="button" @click="add">
         <i class="fa fa-plus"/>
      </button>
      <section :class="{active:showNewTask}" aeris-task-component-add>
         <task-edit-component v-show="showNewTask" />       
      </section>
      <section aeris-task-component-list>
         <task-display-vue-component v-for="task in tasks" :key="task.id" :task="task"/>
      </section>
   </section>
</template>
<script>
export default {
  name: "task-list-vue-component",

  watch: {
    isRefresh(value) {
      if (value) {
        this.refresh();
      }
    }
  },
  created: function() {
    // to catch in the console in order to debug
    console.log("task list vue component created");
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
    isRefresh() {
      return this.$store.getters.getRefreshTaskList;
    }
  },
  methods: {
    handleSuccess: function(response) {
      this.tasks = response.data;
    },

    handleError: function(response) {
      let error = response.status;
      let message = response.statusText;
      if (!error) message = "Can't connect to the server";
      console.log("Error " + error + ": " + message);
    },
    add() {
      this.showNewTask = !this.showNewTask;
      console.log(this.showNewTask);
    },
    refresh() {
      this.$http
        .get("http://localhost:8080/todo/all", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          }
        })
        .then(
          response => {
            this.handleSuccess(response);
          },
          response => {
            this.handleError(response);
          }
        );
      this.showNewTask = false;
      this.$store.commit("setRefreshTaskList", false);
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
  background: #307090;
  color: #fff;
}

[aeris-task-component-host] > section {
  width: 100%;
  margin-top: 10px;
}
</style>
