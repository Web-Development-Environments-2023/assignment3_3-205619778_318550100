<template>
  <div class="myrecipes-container">
    <RecipePreviewList ref="myrecipes" title="My Recipes" route_name="/users/myRecipes" class="MyRecipes"/>
  </div>
</template>
  
<script>
import RecipePreviewList from '../components/RecipePreviewList.vue'
export default {
  name:"MyRecipes",
  components: {
      RecipePreviewList,
  },
  mounted() {
    this.$refs.myRecipes.updateMyRecipes();
  },
}
</script>
  
<style>
.myrecipes-container {
  display: flex;  
  align-items: center;
  justify-content: center;
  padding-bottom: 30px;
}
</style>