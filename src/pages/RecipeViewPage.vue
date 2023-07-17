<template>
  <div class="container">
    <div v-if="recipe">
      <div class="recipe-header mt-3 mb-4">
        <h1 class="title">{{ recipe.title }}</h1>
        <img :src="recipe.image" class="image" />
      </div>
      <div class="recipe-body">
        <div class="wrapper">
          <div class="wrapped1">
            <div class="mb-3">
              <div><img src="../assets/clock.png" class="icons"> {{ recipe.readyInMinutes }} minutes</div>
              <div><img src="../assets/servings.png" class="icons"> {{ recipe.servings }} servings</div>
              <div v-if="recipe.popularity"><img src="../assets/thumb-up.png" class="icons"> {{ recipe.popularity }} likes</div>
              <div v-if="recipe.vegetarian"><img src="../assets/vegeterian.png" class="icons"> Vegeterian</div>
              <div v-if="recipe.vegan"><img src="../assets/vegan.png" class="icons"> Vegan</div>
              <div v-if="recipe.glutenFree"><img src="../assets/gluten-free.png" class="icons"> Gluten Free</div>
              <div v-if="recipe.creator">Made by: {{ recipe.creator }}</div>
              <div v-if="recipe.customary">Usally Make in: {{ recipe.customary }}</div>
              <div v-if="recipe.isFavorite && $root.store.username && this.$route.params.route_name!='/users/familyRecipes' && this.$route.params.route_name!='/users/myRecipes'">
                <img src="../assets/redheart1.png" class="icons"> Favorite Recipe
              </div>
              <div v-if="!recipe.isFavorite && $root.store.username && this.$route.params.route_name!='/users/familyRecipes' && this.$route.params.route_name!='/users/myRecipes'">
                <b-button @click="addToFavorites($route.params.recipeId)" class="heart-button"><img src="../assets/redheart.png" class="icons"> Add to Favorites</b-button>
              </div>
              </div>
                <b><u>Ingredients:</u></b>
                <ul>
                  <li v-for="ing in recipe.ingredients" :key="ing.name"> {{ing.amount }} {{ing.name }}</li>
                </ul>
            </div>
            <div class="wrapped2">
            <b><u>Instructions:</u></b>
              <ol>
                <li v-for="s in recipe._instructions" :key="s.number">{{ s.step }}</li>
              </ol>
            </div>
          </div>
        </div>
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
  watch: {
    // This function will be executed when recipe.isFavorite changes
    // Update the value of recipe.isFavorite to the new value
    'recipe.isFavorite'(newValue) {
      this.recipe.isFavorite = newValue;
    }
  },
  methods:{
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
.container {
  display: flex;
  flex-direction: center;
  background-color: rgba(0, 0, 0, 0.634);
  padding: 10px 100px 100px 100px;
  color:rgb(255, 255, 255);
  width: 90%;
  font-family: 'KG First Time In Forever', sans-serif;
}
.wrapper {
  display: flex;
}
.wrapped1 {
  width: 35%;
  color:white;
}
.wrapped2 {
  width: 65%;
  color:white;
}
.mb-3 {
  font-weight: 900;
  color: rgb(174, 163, 163);
}
u {
  color: rgb(226, 205, 168);
}
.image {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}
.title {
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
  color: rgb(189, 161, 111);
  font-weight: 700;
}
ul, ol {
  margin-top: 5px;
  list-style-position: inside;
  padding-left: 0;
}
ol li {
  margin-bottom: 6px;
}
ol > li::marker {
  font-weight: 900;
  color: rgb(238, 220, 189);
}
.icons {
  width: 22px;
  height: 22px;
}
.heart-button {
  cursor: pointer;
  margin-top: 10px;
  font-weight: bold;
}
</style>