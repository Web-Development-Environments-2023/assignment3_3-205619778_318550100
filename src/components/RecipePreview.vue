<template>
  
    <div>
      <b-card id="card" tag="article" style="max-width: 20rem;" class="mb-2">
        <router-link :to="{name:'recipe', params:{recipeId: recipe.id, route_name: this.route_name}}" class="recipe-preview">
        <b-card-img id="img" :src="recipe.image" img-alt="Image" class="hover-effect"></b-card-img>
        </router-link>
        <b-card-title id="title" :title="recipe.title"></b-card-title>
        <b-card-text>
          <b-list-group >
            <dt>{{ recipe.readyInMinutes }} minutes to prepare</dt>
            <dt v-if="recipe.popularity">{{ recipe.popularity }} Liked this recipe</dt>
            <dt v-if="recipe.vegan"> Vegan</dt>
            <dt v-if="recipe.vegetarian">Vegeterian</dt>
            <dt v-if="recipe.glutenFree">Gluten Free</dt>
            <dt v-if="recipe.isWatched">Viewed Recipe</dt>
            <dt v-if="recipe.isFavorite">Favorite Recipe</dt>
          </b-list-group>
        </b-card-text>
        <div v-if="!recipe.isFavorite && $root.store.username && this.route_name!='/users/myRecipes' && this.route_name!='/users/familyRecipes'" class="add-favorite-button">
          <b-button v-b-modal.modal-1 @click="addToFavorites(recipe.id)">
          {{ recipe.isFavorite ? 'Favorite Recipe' : 'Add to Favorites' }}
        </b-button>

      </div>
      </b-card>
    </div>

</template>


<script>

export default {
  mounted() {
    this.axios.get(this.recipe.image).then((i) => {
      this.image_load = true;
    });
  },
  data() {
    return {
      image_load: false,
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
    }
};
</script>


<style scoped>
.recipe-preview {
  display: inline-block;
  width: 90%;
  height: 100%;
  position: relative;
  margin: 10px 10px;
}
.recipe-preview > .recipe-body {
  width: 100%;
  height: 200px;
  position: relative;
}

.recipe-preview .recipe-body .recipe-image {
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
  display: block;
  width: 98%;
  height: auto;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
}

.recipe-preview .recipe-footer {
  width: 100%;
  height: 50%;
  overflow: hidden;
}

.recipe-preview .recipe-footer .recipe-title {
  padding: 10px 10px;
  width: 100%;
  font-size: 12pt;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
}

.recipe-preview .recipe-footer ul.recipe-overview {
  padding: 5px 10px;
  width: 100%;
  display: -webkit-box;
  display: -moz-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  -o-box-flex: 1;
  box-flex: 1;
  -webkit-flex: 1 auto;
  -ms-flex: 1 auto;
  flex: 1 auto;
  table-layout: fixed;
  margin-bottom: 0px;
}

.recipe-preview .recipe-footer ul.recipe-overview li {
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  -o-box-flex: 1;
  -ms-box-flex: 1;
  box-flex: 1;
  -webkit-flex-grow: 1;
  flex-grow: 1;
  width: 90px;
  display: table-cell;
  text-align: center;


}
.recipe-preview .hover-effect:hover {
  /* Define your hover effect styles here */
  /* For example, you can change the opacity or add a border */
  opacity: 0.8;
  border: 2px solid red;
}
</style>