import Vue from "vue";

export default {
  state: {
    refreshTaskList: false,
    lang: "en"
  },

  mutations: {
    setRefreshTaskList(state, refreshTaskList) {
      state.refreshTaskList = refreshTaskList;
    },
    setLang(state, lang) {
      state.lang = lang;
    }
  },

  actions: {
    deleteTask({ commit, state }, id) {
      Vue.http
        .delete("https://services.aeris-data.fr/todolist/todo/delete/" + id)
        .then(
          response => {
            commit("setRefreshTaskList", true);
            console.log("success");
          },
          response => {
            let error = response.status;
            let message = response.statusText;
            if (!error) message = "Can't connect to the server";
            console.log("Error " + error + ": " + message);
          }
        );
    }
  },

  getters: {
    getRefreshTaskList(state) {
      return state.refreshTaskList;
    },
    getLang(state, lang) {
      return state.lang;
    }
  }
};
