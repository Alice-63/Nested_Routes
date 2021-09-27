<template>
  <div class="">

<User/>


  </div>
</template>

<script>
import User from '../views/User.vue'


export default {
  name: 'Home',
  components: {
    User
  },
  data(){
    return{
      bname:""
    }
  }
}
</script>
<style scoped>

</style>
