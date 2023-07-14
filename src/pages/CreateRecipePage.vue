<template>
    <div>  
      <b-modal id="modal-1"  ref="my-modal" title="Create New Recipe" hide-footer>
      <b-form @submit.prevent="onCreate" @reset.prevent="onResetCreate" >
        <!--Recipe Title-->
          <b-form-group>
          <b-form-input
              id="input-1"
              v-model="form.title"
              type="text"
              placeholder="Enter recipe title"
              required
          ></b-form-input>
          </b-form-group> 

         <!--Recipe Servings number-->
          <b-form-group>
          <b-form-input
              id="input-2"
              v-model="form.servings"
              type="number"
              placeholder="Enter servings number"
              required
          ></b-form-input>
          </b-form-group> 
  
        <!--Recipe preparation Time-->
          <b-form-group>
          <b-form-input
              id="input-3"
              v-model="form.readyInMinutes"
              type="number"
              placeholder="Enter preparation time in minutes "
              required
          ></b-form-input>
          </b-form-group> 
        
        <!--Recipe Image-->
          <b-form-group>
          <b-form-input
              id="input-4"
              v-model="form.image"
              type="url"
              placeholder="Enter the URL image of the recipe "
              required
          ></b-form-input>
          </b-form-group>

          <!--Recipe Add Ingredient-->  
          <b-form @submit.prevent="add_ingredient">
            <b-row>
              <b-col>
            <b-form-group>
            <b-form-input v-model="form.ingredient" style="width:220px;" type="text"  placeholder="Enter ingredient" required></b-form-input>
            </b-form-group>
  
            <b-form-group>
            <b-form-input v-model="form.amount" style="width:220px;" type="number"  placeholder="Enter amount" required ></b-form-input>
            </b-form-group>
  
            <b-form-group>
              <b-button @click="add_ingredient">Add Ingredient</b-button>
  
            </b-form-group>
            </b-col>
            <b-col>
            <p><b>ingredients that you already added:</b>
            <br/>
            {{this.display_ingredients}}
            </p>
            </b-col>
            </b-row>
          </b-form>

          <!--Recipe Add Instractions-->
          <b-form @submit.prevent="add_step">
            <b-row>
              <b-col>
            <b-form-group>
            <b-form-input v-model="form.insrtaction" style="width:220px;" type="text"  placeholder="Enter Instraction Step" required></b-form-input>
            </b-form-group>
  
            <b-form-group>
              <b-button @click="add_step">Add Step</b-button>
  
            </b-form-group>
            </b-col>
            <b-col>
            <p><b>Your instructions:</b>
            <br/>
            {{this.display_steps}}
            </p>
            </b-col>
            </b-row>
          </b-form>

          <!-- <b-form-group>
            <b-form-textarea
            id="textarea"
            v-model="form.insrtaction"
            placeholder="Enter insrtaction of recipe..."
            rows="4"
            required
            ></b-form-textarea>
          </b-form-group> -->

          <!--Choose if Vegan,Vegetrian,Gluten Free-->
          <b-row>
        <b-col md="4">
            <b-form-checkbox v-model="form.checked_gluten" name="check-button1" switch>
            gluten free 
            </b-form-checkbox> 
        </b-col>

        <b-col md="4">
            <b-form-checkbox v-model="form.checked_vegan" name="check-button2" switch>
            vegan 
            </b-form-checkbox>
        </b-col>

        <b-col md="4">
            <b-form-checkbox v-model="form.checked_vegetarian" name="check-button3" switch>
            vegetarian 
            </b-form-checkbox> 
        </b-col>
        </b-row>
        <!--Reset and Create Buttons-->
      <br/>                 
      <b-row>
        <b-col><b-button type="reset">Reset</b-button></b-col>
        <b-col><b-button type="submit">Create</b-button></b-col>               
      </b-row>
      </b-form>            
      </b-modal>    
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          title: '',
          servings: '',
          readyInMinutes:'',
          image:'',
          checked_gluten: false,
          checked_vegetarian: false,
          checked_vegan: false,
          insrtaction:'',
          ingredient:'',
          amount:'',   
          },
          ingredients:[],
          display_ingredients:"",
          display_steps:"",
          insrtactions:[],
          step:1,
          steps:[],

        }
      },
    mounted() {
        this.onResetCreate();
    },
    methods: {
      async Create() {
        try {
          const response = await this.axios.post(
            this.$root.store.server_domain + "/users/myRecipes",
          {
            title: this.form.title,
            readyInMinutes: this.form.readyInMinutes ,
            image: this.form.image,
            vegan: this.form.checked_vegan,
            vegetarian: this.form.checked_vegetarian,
            glutenFree:  this.form.checked_gluten,
            ingredients: this.ingredients,
            instructions: this.insrtactions,
            servings: this.form.servings                         
          }
          );
  
          await this.onResetCreate();
          this.$refs['my-modal'].hide()
          console.log(response)
        } catch (err) {
          console.log(err);
          this.form.submitError = err.response.data.message;
        }
      },
      onCreate(){
        if(this.form.checked_gluten){
            this.form.checked_gluten=1;
        }
        else{
            this.form.checked_gluten=0;
        }
        if(this.form.checked_vegan){
            this.form.checked_vegan=1;
        }
        else{
            this.form.checked_vegan=0;
        }
        if(this.form.checked_vegetarian){
            this.form.checked_vegetarian=1;
        }
        else{
            this.form.checked_vegetarian=0;
        }
        let obj = {
          "name": "",
          "steps": this.steps
          }   
         
        this.insrtactions.push(obj);
        if(this.ingredients.length > 0){
          this.Create()
          this.$root.toast("Create", "Recipes created successfully", "success");
        }     
        else{
          this.$root.toast("error", "there is no ingredients", "error");
        }
        onResetCreate()
  
      },
      onResetCreate(){
       
        this.form={
          title: '',
          servings: '',
          readyInMinutes:'',
          image:'',
          checked_gluten: false,
          checked_vegetarian: false,
          checked_vegan: false,
          insrtaction:'',
          ingredient:'',
          amount:'',
        },

        this.ingredients=[],
        this.display_ingredients=""
        this.display_steps=""
        this.insrtactions=[]
        this.step=1
        this.steps=[]        
      },

      add_ingredient(){
        if(this.form.ingredient !== "" && this.form.amount !=="")
        {      
          let obj = {
          "name": this.form.ingredient,
          "amount": this.form.amount
          }   
         
        this.ingredients.push(obj);
        this.display_ingredients = this.display_ingredients + this.form.ingredient + ":" + this.form.amount + ", "
        this.reset_ingredient();
        }
      },

      reset_ingredient(){
        this.form.ingredient='',
        this.form.amount=''
        },

        add_step(){
            if(this.form.insrtaction !== "")
            {      
            let obj = {
            "number": this.step,
            "step": this.form.insrtaction
            }   
            
            this.steps.push(obj);
            this.display_steps += this.step +". " + this.form.insrtaction + ", " 
            this.reset_steps();

        }
        },
        reset_steps(){
            this.form.insrtaction='',
            this.step++
            }
        }
  
  }
  </script>
  
  <style>
  
  </style>