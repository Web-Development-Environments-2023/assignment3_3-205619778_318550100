<template>
  <div class="container">
      <h3 class="title">
        {{ title }}
        <slot></slot>
      </h3>
      <b-container>
      <b-row v-for="r in recipes" :key="r.id">
        <b-col>
          <RecipePreview class="recipePreview" :recipe="r" :title="title" :myRecipes="myRecipe" :route_name="route_name"/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import RecipePreview from "./RecipePreview.vue";
export default {
  name: "RecipePreviewList",
  components: {
    RecipePreview,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    route_name:{
      type: String,
      required: true    
    }
  },
  data() {
    return {
      recipes: [],
      myRecipe: false,
    };
  },
  mounted() {
    this.updateRecipes();
  },
  methods: {
    async updateRecipes() {
      try {
        const response = await this.axios.get(
          this.$root.store.server_domain + this.route_name
        );
        const recipes = response.data;
        this.recipes = [];
        this.recipes.push(...recipes);
        this.myRecipe = false;
      } catch (error) {
        console.log(error);
      }
    }
    
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding-top: 30px;
  min-height: 400px;
  display: block;  
  align-items: center;
  justify-content: center;
}
.title {
  text-align: center;
  font-size: 40px;
  font-weight: 900;
  color: rgb(189, 161, 111);
  font-family: 'KG First Time In Forever', sans-serif;
}
</style>