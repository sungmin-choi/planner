
const weather_box = document.getElementById("weather");
const API_KEY="ffa49c427fc030ecc66571b55d38509b";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then((data)=>{ 
        const name=data.name
        const weather=data.weather[0].main;
        const temp=data.main.temp;
        const feels_like=data.main.feels_like;
        document.getElementById("weather_now").innerText=`${weather}`;
        document.getElementById("weather_name").innerText=`${name}`;
        document.getElementById("weather_temp").innerText=`${temp}℃`;
        document.getElementById("weather_feels").innerText=`체감온도 ${feels_like}℃`;

    });
}

function onGeoError(){
    alert("Can't find you no weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);