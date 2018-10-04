export default {
  state: {
    lang: "en"
  },

  mutations: {
    setLang(state, lang) {
      state.lang = lang;
    }
  },

  actions: {},

  getters: {
    getLang(state, lang) {
      return state.lang;
    }
  }
};
