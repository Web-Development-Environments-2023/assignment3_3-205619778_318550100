<template>
    <div class="container">
      <RecipePreviewList ref="familyrecipes" title="Family Recipes" route_name="/users/familyRecipes" class="FamilyRecipes"/>
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
    
</style>