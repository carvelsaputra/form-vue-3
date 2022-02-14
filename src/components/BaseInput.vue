<template>
    <label v-text="label" :for="uuid"/>
    <!-- on input we emit update activity which is the value is model value into event target value -->
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :placeholder="label"
      class="field"
      v-bind="$attrs"
      :id="uuid"
      :aria-describedby="error ? `${uuid}-error` : null"
      :aria-invalid="error ? true : null"
    />
    <p 
      aria-live="assertive"
      v-if="error" 
      class="errorMessage" 
      v-text="error" 
      :id="`${uuid}-error`"
    />
    <!-- if we binding in multiroot, we need to define which one node / tag that we bind the attribute -->
</template>
<script>
import UniqueID from "../features/UniqueID"
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
    error:{
      type:String,
      default:""
    }
  },
  setup(){
    const uuid = UniqueID().getID()
    return{
      uuid
    }
  }
};
</script>
