<template>
    <label v-text="label" />
    <!-- on input we emit update activity which is the value is model value into event target value -->
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :placeholder="label"
      class="field"
      v-bind="$attrs"
    />
    <!-- if we binding in multiroot, we need to define which one node / tag that we bind the attribute -->
</template>
<script>
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
  },
};
</script>
