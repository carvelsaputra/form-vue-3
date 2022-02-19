<template>
    <form @submit.prevent="onSubmit">
        <BaseInput
            label="email"
            type="email"
            v-model="email"
            :error="emailError"
        />
        <BaseInput
            label="password"
            type="password"
        />
        <BaseButton
            type="submit"
            class="-fill-gradient"
        >
        Submit
        </BaseButton>
    </form>
</template>
<script>
export default {
    setup(){
        function onSubmit(){
            alert("Submitted")
        }
        return{
            onSubmit
        }
    }
}
</script>