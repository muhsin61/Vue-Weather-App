<template>
  <div class="src">
    <div v-if="$store.state.getSearch" class="search">
      <div class="getBack" @click="getSearch">
        <p>X</p>
      </div>
      <form @submit.prevent="search">
          <input v-model="$store.state.find" type="text" placeholder="search location">
          <input type="submit" value="Search">
      </form>
      <ul>
        <li v-for="item in $store.state.cities" :key="item.woeid" @click="showCity(item.woeid,item.title)">{{item.title}}</li>
      </ul>
    </div>
    <div v-else class="show">
      <div class="searchDiv">
        <div class="searchButton" @click="getSearch">
          <p>Seach for places</p>
        </div>
        <div class="myLocation" @click="getMyLocation()">
          <p><span class="material-icons">my_location</span></p>
        </div>
      </div>
      <div class="texts">
        <img :src="$store.state.weatherImgLinks[$store.state.cityWeather[0].weather_state_abbr]" alt="weather">
        <h1 v-if="$store.state.CtoF">{{Math.round($store.state.cityWeather[0].the_temp)}}<span>°C</span></h1>
        <h1 v-else>{{Math.round($store.state.cityWeather[0].the_temp* 1.8 + 33) }}<span>°F</span></h1>
        <h2>{{$store.state.cityWeather[0].weather_state_name}}</h2>
        <h3>Today<span class="material-icons">scatter_plot</span>{{$store.state.days[0]}}</h3>
        <h3><span class="material-icons">location_on</span>{{$store.state.title}}</h3>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data: function () {
    return {
      
    }
  },
  methods:{
    search(event){
      console.log("gelen mesaj: " + this.$store.state.find);
      if(this.$store.state.find != ""){
        this.$store.commit("find",this.$store.state.find);
        event.preventDefault();
      }else{
        alert("Please write something...");
      }
      
    },
    showCity(src,title){
      this.$store.commit("search",src);
      console.log("gelen mesaj title: " + title);
      this.$store.state.title = title;
      this.$store.state.getSearch = false;
    },
    getSearch(){
      this.$store.state.getSearch = !this.$store.state.getSearch;
    },
    getMyLocation(){
      alert("There is not any location...");
    }
  }
}
</script>

<style scoped>
.src{
  box-sizing: border-box;
  position: relative;
  width: 31%;
  height: 829px;
  float: left;
  background: #1E213A;
  font-family: Raleway;
  font-style: normal;
}
.getBack{
  width: 100%;
  height: auto;
  text-align: none;
  position: relative;
  text-align: right;
}
.getBack p{
  position: relative;
  color: #E7E7EB;
  font-size: 20px;
  margin-right: 10px;
  z-index: 10;
  cursor: pointer;
  display: inline-block;
  padding: 5px;
}
form{
  width: 100%;
}
input[type=text]{
  position: relative;
  width: 268px;
  height: 48px;
  border: 1px solid #E7E7EB;
  box-sizing: border-box;
  width: 70%;
  background: #1E213A;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #616475;
}
input[type=submit]{
  position: relative;
  width: 86px;
  height: 48px;
  width: 20%;
  background: #3C47E9;
  border: none;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #E7E7EB;
}
li{
  display: flex;
  justify-content: left;
  padding-top: 20px;
  padding-left: 20px;
  margin-top: 10px;
  position: relative;
  width: 90%;
  height: 64px;
  border: 1px solid #616475;
  box-sizing: border-box;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #E7E7EB;
  list-style-type: none;
  cursor: pointer;
}
li:hover{
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.searchDiv{
  position: relative;
  margin-top: 32px;
  width: 100%;
  display: block;
  float: left;
}
.searchButton{
  position: relative;
  width: 161px;
  height: 40px;
  left: 10%;
  float: left;
  display: inline-block;
  background: #6E707A;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
}
.myLocation{
  position: relative;
  display: inline-block;
  color: aliceblue;
  right: 10%;
  float: right;
  cursor: pointer;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  z-index: 10;
}
.searchButton p,.myLocation p{
  position: relative;
  top: -7px;
}
.texts{
  position: relative;
  display: block;
  text-align: center;
  top: 50px;
  width: 100%;
  float: left;
}
img{
  position: relative;
  display: block;
  margin: auto;
  width: 202px;
  height: 234px;
}
.texts h1{
  font-weight: 500;
  font-size: 144px;
  line-height: 169px;
  color: #E7E7EB;
  margin: 0;
  padding: 0;
}
.texts h1 span{
  font-size: 40px;
  color: #6E707A;
  padding-top: 10px;
}
.texts h2{
  font-weight: 600;
  font-size: 36px;
  line-height: 42px;
  text-align: center;
  color: #A09FB1;
  margin: 0;
  padding: 0;
  padding-top: 10px;
}
.texts h3{
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  color: #88869D;
  margin: 0;
  padding: 0;
  padding-top: 40px;
}
.texts h3 span{
  position: relative;
  top: 5px;
}
@media only screen and (max-width: 15cm){
  .src{
    width: 100%;
  }
}
</style>
