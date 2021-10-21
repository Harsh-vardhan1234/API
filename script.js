function getDetails(place){

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=736412f27570e2880986e590ae7278fc`)
    .then(abc => abc.json())
    .then(abc => document.getElementById('name').innerHTML = abc.name)

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=736412f27570e2880986e590ae7278fc`)
    .then(abc => abc.json())
    .then(abc => document.getElementById('country').innerHTML = abc.sys.country)

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=736412f27570e2880986e590ae7278fc`)
    .then(abc => abc.json())
    .then(abc => document.getElementById('temp').innerHTML = parseInt(abc.main.temp-273.15)+"°C")

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=736412f27570e2880986e590ae7278fc`)
    .then(abc => abc.json())
    .then(abc => document.getElementById('maxtemp').innerHTML = parseInt(abc.main.temp_max-273.15)+"°C")

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=736412f27570e2880986e590ae7278fc`)
    .then(abc => abc.json())
    .then(abc => document.getElementById('mintemp').innerHTML = parseInt(abc.main.temp_min-273.15)+"°C")

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=736412f27570e2880986e590ae7278fc`)
    .then(abc => abc.json())
    .then(abc => document.getElementById('lat').innerHTML = abc.coord.lat)

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=736412f27570e2880986e590ae7278fc`)
    .then(abc => abc.json())
    .then(abc => document.getElementById('lon').innerHTML = abc.coord.lon)

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=736412f27570e2880986e590ae7278fc`)
    .then(abc => abc.json())
    .then(abc => document.getElementById('visibility').innerHTML = abc.visibility)

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=736412f27570e2880986e590ae7278fc`)
    .then(abc => abc.json())
    .then(abc => document.getElementById('pressure').innerHTML = abc.main.pressure)

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=736412f27570e2880986e590ae7278fc`)
    .then(abc => abc.json())
    .then(abc => document.getElementById('humidity').innerHTML = abc.main.humidity)
}

function callme(){
    var myplace = document.getElementById('place').value;
    getDetails(myplace)
}
