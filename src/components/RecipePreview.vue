<template>
    <div>
      <b-card id="card" tag="article" class="mb-2">
        <router-link :to="{name:'recipe', params:{recipeId: recipe.id, route_name: this.route_name}}" class="recipe-preview">
        <div class="img-wrapper">
          <b-card-img id="img" :src="recipe.image" class="hover-effect" style="cursor: pointer;" :title="'Click to view this recipe'"></b-card-img>
        </div>
        </router-link>
        <b-card-title id="title" :title="recipe.title"></b-card-title>
        <b-card-text>
          <b-list-group >
            <div class="dt-main-container">
            <dt><img src="../assets/time.png" class="time-ico"> {{ recipe.readyInMinutes }} minutes</dt>
            <dt><img src="../assets/like.png" class="like-ico"> {{ recipe.popularity }} Likes </dt>
            <dt v-if="recipe.isFavorite && $root.store.username && this.route_name!='/users/myRecipes' && this.route_name!='/users/familyRecipes'">
              <img src="../assets/redheart.png" class="like-ico">
            </dt>
            <dt v-if="!recipe.isFavorite && $root.store.username && this.route_name!='/users/myRecipes' && this.route_name!='/users/familyRecipes'">
              <b-button @click="addToFavorites(recipe.id)" class="heart-button"><img src="../assets/heart.png" class="personal-ico"></b-button>
            </dt>
          </div>
            <div class="dt-info-container">
              <dt v-if="recipe.glutenFree"><img src="../assets/gluten-free.png" class="info-ico"> Gluten Free</dt>
              <dt v-if="recipe.vegan"><img src="../assets/vegan.png" class="info-ico"> Vegan</dt>
              <dt v-if="recipe.vegetarian"><img src="../assets/vegeterian.png" class="info-ico"> Vegeterian</dt>
            </div>
            <div class="dt-personal-container">  
              <dt v-if="recipe.isWatched"><img src="../assets/eye.png" class="personal-ico"> Viewed Recipe</dt>
            </div>
          </b-list-group>
        </b-card-text>
        </b-card>
    </div>
</template>


<script>
export default {
  mounted() {
    this.axios.get(this.recipe.image).then((i) => {
      this.image_load = true;
    });
    if (this.$root.store.username) {
      this.checkWatched();
      this.checkfavorite();
    }
  },
  data() {
    return {
      image_load: false,
      isWatched: false,
      isFavorite: false,
    };
  },
  props: {
    recipe: {
      type: Object,
      required: true
    },
    route_name:{
      type: String,
      required: false
    },
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
        this.updateFavorites();
        this.recipe.isFavorite = true;
      } catch (error) {
        console.log(error);
      }
    },
    async updateFavorites() {
      try {
        const response = await this.axios.get(
          this.$root.store.server_domain + "/users/favorites"
        );
        const recipes = response.data;
        let recipes_list = [];
        recipes_list.push(...recipes);
        this.$root.store.updateFavoriteList(recipes_list);
      } catch (error) {
        console.log(error);
      }
    },
    checkfavorite() {
      let recipeId = this.recipe.id;
      let favorite_list = this.$root.store.favorite_list;
      for (let i = 0; i < favorite_list.length; i++) {
        if (recipeId == favorite_list[i].id) {
          this.isFavorite = true;
          break;
        }
      }
    },
    async updateWatchedList() {
      try {
        const response = await this.axios.get(
          this.$root.store.server_domain + "/users/allLastWatchedRecipes"
        );
        const recipes = response.data;
        let recipes_list = [];
        recipes_list.push(...recipes);
        this.$root.store.updateWatchedList(recipes_list);
      } catch (error) {
        console.log(error);
      }
    },
    checkWatched() {
      let recipeId = this.recipe.id;
      let watched_list = this.$root.store.watched_list;
      for (let i = 0; i < watched_list.length; i++) {
        if (recipeId == watched_list[i].id) {
          this.isWatched = true;
          break;
        }
      }
    },
    }
};
</script>


<style scoped>
#card {
  align-content: center;
  display: inline-block;
  width: 100%;
  height: 100%;
  position: relative;
  margin: 10px 10px;
  text-align: center;
  color: rgb(114, 114, 113);
  font-family: sans-serif;
  background-color: rgba(255, 251, 247, 0.948);
  max-width: 470px;
  min-height: 530px;
}
#title {
  font-weight: 700;
  font-family: cursive;  
  color:rgb(107, 58, 28);
}
.time-ico {
  width: 36px;
  height: 36px;
}
.like-ico {
  width: 32px;
  height: 32px;
}
.info-ico {
  width: 28px;
  height: 28px;
}
.personal-ico {
  width: 28px;
  height: 28px;
}
.dt-main-container {
  padding-top: 14px;
  display: inline-block;
  font-size: 20px;
  color:black;
}
.dt-main-container dt {
  display: inline-block;
  margin-right: 10px;
}
.dt-info-container {
  padding-top: 18px;
  display: inline-block;
  font-size: 15px;
}
.dt-info-container dt {
  display: inline-block;
  margin-right: 10px;
}
.dt-personal-container {
  padding-top: 8px;
  display: inline-block;
  font-size: 15px;
}
.dt-personal-container dt {
  display: inline-block;
  margin-right: 10px;
}
.recipe-preview .hover-effect:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  opacity: 0.8; 
  transform: scale(1.1);
  transition: transform 0.3s ease;
}
.img-wrapper {
    display: inline-block;
    overflow: hidden;
}
.heart-button {
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;
}
.heart-button:hover {
  background-color: transparent;
}
</style>