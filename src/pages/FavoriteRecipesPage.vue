<template>
  <div class="container">
    <RecipePreviewList ref="favorite" title="Favorite Recipes" route_name="/users/favorites" class="FavortiesRecipes"/>
  </div>

</template>

<script>
import RecipePreviewList from '../components/RecipePreviewList.vue'
export default {
    components: {
        RecipePreviewList,
    }
}
</script>

<style>

</style>