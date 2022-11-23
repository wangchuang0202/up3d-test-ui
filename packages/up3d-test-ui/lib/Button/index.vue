<template>
    <button class="a-button" @click="emit('onClick')">{{text}}</button>
</template>
<script>
import {defineComponent} from 'vue'
export default defineComponent({
    name:'AButton',
    props:{
        text:{
            type:String,
            default:""
        }
    },
    setup(props,{emit}){
        return {
            emit
        }
    }  
})
</script>
<style scoped lang="less">
.a-button{
    background: rgb(18, 121, 212);
    color: #fff;
    width: 80px;
    height: 38px;
    line-height: 38px;
    border: none;
    border-radius: 3px;
    padding: 0;
    
    &:hover{
        background: rgb(18, 121, 212,0.8);
    }
    &:active{
        background: rgb(18, 121, 212,1);
        border: none;
    }
}
</style>