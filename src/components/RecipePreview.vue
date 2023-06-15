<template>
  <router-link
     :to="{ name: 'recipe', params: { recipeId: recipe.id, route_name: route_name} }" class="recipe-preview">
   
 <div>
   <b-card
     class="recipePreviewDetails" 
     :img-src="recipe.image"
     img-alt="Image"
     img-height="400"
     img-width="100"
     img-top
     tag="article"
     style="max-width: 33rem;"
   ><b-card-title style="font-size:18px; font-weight: bold;" class="text-center">{{recipe_title}}</b-card-title>
     <b-card-text class="recipePreviewDetailsText">
       <b-list-group >
         <dt> {{ recipe.readyInMinutes }} minutes to prepare</dt>
         <dt>{{ recipe.popularity }}  Liked this recipe</dt>
         <dt v-if="recipe.vegan"> Vegan</dt>
         <dt v-if="recipe.vegetarian"> Vegeterian</dt>
         <dt v-if="recipe.glutenFree">Gluten Free</dt>
         <dt v-if="recipe.isWatched"> Favorite Recipe</dt>
         <dt v-if="recipe.isFavorite">  Viewed Recipe</dt>
       </b-list-group>
     </b-card-text>
   </b-card>
 </div>
 </router-link>
 </template>
 
 <script>
 export default {
 
   data() {
     return {
        API_route:false,
        is_family: false,
        recipe_title: ""
     };
   },
   props: {
     recipe: {
       type: Object,
       required: true
     },
     title: {
       type: String,
       required: true
     },
     route_name:{
       type: String,
       required: true
     },
   },
   
 mounted() {this.updateRecipes(),
 this.recipe_title= this.recipe.title.replace('family-','')},
  methods: {
     async updateRecipes() {
      console.log(this.$route.path);
       try {
           if(this.$route.path=="/" ||this.$route.path == "/users/lastWatchedRecipes" || this.$route.path =="/random" || this.$route.path =="/users/favorites" || this.$route.path =="/search"){
             this.API_route = true;
           }
           else if(this.$route.path=="/users/familyRecipes"){
               this.is_family = true;
 
           }
       }catch (error) {
           console.log(error);
       }
     }
   }

   
 };
 </script>
 
 <style scoped>

 </style>