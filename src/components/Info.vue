<template>
<div class="main">
    <div class="tempChangeFtoC">
        <div class="tempChg tempChg1" @click="tempCF('C')"><p>℃</p></div>
        <div class="tempChg tempChg2" @click="tempCF('F')"><p>℉</p></div>
    </div>        
    <div class="days">
        <div class="day1 day">
            <h3>tomorrow</h3>
            <img :src="$store.state.weatherImgLinks[$store.state.cityWeather[1].weather_state_abbr]" alt="">
            <div>
              <span class="min" v-if="$store.state.CtoF">{{Math.round($store.state.cityWeather[1].max_temp) }}°C&emsp;</span>  
              <span class="min" v-else>{{Math.round($store.state.cityWeather[1].max_temp * 1.8 +33)}}°F&nbsp;&nbsp;</span>

              <span class="max" v-if="$store.state.CtoF">{{Math.round($store.state.cityWeather[1].min_temp) }}°C&nbsp;&nbsp;</span>  
              <span class="max" v-else>{{Math.round($store.state.cityWeather[1].min_temp * 1.8 +33)}}°F&nbsp;&nbsp;</span>    
            </div>
            
        </div>
        <div class="day2 day">
            <h3>{{$store.state.days[1]}}</h3>
             <img :src="$store.state.weatherImgLinks[$store.state.cityWeather[2].weather_state_abbr]" alt="">
            <div>
              <span class="min" v-if="$store.state.CtoF">{{Math.round($store.state.cityWeather[2].max_temp) }}°C&nbsp;&nbsp;</span>  
              <span class="min" v-else>{{Math.round($store.state.cityWeather[2].max_temp * 1.8 +33)}}°F&nbsp;&nbsp;</span>

              <span class="max" v-if="$store.state.CtoF">{{Math.round($store.state.cityWeather[2].min_temp) }}°C&nbsp;&nbsp;</span>  
              <span class="max" v-else>{{Math.round($store.state.cityWeather[2].min_temp * 1.8 +33)}}°F&nbsp;&nbsp;</span>    
            </div>
        </div>
        <div class="day3 day">
            <h3>{{$store.state.days[2]}}</h3>
             <img :src="$store.state.weatherImgLinks[$store.state.cityWeather[3].weather_state_abbr]" alt="">
            <div>
              <span class="min" v-if="$store.state.CtoF">{{Math.round($store.state.cityWeather[3].max_temp) }}°C&nbsp;&nbsp;</span>  
              <span class="min" v-else>{{Math.round($store.state.cityWeather[3].max_temp * 1.8 +33)}}°F&nbsp;&nbsp;</span>

              <span class="max" v-if="$store.state.CtoF">{{Math.round($store.state.cityWeather[3].min_temp) }}°C&nbsp;&nbsp;</span>  
              <span class="max" v-else>{{Math.round($store.state.cityWeather[3].min_temp * 1.8 +33)}}°F&nbsp;&nbsp;</span>    
            </div>
        </div>
        <div class="day4 day">
            <h3>{{$store.state.days[3]}}</h3>
             <img :src="$store.state.weatherImgLinks[$store.state.cityWeather[4].weather_state_abbr]" alt="">
            <div>
              <span class="min" v-if="$store.state.CtoF">{{Math.round($store.state.cityWeather[4].max_temp) }}°C&nbsp;&nbsp;</span>  
              <span class="min" v-else>{{Math.round($store.state.cityWeather[4].max_temp * 1.8 +33)}}°F&nbsp;&nbsp;</span>

              <span class="max" v-if="$store.state.CtoF">{{Math.round($store.state.cityWeather[4].min_temp) }}°C&nbsp;&nbsp;</span>  
              <span class="max" v-else>{{Math.round($store.state.cityWeather[4].min_temp * 1.8 +33)}}°F&nbsp;&nbsp;</span>    
            </div>
        </div>
        <div class="day5 day">
            <h3>{{$store.state.days[4]}}</h3>
             <img :src="$store.state.weatherImgLinks[$store.state.cityWeather[5].weather_state_abbr]" alt="">
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
        <div class="info">
            <h1>Wind status</h1>
            <h2><span >{{Math.round($store.state.cityWeather[0].wind_speed)}}</span><span class="infoName">mph</span></h2>
            <div class="windDirection" :style="{ transform: 'rotate(' + Math.round($store.state.cityWeather[0].wind_direction) +'deg)'}"><span class="material-icons windIcon">navigation</span></div>
            <span class="windDirectionName">&nbsp;{{$store.state.cityWeather[0].wind_direction_compass}}</span>
        </div>
        <div class="info">
            <h1>Humidity</h1>
            <h2>{{Math.round($store.state.cityWeather[0].humidity)}}<span class="infoName">%</span></h2>
            <div class="humidity">
                <div class="humidityInfo">
                    <span class="humi0">0</span><span>50</span><span class="humi100">100</span>
                    <div class="lineDiv"><div :style="{width: $store.state.cityWeather[0].humidity + '%' }" class="line" ></div></div>
                    <span class="humiPerCent">%</span>
                </div>
            </div>
        </div>
        <div class="info">
            <h1>Visibility</h1>
            <h2>{{Math.round($store.state.cityWeather[0].visibility)}}<span class="infoName">miles</span></h2>
        </div>
        <div class="info">
            <h1>Air Pressure</h1>
            <h2>{{Math.round($store.state.cityWeather[0].air_pressure)}}<span class="infoName">mb</span></h2>
        </div>
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
            else{
                this.$store.state.CtoF = false; 
                }
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
.tempChangeFtoC{
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
.infoName{
    font-family: Raleway;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 75px;
    text-align: center;
    color: #E7E7EB;
}
.windDirection{
    display: inline-block;
    width: 29.49px;
    height: 29.49px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50px;
}
.windIcon{
    padding: 0;
    margin: 0;
}
.windDirectionName{
    font-family: Raleway;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #E7E7EB;
}
.humidity{
    text-align: center;
}
.humidityInfo span{
    font-family: Raleway;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    color: #A09FB1;
}
.humidityInfo{
    position: relative;
    left: 10%;
    width: 80%;
    text-align: center;
}
.humi0{
    float: left;
}
.humi100{
    float: right;
}
.humiPerCent{
    float: right;
}
.lineDiv{
    position: relative;
    width: 100%;
    height: 8px;
    border-radius: 5px;
    background: #E7E7EB;
}
.line{
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