<template>
  <div class="header">
    <div style="display: table-row">
      <div style="display: table-row">
        <div class="logo"><img src="img/ta1w-small-sharp.png" alt="Avatar of John"/></div>
        <div class="logo-name">Tiago Antunes</div>
      </div>
      <div class="nav-bar">
        <router-link to="/">About me</router-link>
        <router-link to="/game-projects">Projects</router-link>
        <router-link to="/other-projects">Gallery</router-link>
        <router-link to="/resume">Resume</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Header",
  //   props: {
  //     msg: String,
  //   },
});
</script>

<style scoped lang="less">

@import '../css/variables.less';

.header {
  width: 100%;
  display: table;
}

.logo img {
  //margin-top: 15px;
  text-align: left;
  padding-top: 20px;
  padding-bottom: 10px;
  padding-left: 15px;
  padding-right: 10px;
  line-height: 2em;
  //margin:auto;
  //line-height: 2em;
  //display: table-cell;
  display: table-cell;
  //height: 100px; 
  //background-image: url('../../public/img/ta1w.png'); 
  //background-size: cover;
  //background-position: left; 
  //min-height: 100%;
  
  //max-height: 150px; 
  //width: auto;
  //display: block;
  //margin: auto;
  //display: table-cell;
  //width:50; /* the width of the logo image */
  //height:50; /* the height of the logo image */
  //margin:0 auto;
}

.logo-name {
  text-align: left;
  padding-top: 22px;
  padding-bottom: 20px;
  padding-left: 12px;
  padding-right: 20px;
  line-height: 2em;
  display: table-cell;
  vertical-align: middle;
  font-family: 'Papyrus';
}

.nav-bar {
  text-align: right;
  padding-top: 22px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  line-height: 2em;
  display: table-cell;
  vertical-align: middle
}

a {
  color: @textColor;
  opacity: 0.5;
  /*text-transform: uppercase;*/
  margin-left: 15px;
  margin-right: 15px;
  padding-bottom: 8px;
  white-space: nowrap;
  display: inline-block;
}

.router-link-exact-active {
  border: 0px solid @textColor;
  border-bottom-width: 2px;
  opacity: 1;
  font-weight: bold;
}

@media only screen and (max-width: 620px){
  .nav-bar {
    line-height: 2em;
  }

  a {
    margin-left: 9px;
    margin-right: 9px;
    padding-bottom: 0px;
  }

  .logo-name {
    text-align: left;
    padding-top: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    padding-right: 0px;
    line-height: 0em;
    display: table-cell;
    vertical-align: middle;
    font-family: 'Papyrus';
  }

  .nav-bar {
    float: right;
  }
}

</style>
