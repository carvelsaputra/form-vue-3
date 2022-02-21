<template>
  <label v-if="label" :for="uuid">
    {{ label }}
  </label>
  <!-- on input we emit update activity which is the value is model value into event target value -->
  <input
    class="field"
    v-bind="{
      ...$attrs,
      onInput: updateValue,
    }"
    :id="uuid"
    :value="modelValue"
    :placeholder="label"
    :aria-describedby="error ? `${uuid}-error` : null"
    :aria-invalid="error ? true : false"
    :class="{ error }"
  />
  <!-- if we binding in multiroot, we need to define which one node / tag that we bind the attribute -->

  <BaseErrorMessage v-if="error" :id="`${uuid}-error`">
    {{ error }}
  </BaseErrorMessage>
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
    error: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
  },
  setup(props, context) {
    const { updateValue } = SetupFormComponent(props, context);
    const uuid = UniqueID().getID();

    return {
      updateValue,
      uuid,
    };
  },
};
</script>
