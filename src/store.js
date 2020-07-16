import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
      wait: false,
      dates: ["","","","","",""],
      CtoF: true,
      cities: "",
      cityWeather: Array,
      find: "",
      title: "",
      look: false,
      sn: "https://www.metaweather.com/static/img/weather/sn.svg",
      links:{"sn":"https://www.metaweather.com/static/img/weather/sn.svg",
             "sl":"https://www.metaweather.com/static/img/weather/sl.svg",
             "h":"https://www.metaweather.com/static/img/weather/h.svg",
             "t":"https://www.metaweather.com/static/img/weather/t.svg",
             "hr":"https://www.metaweather.com/static/img/weather/hr.svg",
             "lr":"https://www.metaweather.com/static/img/weather/lr.svg",  
             "s":"https://www.metaweather.com/static/img/weather/s.svg",
             "hc":"https://www.metaweather.com/static/img/weather/hc.svg",
             "lc":"https://www.metaweather.com/static/img/weather/lc.svg",
             "c":"https://www.metaweather.com/static/img/weather/c.svg"},
    },
    mutations: {
      search: (state, value) => {
        state.wait = true;
        getir(state, value)
        async function getir(state, value){
          await fetch("https://cors-anywhere.herokuapp.com/" + 'https://www.metaweather.com/api/location/' + value + '/')
          .then(response => response.json())
          .then(data => {
              console.log(data)
              state.cityWeather = data.consolidated_weather
          });
          state.wait = false;
        }

      },
      find:(state, value) => {
          state.wait = true;
          getir(state, value)
          async function getir(state, value){
                  await fetch("https://cors-anywhere.herokuapp.com/" + 'https://www.metaweather.com/api/location/search/?query=' + value)
                  .then(response => response.json())
                  .then(data => {
                      console.log(data)
                      state.cities = data
                  });
                  state.wait =false  
          }
          
      },
      dates:(state)=>{
        let d = new Date();
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let i =0
        for( i = 0; i<5 ;i++){
          d.setDate(d.getDate() + i)
          state.dates[i] = days[ d.getDay()] +" "+ d.getDate() +" "+  months[d.getMonth()];
          console.log("dates: "+ d)
        }
        
      }
    
    }
})