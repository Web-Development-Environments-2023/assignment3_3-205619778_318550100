<template>
  <b-container>
    <center>
    <h3 class="big-title text-center" >
        {{ title }}
      <slot></slot>
    </h3>
    </center>
   <center>
    <h1  v-if="no_recipe">
      <br/>
      <br/>
      There Are No {{ title }}</h1>
      </center>
    <center>
    <b-col v-for="r in recipes" :key="r.id">
      <RecipePreview class="recipePreview" :recipe="r" :title="title" :route_name="route_name" style="margin-left:205px;"/>
    </b-col>
     </center>
  </b-container>
</template>

<script>
import RecipePreview from "./RecipePreview.vue";
export default {
  name: "RecipePreviewList",
  components: {
    RecipePreview
  },
  props: {
    title: {
      type: String,
      required: true
    },
    route_name:{
      type: String,
      required: true    
    }
  },
  data() {
    return {
      recipes: [],
      no_recipe: false
    };
  },
  mounted() {
    this.updateRecipes()
  },
  methods: {
    async updateRecipes() {
      try {
        const response = await this.axios.get(
          this.$root.store.server_domain + this.route_name,
        );
        if(response.data.length === 0) {
          this.no_recipe = true;
        }
        const recipes = response.data;
        this.recipes = [];
        this.recipes.push(...recipes);
      } catch (error) {
        console.log(error);
      }
    },
    // async updateRandomRecipes() {
    //   try {
    //     const response = await this.axios.get(
    //       this.$root.store.server_domain + "/recipes/random",
    //     );
    //     if(response.data.length === 0) {
    //       this.no_recipe = true;
    //     }
    //     const recipes = response.data;
    //     this.recipes = [];
    //     this.recipes.push(...recipes);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
  }
};
</script>

<style lang="scss" scoped>


</style>