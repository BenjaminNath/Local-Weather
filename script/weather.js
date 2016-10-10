$(document).ready(function(){
  
  //variables
  var lat;
  var long;
  var url;
  var city;
  var temp;
  var weather;
  var main;
  var iconID;
  
  //get geolocation
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(data){
      lat = data.coords.latitude;
      long = data.coords.longitude;
      
      url = "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&appid=da613b55ed72d67653e099fafcf8a73f";
      
      //get data from api
      $.getJSON(url, function(w){
        city = w.name;
        temp = Math.round(9/5 * (w.main.temp - 273.15) + 32);
        weather = w.weather[0].description;
        iconID = w.weather[0].id;
        
        //load data
        $('#city').text(city);
        $('#temp').html(temp + "&degF");
        getIcon();
        
        //uppercase the first letter
        weather = weather.charAt(0).toUpperCase() + weather.slice(1);
        $('#weather-description').text(weather);
        
        function getIcon(){
          //thunderstorm
          if(iconID >= 200 && iconID < 300){
            $("#icon").attr("class", " wi wi-thunderstorm");
          }
          //sprinkls
          if(iconID >= 300 && iconID < 400){
            $("#icon").attr("class", " wi wi-sprinkle");
          }
          //rain/showers
          if(iconID >= 500 && iconID < 600){
            if(iconID == 500 || iconID >= 520){
              $("#icon").attr("class", "wi wi-rain")
            }
            $("#icon").attr("class", " wi wi-showers");
          }
          //snow
          if(iconID >= 600 && iconID < 700){
            $("#icon").attr("class", " wi wi-snow");
          }
          //fog
          if(iconID >= 700 && iconID < 800){
            $("#icon").attr("class", " wi wi-fog");
          }
          //sunny
          if(iconID == 800){
            $("#icon").attr("class", " wi wi-day-sunny");
          }
          //overcast
          if(iconID == 801){
            $("#icon").attr("class", " wi wi-day-sunny-overcast");
          }
          // cloudy
          if(iconID >= 802 || iconID <= 804){
            $('#icon').attr("class", "wi wi-cloudy");
          }
          // tornado
          if(iconID == 900){
            $("#icon").attr("class", " wi wi-tornado");
          }
          // extreme thunderstorm
          if(iconID == 901 || iconID == 960 || iconID == 961){
            $("#icon").attr("class", " wi wi-thunderstorm");
          }
          // hurricane
          if(iconID == 902 || iconID == 962){
            $("#icon").attr("class", " wi wi-hurricane");
          }
          //extreme snow
          if(iconID == 903){
            $("#icon").attr("class", " wi wi-snowflake-cold");
          }
          //extrme hot
          if(iconID == 904){
            $("#icon").attr("class", " wi wi-hot");
          }
          //extreme wind
          if(iconID == 905){
            $("#icon").attr("class", " wi wi-strong-wind");
          }
          //hail
          if(iconID == 906){
            $("#icon").attr("class", " wi wi-hail");
          }
          // extreme sun
          if(iconID == 951){
            $("#icon").attr("class", "wi wi-day-sunny");
          }
          //extreme wind
          if(iconID >= 952 && iconID <= 956){
            $("#icon").attr("class", "wi wi-windy");
          }
          // strong wind
          if(iconID >= 957 && iconID <= 959){
            $("#icon").attr("class", "wi wi-strong-wind");
          }
        }
        
      });// end $.getJSON(api...)
    }); //end navigator.geolocation
  }
});