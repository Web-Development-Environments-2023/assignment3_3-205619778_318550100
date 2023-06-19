<template>
  <div id="search_form" class="container">
    <h1 class="title">Search Page</h1>
    <b-form @submit.prevent="onSearch" @reset.prevent="onReset">
      <!-- Query -->
      <b-form-group id="input-group-query" label-cols-sm="3" label="Search:" label-for="search">
        <b-form-input id="search" v-model="$v.form.search.$model" type="text" :state="validateState('search')"></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.search.required">
          query is required
        </b-form-invalid-feedback>
      </b-form-group>
      <!-- Number of results -->
      <b-form-group id="input-group-number" label-cols-sm="3" label="Max umber of results:" label-for="number">
      <b-form-select id="number" v-model="$v.form.number.$model" :options="[{ text: '5', value: 5 }, { text: '10', value: 10 }, { text: '15', value: 15 },]"></b-form-select>
      </b-form-group>
      <!-- Cuisine -->
      <b-form-group id="input-group-cuisine" label-cols-sm="3" label="Cuisine:" label-for="cuisine">
        <b-form-select id="cuisine" v-model="$v.form.cuisine.$model" :options="cuisines"></b-form-select>
      </b-form-group>
      <!-- Diet -->
      <b-form-group id="input-group-diet" label-cols-sm="3" label="Diet:" label-for="diet">
        <b-form-select id="diet" v-model="$v.form.diet.$model" :options="diets"></b-form-select>
      </b-form-group>
      <!-- Intolerance -->
      <b-form-group id="input-group-intolerance" label-cols-sm="3" label="Intolerance:" label-for="intolerance">
        <b-form-select id="intolerance" v-model="$v.form.intolerance.$model" :options="intolerances"></b-form-select>
      </b-form-group>
      <div id="buttons" class="buttons">
        <b-button id="reset-button" type="reset" variant="danger">Reset</b-button>
        <b-button id="search-button" type="submit" variant="primary" style="width:250px;" class="ml-5 w-75">Search</b-button>
      </div>
    </b-form>
    <b-alert class="mt-2" v-if="form.submitError" variant="warning" dismissible show>Search failed: {{ form.submitError }}</b-alert>

  <div v-if="$root.store.username && !LastSearchcalled" :do="LastSearch()">
  </div>
     <div v-if="search_results">
      <h5 id="no-results" v-if="noResults">We couldn't find recipes that match your search</h5>
      
      <div v-else class="text-center"> 
        <b-dropdown id="sort" v-if="!isEmpty" text="Sort By" variant="outline-dark" class="m-2">
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
      search: {
        required,
      },
      number: {
        required,
      },
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
      this.form = {
        query: "",
        number: "5",
        cuisine: null,
        diet: null,
        intolerance: null,
        noResults: false,
      };
      this.$nextTick(() => {
        this.$v.$reset();
      });
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
.container {
  max-width: 500px;
}
</style>