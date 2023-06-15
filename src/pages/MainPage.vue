<template>
  <div class="container">
    <div id="welcome" align="center" justify="center"></div>
    <b-row>
      <b-col  class="RandomRecipesCol">
        <RecipePreviewList route_name="/recipes/random" title="Random Recipes" class="RandomRecipes center" />
        <b-button tag="button" @click="new_random_recipes"> New Random Recipes 
        </b-button>
      </b-col>
      <b-col  >
        <!-- this is the false above ths title of last viewed -->
        <RecipePreviewList v-if="$root.store.username" route_name="/users/lastWatchedRecipes" title="Last Vieswed Recipes" class="LastViewedRecipes center"
          :class="{
            blur: !$root.store.username,
            center: true}"/>
      
            <login-page v-if="!$root.store.username"></login-page>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import RecipePreviewList from "../components/RecipePreviewList";
import LoginPage from './LoginPage.vue';

export default {
  components: {
    RecipePreviewList,
    LoginPage
   
  },
   methods: {
    new_random_recipes(){
      window.location.reload();
    }
    }
};

// console.log(this.$route.path);
</script>

<style lang="scss" scoped>


</style>