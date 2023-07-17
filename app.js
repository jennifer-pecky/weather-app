let input = document.querySelector(".search_input");
let loca = document.getElementById("location");
let temp = document.getElementById("temperature");
let cond = document.getElementById("condition");
let cloud = document.getElementById("cloud");
let image = document.getElementById("image")
let forcast = document.querySelector(".forcast");
let country = document.getElementById("country");
function moveCursorToMiddle(input) {
    let length = input.value.length;
    input.setSelectionRange(length, length);
};

input.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
    }

    let apiKey = "5c5627877e7b9963f4f8193dc7e0b80d";
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}`;
    fetch(api)
        .then((response) => response.json())
        .then((data) => {
            temp.innerText = `${data.main.temp} °c`;
            cloud.innerText = data.weather[0].main;
            country.innerText = `${data.name}, ${data.sys.country}`

            // console.log(data.weather[0].main);
            console.log(data);
            if (data.weather[0].main === 'Cloud') {
                image.src = 'storm.png';
            } else if (data.weather[0].main === 'Rain') {
                image.src = 'hurt.png'
            } else if (data.weather[0].main === 'Clear') {
                image.src = 'sunrise.png'
            }

        })

        .catch(error => {
            console.log('An error occurred:', error);
        });


})













