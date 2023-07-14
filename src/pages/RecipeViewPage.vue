<template>
  <div class="container">
    <div v-if="recipe">
      <div class="recipe-header mt-3 mb-4">
        <h1>{{ recipe.title }}</h1>
        <img :src="recipe.image" class="center" />
      </div>
      <div class="recipe-body">
        <div class="wrapper">
          <div class="wrapped">
            <div class="mb-3">
              <div>Ready in {{ recipe.readyInMinutes }} minutes</div>
              <div v-if="recipe.popularity">Likes: {{ recipe.popularity }} likes</div>
              <div>Serving: {{ recipe.servings }} servings</div>
              <div v-if="recipe.vegetarian">Vegeterian</div>
              <div v-if="recipe.vegan">Vegan</div>
              <div v-if="recipe.glutenFree">Gluten Free</div>
              <div v-if="recipe.isFavorite">Favorite Recipe</div>
              <div v-if="recipe.creator">Made by: {{ recipe.creator }}</div>
              <div v-if="recipe.customary">Usally Make in: {{ recipe.customary }}</div>
              <b-button v-if="!recipe.isFavorite && $root.store.username && this.$route.params.route_name!='/users/familyRecipes' && this.$route.params.route_name!='/users/myRecipes' " v-b-modal.modal-1 @click="addToFavorites($route.params.recipeId)">
             {{ recipe.isFavorite ? 'Favorite Recipe' : 'Add to Favorites' }}
            </b-button>
            </div>
            Ingredients:
            <ul>
              <li
              v-for="ing in recipe.ingredients" :key="ing.name">
               {{ing.amount }} {{ing.name }}
              </li>
            </ul>
          </div>
          <div class="wrapped">
            Instructions:
            <ol>
              <li v-for="s in recipe._instructions" :key="s.number">
                {{ s.step }}
              </li>
            </ol>
          </div>
        </div>
      </div>
      <!-- <pre>
      {{ $route.params }}
      {{ recipe }}
    </pre
      > -->
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      recipe: null,
      myRecipe: false,
      familyRecipes: false
    };
  },
  methods: {
    async addToFavorites(recipeId){
      try {
        const response = await this.axios.post(
          this.$root.store.server_domain + "/users/favorites/",
          {
            recipeId: recipeId
          }
        );

        this.recipe.isFavorite = true;
      } catch (error) {
        console.log(error);
      }
    }
  },
  async created() {
    try {
      let response;
      let _response;
      let path = "/recipes/"
      // response = this.$route.params.response;
      let id = this.$route.params.recipeId
      if(this.$route.params.route_name === "/users/myRecipes"){
        path = "/users/myRecipes/"
        this.myRecipe = true;
      }
      if(this.$route.params.route_name === "/users/familyRecipes"){
        path = "/users/familyRecipes/"
        this.familyRecipes = true;
      }
      
      try {
        response = await this.axios.get(
          // "https://test-for-3-2.herokuapp.com/recipes/info",
          this.$root.store.server_domain + path +id,
          {
            params: { id: this.$route.params.recipeId }
          }   
        );

        // console.log("response.status", response.status);
        if (response.status !== 200) this.$router.replace("/NotFound");
      } catch (error) {
        console.log("error.response.status", error.response.status);
        this.$router.replace("/NotFound");
        return;
      }
      // console.log(response.data[0])
      if(this.myRecipe || this.familyRecipes){
        _response = response.data[0]

      }
      else{
        _response = response.data
      }
      let {
        instructions,
        ingredients,
        popularity,
        readyInMinutes,
        servings,
        image,
        title,
        vegan,
        vegetarian,
        glutenFree,
        isWatched,
        isFavorite,
        creator,
        customary
      } = _response;
      //if is Private Recipe

      if(this.myRecipe || this.familyRecipes){
      const jsonIngredients = JSON.parse(ingredients)
      const jsonInstraction = JSON.parse(instructions);
    

      ingredients = jsonIngredients.map((item) => ({
      name: item.name,
      amount: parseInt(item.amount) // Convert amount to a number if needed
        }));

        instructions = jsonInstraction.map((item) => ({
        name: item.name,
        steps: item.steps.map((step) => ({
          number: step.number,
          step: step.step
        }))
     }));
    }
    console.log(this.$route.params.route_name)


    //rest of recipes
      
     let _instructions = instructions
        .map((fstep) => {
          fstep.steps[0].step = fstep.name + fstep.steps[0].step;
          return fstep.steps;
        })
        .reduce((a, b) => [...a, ...b], []);

      let _recipe = {
        _instructions,
        ingredients,
        popularity,
        readyInMinutes,
        servings,
        image,
        title,
        vegan,
        vegetarian,
        glutenFree,
        isWatched,
        isFavorite,
        creator,
        customary
        
      };

      this.recipe = _recipe;
    } catch (error) {
      console.log(error);
    }
}
};
</script>

<style scoped>
.wrapper {
  display: flex;
}
.wrapped {
  width: 50%;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
/* .recipe-header{

} */
</style>