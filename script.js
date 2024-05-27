const apiKey="17d4e386681dfc0c1d81c6e15b7659e4";  //API Key from the site "openweather"
const API_ENDPOINT="https://api.openweathermap.org/data/2.5/weather?units=metric&q="; //URL of the site "openweather"
const searchBox = document.querySelector(".search input");   //get the field of input in the search class in HTML
const searchBtn = document.querySelector(".search button");   //get the field of button in the search class in HTML
const weatherIcon = document.querySelector(".weather-icon");  //get the weather-icon class in HTML
async function checkweather(city){                             //asyncrone function
    const response = await fetch(API_ENDPOINT + city + `&appid=${apiKey}`);  //fetch
        var data = await response.json();                                    //get the response and put it in the data variable
        document.querySelector(".city").innerHTML = data.name;    //update city name
        document.querySelector(".temp").innerHTML =Math.round(data.main.temp)  + "°C";    //update temprature
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";    //update humidity
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";    //update wind
    
        if (data.weather[0].main== "clouds"){        
        weatherIcon.src = "image/clouds.png";
       }else if (data.weather[0].main== "clear"){
        weatherIcon.src = "image/clear.png";
       }else if (data.weather[0].main== "rain"){
        weatherIcon.src = "image/rain.png";
       }else if (data.weather[0].main== "drizzle"){
        weatherIcon.src = "image/drizzle.png";
       }else  {
        weatherIcon.src = "image/mist.png";
      }
      document.querySelector(".weather").computedStyleMap.display = "block";
    }  

searchBtn.addEventListener("click" ,()=>{
    checkweather(searchBox.value);             //call the function checkweather
})
