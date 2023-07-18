<template>
  <div class="register-container">
    <h1 class="title">Register</h1>
    <b-form @submit.prevent="onRegister" @reset.prevent="onReset">
      <b-form-group id="input-group-username" label-cols-sm="4" label="Username:" label-for="username">
        <b-form-input id="username" v-model="$v.form.username.$model" type="text" :state="validateState('username')"></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.username.required">Username is required</b-form-invalid-feedback>
        <b-form-invalid-feedback v-else-if="!$v.form.username.length">Username length should be between 3-8 characters long</b-form-invalid-feedback>
        <b-form-invalid-feedback v-if="!$v.form.username.alpha">Username should contain only alphbet characters</b-form-invalid-feedback>
      </b-form-group>

      <b-form-group id="input-group-firstname" label-cols-sm="4" label="First Name:" label-for="firstname">
        <b-form-input id="firstname" v-model="$v.form.firstname.$model" type="text" :state="validateState('firstname')"></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.firstname.required">First Name is required</b-form-invalid-feedback>
        <b-form-invalid-feedback v-if="!$v.form.firstname.alpha">First Name must be alphabetic</b-form-invalid-feedback>
      </b-form-group>

      <b-form-group id="input-group-lastname" label-cols-sm="4" label="Last Name:" label-for="lastname">
        <b-form-input id="lastname" v-model="$v.form.lastname.$model" type="text" :state="validateState('lastname')"></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.lastname.required">Last Name is required</b-form-invalid-feedback>
        <b-form-invalid-feedback v-if="!$v.form.lastname.alpha">Last Name must be alphabetic</b-form-invalid-feedback>
      </b-form-group>

      <b-form-group id="input-group-country" label-cols-sm="4" label="Country:" label-for="country">
        <b-form-select id="country" v-model="$v.form.country.$model" :options="countries" :state="validateState('country')"></b-form-select>
        <b-form-invalid-feedback>Country is required</b-form-invalid-feedback>
      </b-form-group>

      <b-form-group id="input-group-Password" label-cols-sm="4" label="Password:" label-for="password">
        <b-form-input id="password" type="password" v-model="$v.form.password.$model" :state="validateState('password')"></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.password.required">Password is required</b-form-invalid-feedback>
        <b-form-invalid-feedback v-else-if="$v.form.password.required && !$v.form.password.length">Have length between 5-10 characters long</b-form-invalid-feedback>
        <b-form-invalid-feedback v-if="!$v.form.password.specialChar || !$v.form.password.digit" text-variant="info">Your password should contain at least one alphabet, one numeric, and one special character</b-form-invalid-feedback>
      </b-form-group>

      <b-form-group id="input-group-confirmedPassword" label-cols-sm="4" label="Confirm Password:" label-for="confirmedPassword">
        <b-form-input id="confirmedPassword" type="password" v-model="$v.form.confirmedPassword.$model" :state="validateState('confirmedPassword')"></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.confirmedPassword.required">Password confirmation is required</b-form-invalid-feedback>
        <b-form-invalid-feedback v-else-if="!$v.form.confirmedPassword.sameAsPassword">The confirmed password is not equal to the original password</b-form-invalid-feedback>
      </b-form-group>

      <b-form-group id="input-group-email" label-cols-sm="4" label="Email:" label-for="email">
        <b-form-input id="email" v-model="$v.form.email.$model" type="text" :state="validateState('email')"></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.email.required">Email is required</b-form-invalid-feedback>
        <b-form-invalid-feedback v-else-if="!$v.form.email.validEmail">Please enter Valid Email</b-form-invalid-feedback>
      </b-form-group>

      <div class="button-container">
        <b-button type="submit" id="search-button" variant="primary" style="width:270px;">Register</b-button>
        <b-button type="reset" id="reset-button" variant="danger" style="width:150px;">Reset</b-button>
      </div>

      <div class="mt-2">You have an account already?
        <router-link to="login"> Log in here</router-link>
      </div>
    </b-form>
    <b-alert class="mt-2" v-if="form.submitError" variant="warning" dismissible show @dismissed="form.submitError = undefined">Register failed: {{ form.submitError }}</b-alert>
  </div>
</template>

<script>
import countries from "../assets/countries";
import {
  required,
  minLength,
  maxLength,
  alpha,
  sameAs,
  email
} from "vuelidate/lib/validators";

export default {
  name: "Register",
  data() {
    return {
      form: {
        username: "",
        firstname: "",
        lastname: "",
        country: null,
        password: "",
        confirmedPassword: "",
        email: "",
        submitError: undefined
      },
      countries: [{ value: null, text: "", disabled: true }],
      errors: [],
      validated: false
    };
  },
  validations: {
    form: {
      username: {
        required,
        length: (u) => minLength(3)(u) && maxLength(8)(u),
        alpha
      },
      country: {
        required
      },
      password: {
        required,
        length: (p) => minLength(5)(p) && maxLength(10)(p),
        specialChar: (p) => p && /[^A-Za-z0-9]/.test(p),
        digit: (p) => p && /\d/.test(p), 
      },
      confirmedPassword: {
        required,
        sameAsPassword: sameAs("password")
      },
      firstname: {
        required,
        alpha
      },
      lastname: {
        required,
        alpha
      },
      email: {
        required,
        email
      }
    }
  },
  mounted() {
    // console.log("mounted");
    this.countries.push(...countries);
    // console.log($v);
  },
  methods: {
    validateState(param) {
      const { $dirty, $error } = this.$v.form[param];
      return $dirty ? !$error : null;
    },
    async Register() {
      try {
        const response = await this.axios.post(
          // "https://test-for-3-2.herokuapp.com/user/Register",
          this.$root.store.server_domain + "/Register",
          {
            username: this.form.username,
            password: this.form.password,
            firstname: this.form.firstname,
            lastname: this.form.lastname,
            country: this.form.country,
            email: this.form.email
          }
        );
        this.$router.push("/login");
        console.log(response);
        this.form.submitError = undefined; // Reset submitError after successful registration
      } catch (err) {
        console.log(err.response);
        this.form.submitError = err.response.data.message;
      }
    },
    onRegister() {
      console.log("register method called");
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }
      console.log("register method go");
      this.Register();
    },
    onReset() {
      console.log("On reset method called");
      this.form = {
        username: "",
        firstname: "",
        lastname: "",
        country: null,
        password: "",
        confirmedPassword: "",
        email: "",
        submitError: undefined
      };
      this.$nextTick(() => {
        this.$v.$reset();
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.register-container {
  margin: auto;
  max-width: 500px;
  padding: 30px;
  color: rgb(255, 255, 255);
}
.title{
  text-align: center;
  padding: 10px 10px;
  color: rgb(138, 227, 111);
  font-weight: 700;
  font-family: 'KG First Time In Forever', sans-serif;
}
.button-container {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
#search-button {
  background-color: rgb(141, 228, 91);
  border-color: rgb(72, 135, 43);
  color: rgb(64, 32, 15);
}
#search-button:hover {
  background-color: rgb(169, 255, 129);
}
#reset-button {
  background-color:  rgb(171, 58, 32);
  border-color: rgb(169, 22, 12);
  color: rgb(55, 8, 6);

}
#reset-button:hover {
  background-color: rgb(188, 74, 64);
}
</style>
