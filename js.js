"use strict";

const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const city = document.querySelector(".city");
const temp = document.querySelector(".temp");
const desc = document.querySelector(".desc");

const img = document.querySelector("#image");

btn.addEventListener("click", () => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=e0016c665661a14805d06ab7ae36d272`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      if (isNaN(parseFloat(input.value)) && data.name) {
        //if string is not a number and city name is valid
        let cityValue = data.name;
        let tempValue = Math.round(data.main.temp - 273.15);
        let descValue = data.weather[0].description;

        let imgValue = data.weather[0].icon;

        city.innerHTML = cityValue;
        city.style.color = "#fff";
        temp.innerHTML = `${tempValue} °C`;
        desc.innerHTML = descValue;

        img.style.display = "block";
        img.setAttribute(
          "src",
          `http://openweathermap.org/img/wn/${imgValue}@2x.png`
        );
      } else {
        city.innerHTML = "Not a valid city name";
        city.style.color = "#DC143C";
        temp.innerHTML = "";
        desc.innerHTML = "";
        img.style.display = "none";
      }
    });
});
