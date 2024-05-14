<template>
    <div class="relative">
      <Toggle class="toggle-color" :onLabel="on" :offLabel="off" v-model="isOn" />
    </div>
  </template>
  
  <script>
  import Toggle from '@vueform/toggle'
  
  export default {
    name: "PersistantToggle",
    props: ["storageName", "color", "on", "off"],
    components: {
      Toggle,
    },
    data() {
      return {
          isOn: false
      }
    },
    mounted() {
      if (this.$cookies.get(this.storageName)){
          this.isOn = JSON.parse(this.$cookies.get(this.storageName));
      }
      this.$emit("toggled", this.isOn);
      this.$cookies.set(this.storageName, this.isOn)
    },
     watch: {
        isOn: function () {
            this.$emit("toggled", this.isOn);
            this.$cookies.set(this.storageName, this.isOn)
        },
    }
  }
  </script>
  
  <style src="@vueform/toggle/themes/default.css" ></style>
  
  <style scoped>
  .toggle-color{
    --toggle-bg-on: #75c791;
    --toggle-border-on: #75c791;
    --toggle-duration: 300ms;
  }
  
  .toggle-color:focus{
     box-shadow: none;
  }
  
  .relative{
    position: relative;
    justify-self: center;
    align-self: center;
  }
  
  @media only screen and (max-width: 600px) {
    .toggle-color{
      --toggle-duration: 400ms;
    }
  }
  </style>