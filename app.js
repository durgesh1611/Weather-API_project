const storage = new Storage();

const weatherLocation = storage.getLocationData();
// create new weather Object
const weather = new Weather(weatherLocation.city);
const ui = new UI();


document.addEventListener('DOMContentLoaded', getWeather);


function getWeather(){
    weather.getWeather()
        .then(results => ui.paint(results))
        .catch(err=>console.log(err));
}


document.getElementById('w-change-btn').addEventListener('click',(e)=>{
    const city = document.getElementById('city').value ;

    weather.changeLocation(city);

    storage.setLocationData(city);
    //get and display weather
    getWeather();

//close modal
    $('#locModal').modal('hide');
})


