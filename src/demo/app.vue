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
      </ul>
      <div>
         <router-view class="view"/>
      </div>
   </div>
</template>
