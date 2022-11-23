<script>
import {Button} from 'up3d-test-ui'
import {defineComponent} from 'vue'
export default defineComponent({
  components:{
    [Button.name]:Button
  },
  setup(){
    const onClick=()=>{
      console.log(1)
    }
    return{
      onClick
    }
  }
})

</script>

<template>
  <a-button text="提交" @onClick="onClick"></a-button>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
