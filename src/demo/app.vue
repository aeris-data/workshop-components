<template>
   <div id="app">
      <ul>
         <li>
            <router-link to="/task-path">test tache todo</router-link>
         </li>
         <li>
            <router-link to="/task-edit-path">test édition tache todo</router-link>
         </li>
         <li>
            <router-link to="/tasklist-path">test liste tache todo</router-link>
         </li>
         <li>
            <router-link to="/tasklist-vue-path">test liste tache todo avec composant vue</router-link>
         </li>
         <li>
            <router-link to="/task-vue-path">test tache todo avec composant vue</router-link>
         </li>
      </ul>
      <div>
         <router-view class="view"/>
      </div>
   </div>
</template>
