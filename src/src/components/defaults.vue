<template>
    <div id="theme"></div>
  </template>
  
  <script>

  let light = `
  <style>
  :root{
    --bg-color      : #FFFFFF;
    --sec-bg-color  : #F4F4F4;
    --font-color    : #333333;
    --sec-font-color: #666666;
    --link-color    : #007BFF;
    --button-color  : #28A745;
    --text-box-color: #F8F9FA;
    --filter-button-color: #EAEAEA;
  }
  </style>
  `
  let dark = `
  <style>
  :root{
    --bg-color      : #010508;
    --sec-bg-color  : #0C1116;
    --font-color    : #E6EDF3;
    --sec-font-color: #858C96;
    --link-color    : #4493F8;
    --button-color  : #238635;
    --text-box-color: #171A22;
    --filter-button-color : #21242F;
  }
  </style>
  `
  
  export default{
    props: ['darkMode'],
    methods:{
       colors(mode){
        if (mode){
            document.getElementById('theme').innerHTML = dark
          }else{
            document.getElementById('theme').innerHTML = light
          }
      }
    },
    mounted(){
      this.colors(this.darkMode)
    },
    watch: {
        'darkMode' : {
          handler : function (prevValue,newValue){
              this.colors(newValue)
          },
        }
    }
  }
  </script>
  
  <style>
  /* LIGHT MODE */
  :root{
    --bg-color      : #FFFFFF;
    --sec-bg-color  : #F4F4F4;
    --font-color    : #333333;
    --sec-font-color: #666666;
    --link-color    : #007BFF;
    --button-color  : #28A745;
    --text-box-color: #F8F9FA;
    --filter-button-color: #EAEAEA;
  }
  #theme{
    display: none
  }
  * {
    box-sizing: border-box;
  }
  #app,html, body { min-height: 100%; } 
  #app,html,body{
    margin    : 0px;
    top       : 0px;
    overflow-x: hidden;
  
    /* colors */
    color      : var(--font-color) !important;
    background : var(--bg-color)   !important;
    font-family: system-ui, sans-serif;
    font-weight: normal;
    transition: background-color .2s ease-in-out;
  }
  </style>