<template>
  <router-link :to="{name:'recipe', params:{recipeId: recipe.id}}" class="recipe-preview">
    <div>
      <b-card id="card" tag="article" class="mb-2">
        <b-card-img id="img" :src="recipe.image" img-alt="Image"></b-card-img>
        <b-card-title id="title" :title="recipe.title"></b-card-title>
        <b-card-text>
          <b-list-group >
            <div class="dt-main-container">
            <dt><img src="../assets/time.png" class="time-ico"> {{ recipe.readyInMinutes }} minutes</dt>
            <dt><img src="../assets/like.png" class="like-ico"> {{ recipe.popularity }} Likes</dt>
          </div>
            <div class="dt-info-container">
              <dt v-if="recipe.glutenFree"><img src="../assets/gluten-free.png" class="info-ico"> Gluten Free</dt>
              <dt v-if="recipe.vegan"><img src="../assets/vegan.png" class="info-ico"> Vegan</dt>
              <dt v-if="recipe.vegetarian"><img src="../assets/vegeterian.png" class="info-ico"> Vegeterian</dt>
            </div>
            <div class="dt-personal-container">  
              <dt v-if="recipe.isWatched"><img src="../assets/eye.png" class="personal-ico"> Viewed Recipe</dt>
              <dt v-if="recipe.isFavorite"><img src="../assets/favorite.png" class="personal-ico"> Favorite Recipe</dt>
            </div>
          </b-list-group>
        </b-card-text>
      </b-card>
    </div>
  </router-link>
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
      image_load: false
    };
  },
  props: {
    recipe: {
      type: Object,
      required: true
    },
    // id: {
    //   type: Number,
    //   required: true
    // },
    // title: {
    //   type: String,
    //   required: true
    // },
    // readyInMinutes: {
    //   type: Number,
    //   required: true
    // },
    // image: {
    //   type: String,
    //   required: true
    // },
    // aggregateLikes: {
    //   type: Number,
    //   required: false,
    //   default() {
    //     return undefined;
    //   }
    // }
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
</style>