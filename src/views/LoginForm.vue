<template>
  <form @submit.prevent="onSubmit">
    <BaseInput
      label="email"
      type="email"
      :modelValue="email"
      @change="handleChange"
      :error="emailError"
    />

    <BaseInput
      v-model="password"
      label="password"
      type="password"
      :error="passwordError"
    />
    <BaseButton type="submit" class="-fill-gradient"> Submit </BaseButton>
  </form>
</template>
<script>
import { useField, useForm } from "vee-validate";
export default {
  setup() {
    function onSubmit() {
      alert("Submitted");
    }
    // validation rules
    const validations = {
      email: (value) => {
        if (!value) return "this field is required !";
        const regex =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regex.test(String(value).toLowerCase())) {
          return "please input a valid email address";
        }
        return true;
      },
      password: (value) => {
        const requiredMessage = "This field is required !";
        if (value === undefined || value === null) return requiredMessage;
        if (!String(value).length) return requiredMessage;

        return true;
      },
    };
    // useform is used to validate whole form by type the validation once
    const { setFieldValue } = useForm({
      validationSchema: validations,
    });

    // usefield return object, and property inside the object is value, and error message
    const { value: email, errorMessage: emailError } = useField("email");
    const { value: password, errorMessage: passwordError } =
      useField("password");

    const handleChange = (event) => {
      setFieldValue("email", event.target.value);
    };

    return {
      onSubmit,
      email,
      password,
      emailError,
      passwordError,
      handleChange,
    };
  },
};
</script>
