export default {
  state: {
    lang: "en",
    refreshTaskList: false
  },

  mutations: {
    setLang(state, lang) {
      state.lang = lang;
    },
    setRefreshTaskList(state, refreshTaskList) {
      state.refreshTaskList = refreshTaskList;
    }
  },

  actions: {},

  getters: {
    getLang(state, lang) {
      return state.lang;
    },
    getRefreshTaskList(state) {
      return state.refreshTaskList;
    }
  }
};
