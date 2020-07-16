<template>
<div class="main">
    <div class="tempChgs">
        <div class="tempChg1 tempChg" @click="tempCF('C')"><p>℃</p></div>
        <div class="tempChg2 tempChg" @click="tempCF('F')"><p>℉</p></div>
    </div>        
    <div class="days">
        <div class="day1 day">
            <h3>tomorrow</h3>
            <img :src="$store.state.links[$store.state.cityWeather[1].weather_state_abbr]" alt="">
            <div>
              <span class="min" v-if="$store.state.CtoF">{{Math.round($store.state.cityWeather[1].max_temp) }}°C&emsp;</span>  
              <span class="min" v-else>{{Math.round($store.state.cityWeather[1].max_temp * 1.8 +33)}}°F&nbsp;&nbsp;</span>

              <span class="max" v-if="$store.state.CtoF">{{Math.round($store.state.cityWeather[1].min_temp) }}°C&nbsp;&nbsp;</span>  
              <span class="max" v-else>{{Math.round($store.state.cityWeather[1].min_temp * 1.8 +33)}}°F&nbsp;&nbsp;</span>    
            </div>
            
        </div>
        <div class="day2 day">
            <h3>{{$store.state.dates[1]}}</h3>
             <img :src="$store.state.links[$store.state.cityWeather[2].weather_state_abbr]" alt="">
            <div>
              <span class="min" v-if="$store.state.CtoF">{{Math.round($store.state.cityWeather[2].max_temp) }}°C&nbsp;&nbsp;</span>  
              <span class="min" v-else>{{Math.round($store.state.cityWeather[2].max_temp * 1.8 +33)}}°F&nbsp;&nbsp;</span>

              <span class="max" v-if="$store.state.CtoF">{{Math.round($store.state.cityWeather[2].min_temp) }}°C&nbsp;&nbsp;</span>  
              <span class="max" v-else>{{Math.round($store.state.cityWeather[2].min_temp * 1.8 +33)}}°F&nbsp;&nbsp;</span>    
            </div>
        </div>
        <div class="day3 day">
            <h3>{{$store.state.dates[2]}}</h3>
             <img :src="$store.state.links[$store.state.cityWeather[3].weather_state_abbr]" alt="">
            <div>
              <span class="min" v-if="$store.state.CtoF">{{Math.round($store.state.cityWeather[3].max_temp) }}°C&nbsp;&nbsp;</span>  
              <span class="min" v-else>{{Math.round($store.state.cityWeather[3].max_temp * 1.8 +33)}}°F&nbsp;&nbsp;</span>

              <span class="max" v-if="$store.state.CtoF">{{Math.round($store.state.cityWeather[3].min_temp) }}°C&nbsp;&nbsp;</span>  
              <span class="max" v-else>{{Math.round($store.state.cityWeather[3].min_temp * 1.8 +33)}}°F&nbsp;&nbsp;</span>    
            </div>
        </div>
        <div class="day4 day">
            <h3>{{$store.state.dates[3]}}</h3>
             <img :src="$store.state.links[$store.state.cityWeather[4].weather_state_abbr]" alt="">
            <div>
              <span class="min" v-if="$store.state.CtoF">{{Math.round($store.state.cityWeather[4].max_temp) }}°C&nbsp;&nbsp;</span>  
              <span class="min" v-else>{{Math.round($store.state.cityWeather[4].max_temp * 1.8 +33)}}°F&nbsp;&nbsp;</span>

              <span class="max" v-if="$store.state.CtoF">{{Math.round($store.state.cityWeather[4].min_temp) }}°C&nbsp;&nbsp;</span>  
              <span class="max" v-else>{{Math.round($store.state.cityWeather[4].min_temp * 1.8 +33)}}°F&nbsp;&nbsp;</span>    
            </div>
        </div>
        <div class="day5 day">
            <h3>{{$store.state.dates[4]}}</h3>
             <img :src="$store.state.links[$store.state.cityWeather[5].weather_state_abbr]" alt="">
            <div>
              <span class="min" v-if="$store.state.CtoF">{{Math.round($store.state.cityWeather[5].max_temp) }}°C&nbsp;&nbsp;</span>  
              <span class="min" v-else>{{Math.round($store.state.cityWeather[5].max_temp * 1.8 +33)}}°F&nbsp;&nbsp;</span>

              <span class="max" v-if="$store.state.CtoF">{{Math.round($store.state.cityWeather[5].min_temp) }}°C&nbsp;&nbsp;</span>  
              <span class="max" v-else>{{Math.round($store.state.cityWeather[5].min_temp * 1.8 +33)}}°F&nbsp;&nbsp;</span>    
            </div>
        </div>
        
    </div>

    <div class="todays">
      <h1>Today’s Hightlights</h1>  
    </div>

    <div class="infos">
        <div class="info1 info">
            <h1>Wind status</h1>
            <h2><span >{{Math.round($store.state.cityWeather[0].wind_speed)}}</span><span class="cinfo">mph</span></h2>
            <div class="esDiv" :style="{ transform: 'rotate(' + Math.round($store.state.cityWeather[0].wind_direction) +'deg)'}"><span class="material-icons es">navigation</span></div><span class="wnm">&nbsp;{{$store.state.cityWeather[0].wind_direction_compass}}</span>
        </div>
        <div class="info2 info">
            <h1>Humidity</h1>
            <h2>{{Math.round($store.state.cityWeather[0].humidity)}}<span class="cinfo">%</span></h2>
            <div class="hum">
                <div class="huma">
                    <span class="huma1">0</span><span class="huma2">50</span><span class="huma3">100</span>
                    <div class="cizgi"><div :style="{width: $store.state.cityWeather[0].humidity + '%' }" class="rcizgi" ></div></div>
                    <span class="huma4">%</span>
                </div>

            </div>
        </div>
        <div class="info3 info">
            <h1>Visibility</h1>
            <h2>{{Math.round($store.state.cityWeather[0].visibility)}}<span class="cinfo">miles</span></h2>
        </div>
        <div class="info3 info">
            <h1>Air Pressure</h1>
            <h2>{{Math.round($store.state.cityWeather[0].air_pressure)}}<span class="cinfo">mb</span></h2>
        </div>
        <p>muhsin61@DevChalllenges.io</p>
    </div>
    
</div>
    
</template>
<script>
export default {
    name: "Info",
    data: function () {
    return {
      
    }
  },
    methods:{
        tempCF(cf){
            if(cf==="C"){
              this.$store.state.CtoF = true;  
            }
            else{this.$store.state.CtoF = false; }
        }
    }
}
</script>
<style scoped>
.main{
    position: relative;
    float: left;
    width: 69%;
    background: #100E1D;
    height: auto;
}
.tempChgs{
    text-align: right;
    position: relative;
    top: 10px;
    right: 12%;
    margin-bottom: 30px;
}
.tempChg{
    position: relative;
    display: inline-block;
    border-radius: 10px;
    width: 40px;
    height: 40px;
    background: #E7E7EB;
    border-radius: 54px;
    margin: 5px;

}
.tempChg p{
    display: inline-block;
    position: relative;
    top: -8px;
    left: -13px;
    font-family: Raleway;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;
}
.tempChg1{
    background: #E7E7EB;
    border-radius: 50px;
    color: #110E3C;
}
.tempChg2{
    background: #585676;
    border-radius: 50px;
    color: #E7E7EB;
}
.days{
    width: 100%;
    position: relative;
    text-align: center;
    margin: auto 0;
    float: left;
}
.day{
    position: relative;
    display: inline-block;
    width: 120px;
    height: 177px;
    background: #1E213A;
    margin: 10px;
}
.day h3{
    font-family: Raleway;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #E7E7EB;
}
.day img{
    position: relative;
    width: 70%;
}
.infos{
    text-align: center;
    float: left;
}
.info{
    position: relative;
    display: inline-block;
    width: 328px;
    height: 174px;
    background: #1E213A;
    margin: 10px;
    overflow :hidden;
    padding-top: 30px;
}
.info3, .info4{
    height: 160px;
}
.info h1{
    font-family: Raleway;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #E7E7EB;
    padding: 0;
    margin: 0;
}
.info h2{
    font-family: Raleway;
    font-style: normal;
    font-weight: bold;
    font-size: 64px;
    line-height: 75px;
    text-align: center;
    color: #E7E7EB;
    padding: 0;
    margin: 0;
}
.min{
    font-family: Raleway;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #E7E7EB;
}
.max{
    font-family: Raleway;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #A09FB1;
}
.todays{
    position: relative;
    width: 100%;
    left: 12%;
}
.todays h1{
    float: left;
    font-family: Raleway;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    color: #E7E7EB;
}
.cinfo{
    font-family: Raleway;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 75px;
    text-align: center;
    color: #E7E7EB;
}
.wnm{
    font-family: Raleway;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #E7E7EB;
}
.esDiv{
    display: inline-block;
    width: 29.49px;
    height: 29.49px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50px;
}
.es{
    padding: 0;
    margin: 0;
}
.hum{
    text-align: center;
}
.huma{
    position: relative;
    left: 10%;
    width: 80%;
    text-align: center;
}
.huma1{
    float: left;
}
.huma3{
    float: right;
}
.huma4{
    float: right;
}
.huma span{
    font-family: Raleway;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    color: #A09FB1;
}
.cizgi{
    position: relative;
    width: 100%;
    height: 8px;
    border-radius: 5px;
    background: #E7E7EB;
}
.rcizgi{
    position: relative;
    height: 8px;
    width: 50%;
    background: #FFEC65;
    border-radius: 80px;
}
@media only screen and (max-width: 15cm){
    .main{
        width: 100%;
    }
    .info{
        margin: 0;
        margin-bottom: 20px;
    }
}
</style>