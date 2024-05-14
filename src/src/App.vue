<template>
  <defaults :darkMode="darkMode"/>
  <div class="topbar">

    <div class="icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0, 0, 400, 400">
        <circle cx="50%" cy="45%" r="39%" stroke-width="1" fill="#E6EDF3" />
        <g><path id="path0" d="M191.977 119.156 L 186.615 129.778 190.881 129.778 C 193.457 129.778,196.288 128.036,198.028 125.380 C 200.317 121.887,201.934 121.187,205.888 121.978 C 212.773 123.355,215.837 119.498,211.806 114.525 C 204.763 105.836,197.891 107.441,191.977 119.156 M211.201 127.649 C 201.162 128.296,199.446 131.434,203.539 141.662 C 207.324 151.121,215.215 154.323,222.304 149.275 L 227.214 145.779 223.673 136.445 C 221.725 131.311,220.002 127.111,219.843 127.111 C 219.685 127.111,215.796 127.353,211.201 127.649 M188.318 140.402 C 178.678 145.499,176.921 148.306,179.489 154.506 L 181.633 159.682 190.816 156.560 C 195.867 154.843,199.958 152.715,199.907 151.830 C 199.643 147.236,196.788 136.899,195.802 136.967 C 195.178 137.011,191.810 138.556,188.318 140.402 M197.333 162.412 C 197.333 164.996,198.067 167.111,198.964 167.111 C 199.861 167.111,201.970 170.711,203.650 175.111 C 207.657 185.604,219.150 187.363,221.067 177.778 C 221.981 173.206,222.933 172.444,227.733 172.444 C 233.077 172.444,233.282 172.186,232.204 166.796 C 230.763 159.591,232.609 160.375,213.723 158.949 L 197.333 157.712 197.333 162.412 M169.239 170.820 C 159.523 177.966,159.420 182.471,168.889 186.190 C 172.800 187.727,176.000 190.062,176.000 191.381 C 176.000 194.941,182.798 194.282,187.959 190.222 C 190.445 188.267,193.972 186.667,195.795 186.667 C 204.455 186.667,199.752 176.375,188.495 170.692 C 175.739 164.253,178.192 164.237,169.239 170.820 M224.643 182.222 C 222.826 186.958,225.442 190.222,231.055 190.222 C 238.110 190.222,238.698 183.880,231.884 181.289 C 225.998 179.051,225.853 179.070,224.643 182.222 M156.444 196.192 C 151.067 198.407,146.790 200.970,146.941 201.887 C 147.092 202.805,147.719 207.356,148.336 212.000 C 149.978 224.379,154.696 223.332,174.817 206.123 C 176.200 204.941,169.070 191.971,167.111 192.105 C 166.622 192.138,161.822 193.978,156.444 196.192 M182.815 206.931 L 174.519 218.161 187.490 231.046 L 200.461 243.930 206.223 235.554 L 211.986 227.178 224.852 228.384 L 237.718 229.589 241.422 214.839 C 245.883 197.078,248.157 199.231,222.860 197.272 C 189.767 194.710,192.294 194.100,182.815 206.931 M247.084 226.764 C 244.549 235.818,245.011 236.664,254.665 240.632 L 261.330 243.373 265.755 236.860 L 270.180 230.348 264.519 224.507 C 255.910 215.625,249.988 216.392,247.084 226.764 M146.521 237.580 C 122.076 252.208,123.769 249.913,127.240 263.732 L 130.210 275.556 156.443 275.556 C 185.445 275.556,183.307 276.400,191.082 261.863 L 196.028 252.614 186.458 243.885 C 181.195 239.083,174.423 233.087,171.410 230.560 L 165.932 225.965 146.521 237.580 M215.890 237.805 C 214.065 239.067,195.556 272.516,195.556 274.551 C 195.556 275.104,209.099 275.556,225.652 275.556 L 255.748 275.556 258.541 265.949 C 260.077 260.665,261.333 255.941,261.333 255.451 C 261.333 254.753,219.447 236.362,218.109 236.472 C 217.927 236.487,216.928 237.087,215.890 237.805 M267.094 266.643 C 263.002 273.195,264.302 275.556,272.000 275.556 C 280.340 275.556,281.947 270.633,275.160 265.879 C 270.130 262.355,269.749 262.391,267.094 266.643 M106.667 288.889 L 106.667 296.889 200.889 296.889 L 295.111 296.889 295.111 288.889 L 295.111 280.889 200.889 280.889 L 106.667 280.889 106.667 288.889 " stroke="none" fill="#010508" fill-rule="evenodd"></path></g>
        Sorry, your browser does not support inline SVG.
      </svg> 
    </div>

    <example :msg="msg" />

    <switchButton on="☀️" off="🌙" storageName="DarkMode" v-on:toggled="darkMode = !darkMode"/>

    <a href="https://github.com/Rockz-one/cairn" target="_blank" class="github-corner">
      <svg width="62px" height="62px" viewBox="0 0 250 250" style="fill:#eee; color:#151513;">
        <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
        <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path>
        <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path>
      </svg>
    </a>
  </div>


  <!-- choose graph type, choose  -->
  <div class="examples">
    <h3>Examples</h3>
    <input type="text" v-model="link" />
    <div class="button" @click="add">ADD</div>
    <h3>Output</h3>
    <li v-for="item in df.columns">{{ item }}</li>
    <br>
    <div stlye="padding:5px" id="plot_div"></div> 
  </div>

</template>

<script>
import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm"
import example from "./components/example.vue"
import switchButton from "./components/switchButton.vue"
import defaults from "./components/defaults.vue"

export default{
  components : {example, defaults, switchButton},
  data(){
    return{
      link : "https://data.montgomerycountymd.gov/api/views/iv8c-428b/rows.csv?accessType=DOWNLOAD",// "https://raw.githubusercontent.com/plotly/datasets/master/finance-charts-apple.csv",
      msg : "Site under development... come back soon",
      df  : "",
      darkMode : false
    }
  },
  methods: {
    async run(){
      this.df.plot("plot_div").line()  // Mobile doesn't look that great, uses plotly under the hood, consider other graphing library
    },
    async add(){
      try{
        const df = await dfd.readCSV(this.link)
        if (this.df){
          const new_df = dfd.concat({ dfList: [this.df, df], axis: 1 })
          this.df = new_df
        }else{
          this.df = df
        }
      }catch(err){
        console.log(err)
        alert("Failed to parse or combine data...")
      }
      this.run()
      console.log(this.df)
    },
  }
}
</script>

<style>
/* Github banner https://github.com/tholman/github-corners */
.github-corner:hover .octo-arm{animation:octocat-wave 560ms ease-in-out;z-index:9999;}
@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}
@media (max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave 560ms ease-in-out}}

hr{
  height: 0px;
  background-color: var(--sec-font-color);
  border-width: .5px;
  border-color: var(--sec-font-color);
}
input{
  background-color: var(--text-box-color);
  border: none;
  padding: 10px;
  color: var(--sec-font-color);
  width: 400px;
  text-overflow: ellipsis;
}
textarea:focus, input:focus{
    outline: none;
}
.button{
  background-color: var(--button-color);
  padding: 5px 10px 5px 10px;
  border-radius: 5px;
  margin-top: 5px;
  width: min-content;
}
.button:hover{
  opacity: .8;
  cursor: pointer;
}

.topbar{
  display: grid;
  padding-left: 10px;
  grid-template-columns: 62px auto 100px 62px;
  align-items: center;
  align-content: center;
  height: 65px;
  border-bottom: .5px solid;
  border-color: var(--sec-font-color);
}
.icon{
  width:43px;
  height:43px;
}
.examples{
  display: grid;
  width: 100%;
  overflow: hidden;
  padding: 20px;
  z-index: -1;
  background-color: var(--sec-bg-color);
}
</style>
