<template>
    <input 
        type="checkbox" 
        :checked="modelValue"
        @change="$emit('update:modelValue',$event.target.checked)"
        class="field" />
    <label 
        v-text="label" 
        v-if="label"/>
</template>
<script>
export default {
    props:{
        label:{
            type:String,
            default:""
        },
        modelValue:{
            type:Boolean,
            default:false
        }
    }
}
</script>