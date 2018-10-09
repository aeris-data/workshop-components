<i18n>
   {
   "en":{
    "save":"Save",
    "cancel":"Cancel",
    "title":"Task title"
   },
   "fr":{
   "save":"Enregistrer",
   "cancel":"Annuler",
   "title":"Titre de la tâche"
   }
   }
</i18n>
<template>
   <div aeris-task-edit-component-host>
      <input v-validate="'required|max:10'" v-model="title" :class="{hasError:errors.has('inputTitle')}" :placeholder="$t('title')" name="inputTitle" type="text">
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
    this.$i18n.locale = "en";
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
      console.log("save edited task");
    },
    cancel() {
      console.log("cancel task edit");
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
