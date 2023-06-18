<template>
  <div class="container">    <b-row>
      <!-- Left side of the screen -->
      <b-col class="RandomRecipesCol">
        <RecipePreviewList ref="random" title="Explore This Recipes" route_name="/recipes/random" class="RandomRecipes" />
        <b-button tag="random-button" @click="$refs.random.updateRecipes()">New Random Recipes</b-button>
      </b-col>
      <!-- Right side of the screen -->
      <b-col class="LastWatchedOrLoginCol">
        <!-- if user is logged in -->
        <LoginPage v-if="!$root.store.username"></LoginPage>
        <!-- if user is not logged in -->
        <RecipePreviewList v-if="$root.store.username" ref="watched" title="Last Watched Recipes" route_name="/users/lastWatchedRecipes" class="LastWatchedRecipes"/>
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
  mounted() {
    this.$refs.random.updateRecipes();
  },
};
</script>

<style lang="scss" scoped>


</style>