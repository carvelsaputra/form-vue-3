<template>
  <div>
    <h1>Create an Event</h1>
    <form @submit.prevent="sendForm">
     <BaseSelect label="Select a Category " :options="categories" v-model="event.category"/>
      <h3>Name & Describe your event</h3>
      <BaseInput v-model="event.title" label="Title" type="text" />
      <BaseInput v-model="event.description" label="Description" type="text" />

      <h3>Where is your event?</h3>

      <label>Location</label>
      <BaseInput v-model="event.location" label="Location" type="text" />

      <h3>Are pets allowed?</h3>
      <div>
        <BaseRadioGroup  v-model="event.pets" :options="petOptions" name="pets"/>
      </div>

      
      <h3>Extras</h3>
      <div>
        <BaseCheckbox v-model="event.extras.catering" label="Catering"/>
      </div>
      <div>
        <BaseCheckbox  v-model="event.extras.music" label="Live Music"/>
      </div>
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
