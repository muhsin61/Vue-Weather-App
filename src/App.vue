<template>
  <div id="app">
    <div v-if="$store.state.wait" class="wait"><span class="material-icons">search</span></div>
    <div v-else class="main">
      <Search />
      <Info />
    </div>
  </div>
</template>

<script>
import Search from './components/Search.vue'
import Info from './components/Info.vue'

export default {
  name: 'App',
  components: {
    Search,
    Info
  },
  created: function () {//Istanbul: https://www.metaweather.com/api/location/2344116/ +++ consolidated_weather
                      //https://www.metaweather.com/api/location/search/?query=istan  city search

    this.$store.commit("search",2344116);
    this.$store.commit("dates",);
    this.$store.state.title = "Istanbul";
    

  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
}
.wait{
  display: flex;
  position: relative;
  justify-content: center;
  text-align: center;
  top: 300px;
  
}
.wait span{
  font-size: 50px;
  position: relative;
  display: block;
  transition: 0.8;
  animation-name: example;
  animation-duration: 4s;
  animation-iteration-count: infinite;
}
@keyframes example {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(2);
  }
  50% {
    transform: scale(2);
  }
  100% {
    transform: scale(1);
  }
}
</style>
