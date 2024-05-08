<template>
  <div>
      <example :msg="msg" />
      <div id="plot_div"></div>
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
  },
  async mounted(){
    const df = await dfd.readCSV("https://raw.githubusercontent.com/plotly/datasets/master/finance-charts-apple.csv")
    // Mobile doesn't look that great, uses plotly under the hood, cosider other graphing library
    df.plot("plot_div").line()
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
