<template>
  <div class="favorites-container">
    <RecipePreviewList ref="favoriterecipes" title="Favorite Recipes" route_name="/users/favorites" class="FavortiesRecipes"/>
  </div>
</template>

<script>
import RecipePreviewList from '../components/RecipePreviewList.vue'
export default {
  components: {
      RecipePreviewList,
  },
  mounted() {
    this.$refs.myRecipes.updateMyRecipes();
  },
}
</script>

<style>
.favorites-container {
  display: flex;  
  align-items: center;
  justify-content: center;
  padding-bottom: 30px;
}
</style>