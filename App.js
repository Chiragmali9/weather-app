const apiKey = "39e0c5bab4d36db32092390b4f3d664d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);    if(response.status == 404){
        //used to display the error when invalid city is selected
        document.querySelector(".error").style.display = "block";
        //used to not display the weather information for invalid city
        document.querySelector(".weather").style.display = "none";
    }
    else{
        var data = await response.json();        console.log(data);        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML =Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";
        
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png";
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "images/rain.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "images/mist.png";
        }        //used to display the information for valid city
        document.querySelector(".weather").style.display = "block";
        //used to hide error message for the valid city 
        document.querySelector(".error").style.display = "none";
    }
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
checkWeather();