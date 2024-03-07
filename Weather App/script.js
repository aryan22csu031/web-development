let bg = document.querySelector("#images");
let weather = document.querySelector(".weather");
let dets = document.querySelector(".dets");
let container = document.querySelector(".container");
let inputval = document.querySelector(".srch input");
let srchbtn = document.querySelector(".srch button");
let cityname = document.querySelector(".weather h2");
let weathername = document.querySelector(".name h3");
let temp = document.querySelector("#temp_param");
let pressure = document.querySelector("#pressure_param");
let speed = document.querySelector("#speed_param");
let emojis = document.querySelector(".weather img");
console.log(emojis[0])
console.log(emojis[1])
console.log(emojis[2])
console.log(emojis[3])
let apikey = "b3ea7b6499230e0cc50fc1062319d21f";

async function getdata() {
    let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputval.value}&units=metric&appid=${apikey}`);
    console.log(res);
    if (res.status == "404") {
        container.style.height = "36rem";
        weather.style.display = "flex";
        cityname.innerText = "Location not found :(";
        cityname.style.fontSize = "27px";
        dets.style.display = "none";
        bg.style.display = "block";//3
        bg.src = "weather converted/404.png";
        emojis.style.display = "block";
        emojis.src = "emojis/404.png";
        emojis.style.height = "262px";
        emojis.style.top = "7rem"
        cityname.style.bottom = "-16rem";
        cityname.style.color="red";
        return;
    } else {
        let data = await res.json();
        let t = data.main.temp;
        let s = data.wind.speed;
        console.log(data)
        container.style.height = "36rem";
        weather.style.display = "flex";
        dets.style.display = "flex";
        emojis.style.height = "140px";
        emojis.style.top = "7rem"
        cityname.innerText = (inputval.value).toUpperCase();
        cityname.style.bottom = "-7rem";
        temp.innerText = t + " °C";
        speed.innerText = s + " km/h";
        pressure.innerText = data.main.pressure + " Pa";
        if (t > 20 && t < 30) {
            bg.style.display = "block";//3
            bg.src = "weather converted/warm.jpg";
            emojis.style.display = "block";
            emojis.src = "emojis/warm_em.png";
            weathername.innerText = "Warm";
            weathername.style.color = "orange";
        } else if (t > 30 && t < 50) {
            bg.style.display = "block";//0
            bg.src = "weather converted/hot.jpg";
            emojis.style.display = "block";
            emojis.src = "emojis/hot_em.png";
            weathername.innerText = "Hot";
            weathername.style.color = "red";
        } else if ((t > 20 && t < 30) && (s > 20 && s < 30)) {
            bg.style.display = "block"; //1
            bg.src = "weather converted/rainy.jpg";
            emojis.style.display = "block";
            emojis.src = "emojis/rainy_em.png";
            weathername.innerText = "Rainy";
            weathername.style.color = "blue";
        } else if (t > 20 && t < 30 && s > 30) {
            bg.style.display = "block"; //2
            bg.src = "weather converted/thunderstorm.jpg";
            emojis.style.display = "block";
            emojis.src = "emojis/thunderstorm_em.png";
            weathername.innerText = "Thunder";
            weathername.style.color = "grey";
        } else if (t < 20) {
            bg.style.display = "block";
            bg.src = "weather converted/snowy.jpg";//4
            emojis.style.display = "block";
            emojis.src = "emojis/snow_em.png";
            weathername.innerText = "Cold";
            weathername.style.color = "darkblue";
        }
    }
}