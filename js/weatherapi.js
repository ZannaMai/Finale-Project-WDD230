const apiURL = "https://api.openweathermap.org/data/2.5/weather?temperature&lat=38.98&lon=-77.09&units=imperial&appid=082ab106dd8a8209d0637abf917b514d";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    let temp = document.querySelector('#current-temp');
    temp.textContent = jsObject.main.temp.toFixed(1);

    let humidity = document.querySelector('#humidity');
    humidity.textContent = jsObject.main.humidity.toFixed(1);

    let conditions = document.querySelector('#conditions');
    conditions.textContent = jsObject.weather.main.toFixed();

    myMap.setWeatherAlertVisibility(true);
    const alertVisible = myMap.isWeatherAlertVisible();
    myMap.toggleWeatherAlertVisibility();
  });