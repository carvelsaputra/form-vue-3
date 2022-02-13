<template>
  <div>
    <h1>Create an Event</h1>
    <form >
     <BaseSelect label="Select a Category " :options="categories" v-model="event.category"/>
      <h3>Name & Describe your event</h3>
      <BaseInput v-model="event.title" label="Title" type="text" />
      <BaseInput v-model="event.description" label="Description" type="text" />

      <h3>Where is your event?</h3>

      <label>Location</label>
      <BaseInput v-model="event.location" label="Location" type="text" />

      <h3>Are pets allowed?</h3>
      <div>
        <BaseRadio v-model="event.pets" label="Yes" :value="1" name="pets"/>
      </div>

      <div>
          <BaseRadio v-model="event.pets" label="No" :value="0" name="pets"/>
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
import BaseInput from "../components/BaseInput.vue";
import BaseSelect from "../components/BaseSelect.vue"
export default {
  components: {
    BaseSelect,
    BaseInput,
  },
  data() {
    return {
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
};
</script>
