<template>
  <!-- <b-navbar type="dark" variant="info" class="nav-bar"> -->
  <VueScrollFixedNavbar>
    <b-navbar toggleable="lg"  class="nav-bar">    
      <router-link tag="b-navbar-brand" :to="{name:'main'}" style="font-weight: 1000; color: rgb(255, 200, 128)">Recipe Site</router-link>
      <!-- Home -->
      <b-navbar-nav>
        <router-link tag="b-nav-item" :to="{name:'main'}"><b style="color: white">Home</b></router-link>
      </b-navbar-nav>
      <!-- Search -->
      <b-navbar-nav>
        <router-link tag="b-nav-item" :to="{name:'search'}"><b style="color: white">Search</b></router-link >
      </b-navbar-nav>
      <!-- About -->
      <b-navbar-nav>
        <router-link tag="b-nav-item" to="/About"><b style="color: white">About</b></router-link>
      </b-navbar-nav>
      <!-- Registred user  -->
      <b-navbar-nav v-if="$root.store.username">
        <!-- Create Recipe Modal -->
        <b-navbar-nav>
        <b-nav-item v-b-modal.modal-1 id="modal-1" tag="b-nav-item" @click="showModal"
          ><b style="color: white">Create Recipe</b></b-nav-item>
          <CreateRecipePage v-if="createRecipeClicked"></CreateRecipePage>
      </b-navbar-nav>
        <!-- Personal dropdown: Favorites, My Recipes, My Family Recipes -->
        <b-nav-item-dropdown text="Personal" class="bold-option">
          <router-link tag="b-dropdown-item" :to="{name:'favorites'}"><b style="color: white" >Favorites</b></router-link>     
          <router-link tag="b-dropdown-item" :to="{name:'myrecipes'}"><b style="color: white">My Recipes</b></router-link>
          <router-link tag="b-dropdown-item" :to="{name:'familyrecipes'}"><b style="color: white">My Family Recipes</b></router-link>
        </b-nav-item-dropdown>
      </b-navbar-nav>
      <!-- Hello guest dropdown: Register & Login -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown v-if="!$root.store.username" right class="bold-option" text="Hello guest" style="color:white ;">
          <router-link tag="b-dropdown-item" :to="{name:'register'}"><b style="color:white ;">Register</b></router-link>
          <router-link tag="b-dropdown-item" :to="{name:'login'}"><b style="color:white ;">Login</b></router-link>
        </b-nav-item-dropdown>
        <!-- Logout -->
        <span v-else>
          <b-nav-item>
            <b-row> 
              <b-col>
                <b-navbar-item><h3 style="color:white ;">Hello {{$root.store.username}}</h3></b-navbar-item>  
              </b-col> 
              <router-link v-b-modal.modal-1 id="modal-1" tag="b-nav-item" to="/" @click.native="Logout()" ><b style="color:white ;">Logout</b></router-link>
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
.nav-bar{
  top: 0;
  z-index: 10;
  font-family: cursive;
  background-color: rgba(0, 0, 1, 0.658)!important;
  height:50px ;
  color: white;
}
.bold-option .dropdown-toggle {
  color: white !important;
}
.bold-option .dropdown-menu {
  background-color: rgba(0, 0, 1, 0.658)!important;
}
.bold-option .dropdown-item:hover {
  background-color: #ffffff30;
}
.bold-option{
  font-weight: 800;
}
</style>