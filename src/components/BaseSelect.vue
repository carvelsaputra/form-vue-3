<template>
  <label :for="uuid" v-if="label" v-text="label" />
  <!-- event is to notify the value if any changes -->
  <select
    :value="modelValue"
    class="field"
    :id="uuid"
    v-bind="{
      ...$attrs,
      onChange: updateValue,
    }"
  >
    <option
      v-for="option in options"
      :value="option"
      :key="option"
      :selected="option == modelValue"
      v-text="option"
    />
  </select>
</template>
<script>
import SetupFormComponent from "../features/SetupFormComponent";
import UniqueID from "../features/UniqueID";
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
    options: {
      type: Array,
      required: true,
    },
  },
  setup(props, context) {
    const uuid = UniqueID().getID();
    const { updateValue } = SetupFormComponent(props, context);
    return {
      uuid,
      updateValue,
    };
  },
};
</script>
