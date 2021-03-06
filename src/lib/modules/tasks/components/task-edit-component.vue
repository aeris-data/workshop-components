<i18n>
   {
   "en":{
    "save":"Save",
    "cancel":"Cancel",
    "task_title":"Task title"
   },
   "fr":{
   "save":"Enregistrer",
   "cancel":"Annuler",
   "task_title":"Titre de la tâche"
   }
   }
</i18n>
<template>
   <div aeris-task-edit-component-host>
      <input v-validate="'required|max:10'" v-model="title" :class="{hasError:errors.has('inputTitle')}" :placeholder="$t('task_title')" name="inputTitle" type="text">
      <span>{{ errors.first('inputTitle') }}</span>
      <div>
         <button :title="$t('save')" name="save" type="button" @click="save">
            <i class="fa fa-save"/>
         </button>
         
         <button :title="$t('cancel')" name="cancel" type="button" @click="cancel">
            <i class="fa fa-times"/>
         </button>
      </div>
   </div>
</template>
<script>
export default {
  name: "task-edit-component",

  props: {
    editedTitle: {
      type: String,
      default: ""
    },
    editedId: {
      type: String,
      default: ""
    }
  },

  data() {
    return {
      title: ""
    };
  },

  watch: {
    editedTitle(value) {
      this.title = value;
    },
    getLang(lang) {
      this.$i18n.locale = lang;
    }
  },

  computed: {
    getLang() {
      return this.$store.getters.getLang;
    }
  },

  created: function() {
    // to catch in the console in order to debug
    console.log("task edit component created");
    this.title = this.editedTitle;
    // customize validation
    const dictionary = {
      en: {
        custom: {
          inputTitle: {
            max: "Title must not be longer than 10 characters",
            required: "Title is required"
          }
        }
      },
      fr: {
        custom: {
          inputTitle: {
            max: "La longueur du titre ne doit pas excéder 10 caractères",
            required: "Le titre est obligatoire"
          }
        }
      }
    };
    this.$validator.localize(
      this.$store.getters.getLang,
      dictionary[this.$store.getters.getLang]
    );
  },
  methods: {
    save() {
      this.$validator.validate().then(result => {
        if (!result) {
        } else {
          if (this.editedId) {
            this.$http
              .put(
                "https://services.aeris-data.fr/todolist/todo/edit/" +
                  this.editedId,
                {
                  title: this.title
                }
              )
              .then(
                response => {
                  this.handleSuccess(response);
                },
                response => {
                  this.handleError(response);
                }
              );
          } else {
            this.$http
              .post("https://services.aeris-data.fr/todolist/todo/save", {
                title: this.title
              })
              .then(
                response => {
                  this.handleSuccess(response);
                },
                response => {
                  this.handleError(response);
                }
              );
          }
        }
      });
    },
    handleSuccess: function(response) {
      this.$store.commit("setRefreshTaskList", true);

      this.title = "";
    },

    handleError: function(response) {
      let error = response.status;
      let message = response.statusText;
      if (!error) message = "Can't connect to the server";
      console.log("Error " + error + ": " + message);
    },
    cancel() {
      this.$store.commit("setRefreshTaskList", true);
      this.$emit("close", true);
    }
  }
};
</script>
<style scoped>
[aeris-task-edit-component-host] {
  box-sizing: border-box;
  margin: 0 auto;
  padding: 20px;
}

[aeris-task-edit-component-host] > div {
  margin: 0 auto;
  padding: 20px 20px 0;
  text-align: center;
}

[aeris-task-edit-component-host] button {
  border: none;
  outline: none;
  border-radius: 5px;
  padding: 10px;
  background: #ddd;
  color: #444;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;
}

[aeris-task-edit-component-host] button + button {
  margin-left: 10px;
}

[aeris-task-edit-component-host] button::-moz-focus-inner {
  border: 0;
}

[aeris-task-edit-component-host] button:hover {
  filter: brightness(80%);
  color: #08a5fe;
}

[aeris-task-edit-component-host] .hasError {
  border: 1px solid red;
}
</style>
