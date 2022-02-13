<template>
  <div>
    <h1>Create an Event</h1>
    <form >
      <label for="category">Select a Category</label>
      <select v-model="event.category">
        <option
          v-for="option in categories"
          :value="option"
          :key="option"
          :selected="option == event.category"
          v-text="option"
        />
      </select>
      <h3>Name & Describe your event</h3>
      <BaseInput v-model="event.title" label="Title" type="text" />
      <BaseInput v-model="event.description" label="Description" type="text" />

      <h3>Where is your event?</h3>

      <label>Location</label>
      <BaseInput v-model="event.location" label="Location" type="text" />

      <h3>Are pets allowed?</h3>
      <div>
        <input type="radio" v-model="event.pets" :value="1" name="pets" />
        <label>Yes</label>
      </div>

      <div>
        <input type="radio" v-model="event.pets" :value="0" name="pets" />
        <label>No</label>
      </div>
      <h3>Extras</h3>
      <div>
        <input type="checkbox" v-model="event.extras.music" class="field" />
        <label>Live Music</label>
      </div>
      <button type="submit" class="button -fill-gradient">Submit</button>
    </form>
    <pre>{{ event }}</pre>
  </div>
</template>
<script>
import BaseInput from "../components/BaseInput.vue";
export default {
  components: {
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
