<template>
  <div>
      <example :msg="msg" />
  </div>
</template>

<script>
import example from "./components/example.vue"

export default{
  components : {example},
  data(){
    return{
      msg :  "Site under development... come back soon"
    }
  }
}
</script>

<style>
/* START KEEP THIS */
* {
  box-sizing: border-box;
}
html, body { height: 100%; } 
html,body{
  margin    : 0px;
  top       : 0px;
  background: white;
  overflow-x: hidden;
}
/* END KEEP THIS */



</style>
