<template>
  <div>
    <h1>Create an Event</h1>
    <form @submit.prevent="sendForm">
     <BaseSelect label="Select a Category " :options="categories" v-model="event.category"/>

      <fieldset>
        <legend>Name & Describe your event</legend>

        <BaseInput v-model="event.title" label="Title" type="text" />
        <BaseInput v-model="event.description" label="Description" type="text" />
      </fieldset>

      <fieldset>
        <legend>Where is your event?</legend>

        <BaseInput v-model="event.location" label="Location" type="text" />
      </fieldset>

      <fieldset>
        <legend>Pets</legend>

        <p>Are Pets allowed?</p>
        <div>
          <BaseRadioGroup  v-model="event.pets" :options="petOptions" name="pets"/>
        </div>
      </fieldset>

      <fieldset>
        <legend>Extras</legend>

        <div>
          <BaseCheckbox v-model="event.extras.catering" label="Catering"/>
        </div>
        <div>
          <BaseCheckbox  v-model="event.extras.music" label="Live Music"/>
        </div>
      </fieldset>
      <button type="submit" class="button -fill-gradient">Submit</button>
    </form>
    <pre>{{ event }}</pre>
  </div>
</template>
<script>
import axios from "axios"
import BaseInput from "../components/BaseInput.vue";
import BaseSelect from "../components/BaseSelect.vue"
export default {
  components: {
    BaseSelect,
    BaseInput,
  },
  data() {
    return {
      petOptions:[
        {
          label:"Yes",value:1
        },
        {
          label:"No",value:0
        }
      ],
      categories: [
        "sustainability",
        "nature",
        "animal welfare",
        "housing",
        "education",
        "food",
        "community",
      ],
      event: {
        title:"",
        category: "",
        description: "",
        location: "",
        pets: 1,
        extras: {
          catering: false,
          music: false,
        },
      },
    };
  },
  methods:{
    sendForm(){
      axios.post('https://my-json-server.typicode.com/carvelsaputra/form-vue-3/events',this.event).then(res=>{
        console.log('response',res);
      }).catch(err=>{
        console.log("error",err);
      })
    }
  }
};
</script>
<style >
  fieldset{
    border:0;
    margin:0;
    padding:0
  }
  legend{
    font-size:28px;
    font-weight: 700;
    margin-top:20px

  }
</style>