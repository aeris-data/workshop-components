<template>
   <task-display-vue-component :task="task"/>
</template>
<script>
export default {
  data() {
    return {
      task: {
        id: "1234",
        title: "test display en vue",
        date: "28/09/2018",
        done: false
      }
    };
  }
};
</script>
