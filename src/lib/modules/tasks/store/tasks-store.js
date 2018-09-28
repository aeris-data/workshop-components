export default {
  state: {
    refreshTaskList: false,
    lang: "fr"
  },

  mutations: {
    setRefreshTaskList(state, refreshTaskList) {
      state.refreshTaskList = refreshTaskList;
    },
    setLang(state, lang) {
      state.lang = lang;
    }
  },

  actions: {},

  getters: {
    getRefreshTaskList(state) {
      return state.refreshTaskList;
    },
    getLang(state, lang) {
      return state.lang;
    }
  }
};
