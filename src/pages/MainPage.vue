<template>
  <div class="main-container">    
    <b-row>
      <!-- Left side of the screen -->
      <b-col class="RandomRecipesCol" sm="6">
        <div class="content-container">
          <RecipePreviewList ref="random" title="Explore This Recipes" route_name="/recipes/random" class="RandomRecipes" />
          <b-button  class="button" tag="random-button" @click="$refs.random.updateRecipes()">New Random Recipes</b-button>
        </div>
      </b-col>
      <!-- Right side of the screen -->
      <b-col class="LastWatchedOrLoginCol" sm="6">
        <!-- if user is logged in -->
        <LoginPage v-if="!$root.store.username" style="position: fixed; top: 50px;"></LoginPage>
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
.main-container {
  max-width: 100%;
  display: block;
  justify-content: center;
  overflow: hidden;
}
.content-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
  margin-bottom: 20px;
}
.LastWatchedOrLoginCol {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-wrap: wrap;
}
.button, .button:focus, .button:active  {
  margin-top: 15px;
  margin-bottom: 20px;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 17px;
  font-weight: 500;
  color: #ffffff80;
  text-shadow: none;
  background: transparent;
  box-shadow: transparent;
  border: 1px solid #ffffff80;
  transition: 0.5s ease;
  user-select: none;
}
.button:hover{
  color: #ffffff;
  background: #008cff;
  border: 1px solid #008cff;
  text-shadow: 0 0 5px #ffffff,
              0 0 10px #ffffff,
              0 0 20px #ffffff;
  box-shadow: 0 0 5px #008cff,
              0 0 20px #008cff,
              0 0 50px #008cff,
              0 0 100px #008cff;
}
</style>