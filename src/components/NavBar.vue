<template>
  <!-- <b-navbar type="dark" variant="info" class="nav-bar"> -->
  <VueScrollFixedNavbar>
    <b-navbar toggleable="lg"  class="nav-bar">    
      <router-link tag="b-navbar-brand" :to="{name:'main'}">Recipe Site</router-link>
      <!-- Home -->
      <b-navbar-nav>
        <router-link tag="b-nav-item" :to="{name:'main'}"><b style="color: black">Home</b></router-link>
      </b-navbar-nav>
      <!-- Search -->
      <b-navbar-nav>
        <router-link tag="b-nav-item" :to="{name:'search'}"><b style="color: black">Search</b></router-link >
      </b-navbar-nav>
      <!-- About -->
      <b-navbar-nav>
        <router-link tag="b-nav-item" to="/About"><b style="color: black">About</b></router-link>
      </b-navbar-nav>
      <!-- Registred user  -->
      <b-navbar-nav v-if="$root.store.username">
        <!-- CreateRecipePage -->
        <b-navbar-nav>
          <b-nav-item v-b-modal.modal-1 id="modal-1" tag="b-nav-item" @click="showModal"><b style="color: black">Create Recipe</b></b-nav-item>
          <CreateRecipePage v-if="createRecipeClicked"></CreateRecipePage>
        </b-navbar-nav>
        <!-- Personal dropdown: Favorites, My Recipes, My Family Recipes -->
        <b-nav-item-dropdown toggle-class="text-dark" text="Personal" class="bold-option">
          <router-link tag="b-dropdown-item" :to="{name:'favorites'}"><b style="color: black" >Favorites</b></router-link>     
          <router-link tag="b-dropdown-item" :to="{name:'myrecipes'}"><b style="color: black">My Recipes</b></router-link>
          <router-link tag="b-dropdown-item" :to="{name:'familyrecipes'}"><b style="color: black">My Family Recipes</b></router-link>
        </b-nav-item-dropdown>
      </b-navbar-nav>
      <!-- Hello guest dropdown: Register & Login -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown class="bold-option" v-if="!$root.store.username" right toggle-class="text-dark" text="Hello guest" style="color:black ;">
          <router-link tag="b-dropdown-item" :to="{name:'register'}"><b style="color:black ;">Register</b></router-link>
          <router-link tag="b-dropdown-item" :to="{name:'login'}"><b style="color:black ;">Login</b></router-link>
        </b-nav-item-dropdown>
        <!-- Logout -->
        <span v-else>
          <b-nav-item>
            <b-row> 
              <b-col>
                <b-navbar-item><h3 style="color:black ;">Hello {{$root.store.username}}</h3></b-navbar-item>  
              </b-col> 
              <router-link v-b-modal.modal-1 id="modal-1" tag="b-nav-item" to="/" @click.native="Logout()" ><b style="color:black ;">Logout</b></router-link>
            </b-row>
            <!-- <button @click="Logout" id="button"><b>Logout</b></button> -->
          </b-nav-item>
        </span>
      </b-navbar-nav>
    </b-navbar>
  </VueScrollFixedNavbar>
</template>


<script>
import CreateRecipePage from '../pages/CreateRecipePage.vue';
export default {
  name: "NavBar",
  components: {
    CreateRecipePage
  },
  data() {
    return {
      createRecipeClicked: false,
      }
    },
  mounted() {
    this.createRecipeClicked = false;
  },
  methods: {
    Logout() {
      this.$root.store.logout();
      this.$root.toast("Logout", "User logged out successfully", "success");
      this.$router.push("/").catch(() => {
        this.$forceUpdate();
      });
    },
  showModal(){
      this.createRecipeClicked = true
    }
  },
};
</script>

<style>

</style>