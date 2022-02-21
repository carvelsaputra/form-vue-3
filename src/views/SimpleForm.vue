<template>
  <div>
    <h1>Create an Event</h1>
    <form @submit="submit">
      <BaseSelect
        label="Select a Category "
        :options="categories"
        v-model="category"
        :error="errors.category"
      />

      <fieldset>
        <legend>Name & Describe your event</legend>

        <BaseInput
          v-model="title"
          label="Title"
          type="text"
          :error="errors.title"
        />
        <BaseInput
          v-model="description"
          label="Description"
          type="text"
          :error="errors.description"
        />
      </fieldset>

      <fieldset>
        <legend>Where is your event?</legend>

        <BaseInput
          :error="errors.location"
          v-model="location"
          label="Location"
          type="text"
        />
      </fieldset>

      <fieldset>
        <legend>Pets</legend>

        <p>Are Pets allowed?</p>
        <div>
          <BaseRadioGroup
            v-model="pets"
            :options="petOptions"
            :errors="errors.pets"
            name="pets"
          />
        </div>
      </fieldset>

      <fieldset>
        <legend>Extras</legend>

        <div>
          <BaseCheckbox
            v-model="catering"
            :errors="errors.catering"
            label="Catering"
          />
        </div>
        <div>
          <BaseCheckbox
            v-model="music"
            :errors="errors.music"
            label="Live Music"
          />
        </div>
      </fieldset>
      <button type="submit" class="button -fill-gradient">Submit</button>
    </form>
    <pre>{{ event }}</pre>
  </div>
</template>
<script>
import axios from "axios";
import BaseInput from "../components/BaseInput.vue";
import BaseSelect from "../components/BaseSelect.vue";
import { useField, useForm } from "vee-validate";
export default {
  components: {
    BaseSelect,
    BaseInput,
  },
  setup() {
    const required = (value) => {
      const requiredMessage = "This field is required";
      if (value === undefined || value === null) return requiredMessage;
      if (!String(value).length) return requiredMessage;

      return true;
    };
    const minLength = (number, value) => {
      if (String(value).length < number)
        return `Please type at least more than ${number} characters`;
      return true;
    };
    const anything = () => {
      return true;
    };

    const validationSchema = {
      category: required,
      title: (value) => {
        const req = required(value);
        if (req !== true) return req;

        const min = minLength(3, value);
        if (min !== true) return min;
        return true;
      },
      description: required,
      location: undefined,
      pets: anything,
      catering: anything,
      music: anything,
    };

    const { handleSubmit, errors } = useForm({
      validationSchema,
      initialValues: {
        pets: 1,
        catering: false,
        music: false,
      },
    });

    const submit = handleSubmit((values) => {
      console.log("submit", values);
    });

    const { value: category } = useField("category");
    const { value: title } = useField("title");
    const { value: description } = useField("description");
    const { value: location } = useField("location");
    const { value: pets } = useField("pets");
    const { value: catering } = useField("catering");
    const { value: music } = useField("music");

    return {
      category,
      title,
      description,
      location,
      pets,
      catering,
      music,
      submit,
      errors,
    };
  },
  data() {
    return {
      petOptions: [
        {
          label: "Yes",
          value: 1,
        },
        {
          label: "No",
          value: 0,
        },
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
    };
  },
  methods: {
    sendForm() {
      axios
        .post(
          "https://my-json-server.typicode.com/carvelsaputra/form-vue-3/events",
          this.event
        )
        .then((res) => {
          console.log("response", res);
        })
        .catch((err) => {
          console.log("error", err);
        });
    },
  },
};
</script>
<style>
fieldset {
  border: 0;
  margin: 0;
  padding: 0;
}
legend {
  font-size: 28px;
  font-weight: 700;
  margin-top: 20px;
}
</style>
