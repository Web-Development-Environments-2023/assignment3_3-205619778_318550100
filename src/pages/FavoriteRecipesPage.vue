<template>
  <div class="container">
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
.container {
  text-align: center;
  display: flex;
  flex-wrap: wrap;

}
.FavortiesRecipes {
  margin-top: 20px;
}
</style>