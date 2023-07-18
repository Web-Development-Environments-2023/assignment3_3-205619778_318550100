<template>
    <div class="family-container">
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
.family-container {
  display: flex;  
  align-items: center;
  justify-content: center;
  padding-bottom: 30px;
}
</style>