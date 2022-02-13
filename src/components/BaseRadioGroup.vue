<template>
    <component  
        v-for="option in options" 
        :key="option.value"
        :is="vertical ? 'div' : 'span'"
        :class="{horizontal: !vertical}"
        >
        <!-- if its not vertical we define horizontal class into component -->
            <BaseRadio 
                :label="option.label" 
                :value="option.value"
                :name="name"
                :modelValue="modelValue"
                @update:modelValue="$emit('update:modelValue',$event)"
            />
    </component>
</template>
<script>
export default {
    props:{
        options:{
            type:Array,
            required:true
        },
        name:{
            type:String,
            required:true
        },
        modelValue:{
            type:[String,Number],
            required:true
        },
        // if we need the radio looks horizontal wrap it with span if vertical wrap it with div
        vertical:{
            type:Boolean,
            required:false
        },

    }
}
</script>
<style scoped>
.horizontal{
    margin-right:20px;
}
</style>