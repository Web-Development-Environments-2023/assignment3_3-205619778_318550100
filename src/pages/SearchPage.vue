<template>
  <div id="search_form" class="search-container">
    <h1 class="title">Search Recipes</h1>
    <b-form @submit.prevent="onSearch" @reset.prevent="onReset">
      <b-row>
        <b-col>
          <!-- Query -->
          <b-form-group id="input-group-query" label-cols-sm="1" label="Search:" label-for="search">
            <b-form-input id="search" v-model="$v.form.search.$model" type="text" :state="validateState('search')"></b-form-input>
            <b-form-invalid-feedback v-if="!$v.form.search.required">query is required</b-form-invalid-feedback>
          </b-form-group>
        </b-col>
      </b-row>   
      <b-row>   
        <b-col sm="4">   
          <!-- Cuisine -->
          <b-form-group id="input-group-cuisine" label-cols-sm="3" label="Cuisine:" label-for="cuisine">
            <b-form-select id="cuisine" v-model="$v.form.cuisine.$model" :options="cuisines"></b-form-select>
          </b-form-group>
        </b-col>
        <b-col sm="4">  
          <!-- Diet -->
          <b-form-group id="input-group-diet" label-cols-sm="3" label="Diet:" label-for="diet">
            <b-form-select id="diet" v-model="$v.form.diet.$model" :options="diets"></b-form-select>
          </b-form-group>
        </b-col>
        <b-col sm="4">  
          <!-- Intolerance -->
          <b-form-group id="input-group-intolerance" label-cols-sm="5" label="Intolerance:" label-for="intolerance">
            <b-form-select id="intolerance" v-model="$v.form.intolerance.$model" :options="intolerances"></b-form-select>
          </b-form-group>
        </b-col>
      </b-row> 
      <b-row>  
        <b-col sm="3">
          <!-- Number of results -->
          <b-form-group label="number of results:" class="search-field" v-slot="{ ariaDescribedby }">
            <b-form-radio v-model="$v.form.number.$model" :aria-describedby="ariaDescribedby" name="some-radios" value="5">5</b-form-radio>
            <b-form-radio v-model="$v.form.number.$model" :aria-describedby="ariaDescribedby" name="some-radios" value="10">10</b-form-radio>
            <b-form-radio v-model="$v.form.number.$model" :aria-describedby="ariaDescribedby" name="some-radios" value="15">15</b-form-radio>
          </b-form-group>
        </b-col>
        <!-- Buttons -->
        <b-col sm="4.5">
          <b-button id="search-button" type="submit" variant="primary">Search</b-button>
        </b-col>
        <b-col sm="4.5">
          <b-button id="reset-button" type="reset" variant="danger">Reset</b-button>
        </b-col>
      </b-row>
    </b-form>
    <b-alert class="mt-2" v-if="form.submitError" variant="warning" dismissible show>Search failed: {{ form.submitError }}</b-alert>

  <div v-if="$root.store.username && !LastSearchcalled" :do="LastSearch()"></div>
    <div v-if="search_results">
      <h5 id="no-results" v-if="noResults">We couldn't find recipes that match your search</h5>
      <div v-else class="text-center"> 

        <b-dropdown id="sort" v-if="!isEmpty" text="Sort By" class="m-2">
          <b-dropdown-item v-on:click="this.sortByPrepTime">Preperation Time</b-dropdown-item>
          <b-dropdown-item v-on:click="this.sortByPopularity">Popularity</b-dropdown-item>
        </b-dropdown>

        <b-row v-for="r in search_results" :key="r.id">
          <b-col>
            <RecipePreview class="recipePreview" :recipe="r"/>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>


<script>
import cuisines from "../assets/cuisines.js";
import diets from "../assets/diets.js";
import intolerances from "../assets/intolerances.js";
import { required } from "vuelidate/lib/validators";
// import RecipePreviewList from "../components/RecipePreviewList";
import RecipePreview from "../components/RecipePreview";
export default {
  name: "Search",
  components: {
    RecipePreview,
  },
  data() {
    return {
      form: {
        search: "",
        number: "5",
        cuisine: null,
        diet: null,
        intolerance: null,
        submitError: undefined
      },
      cuisines: [{ value: null, text: "None", disabled: false }],
      diets: [{ value: null, text: "None", disabled: false }],
      intolerances: [{ value: null, text: "None", disabled: false }],
      errors: [],
      search_results: [],
      noResults: false,
      LastSearchcalled: false,
    };
  },
  validations: {
    form: {
      search: {required,},
      number: {required,},
      cuisine: {},
      diet: {},
      intolerance: {},
    }
  },
  mounted() {
    this.cuisines.push(...cuisines);
    this.diets.push(...diets);
    this.intolerances.push(...intolerances);
  },
  methods: {
    validateState(param) {
      const { $dirty, $error } = this.$v.form[param];
      return $dirty ? !$error : null;
    },
    async LastSearch() {
      try {
        const response = await this.axios.get(
          this.$root.store.server_domain + "/users/lastSearch"
        );
        this.search_results = response.data;
      } catch (error) {
        console.log(error);
      }
      this.LastSearchcalled=true;
    },
    async Search() {
      try {
        const response = await this.axios.get(
          this.$root.store.server_domain + "/recipes/search",
          {
            params:{
            query: this.form.search,
            number: this.form.number,
            cuisine: this.form.cuisine,
            diet: this.form.diet,
            intolerance: this.form.intolerance,
          }
          },
        );
        this.search_results = response.data;
        if (this.isEmpty) {
          this.noResults = true;
        }
    } catch (err) {
      console.log(err);
      // this.form.submitError = err.response.data.message;
    }
    },
    onSearch() {
      this.noResults = false;
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }
      this.Search();
    },
    onReset() {
      console.log("On reset method called");
      this.form.search = ""; // Reset the search field to an empty string
      this.form.number = "5"; // Reset the number field to its default value
      this.form.cuisine = null; // Reset the cuisine field to null
      this.form.diet = null; // Reset the diet field to null
      this.form.intolerance = null; // Reset the intolerance field to null
      this.noResults = false; // Reset the noResults flag to false
      this.$v.$reset(); // Reset the vuelidate form validation
    },
    sortByPrepTime() {
        this.search_results.sort(function(a, b) {
          return a.readyInMinutes - b.readyInMinutes;
        })
    },
    sortByPopularity() {
        this.search_results.sort(function(a, b) {
          return b.popularity - a.popularity;
        })
    },
  },
  computed: {
    isEmpty: ({ search_results }) => search_results.length === 0,
  }
};
</script>

<style lang="scss" scoped>
.search-container {
  margin: auto;
  margin-top: 5%;
  max-width: 750px;
  padding: 30px;
  color: rgb(255, 255, 255);
  font-family: 'KG First Time In Forever', sans-serif;
  font-weight: 900;
}
.title{
  text-align: center;
  padding: 10px 10px;
  color: rgb(189, 161, 111);
  font-weight: 700;
}
#no-results {
  text-align: center;
}
#search-button {
  margin: 35px 0px 0px 40px;
  padding: 10px 110px;
  background-color: rgb(228, 164, 91);
  border-color: rgb(255, 152, 16);
  font-weight: 900;
  color: rgb(64, 32, 15);
}
#search-button:hover {
  background-color: rgb(244, 194, 124);
}
#reset-button {
  margin: 35px;
  padding: 10px 60px;
  font-weight: 900;
  background-color:  rgb(171, 58, 32);
  border-color: rgb(169, 22, 12);
  color: rgb(55, 8, 6);
}
#reset-button:hover {
  background-color: rgb(188, 74, 64);
}
</style>