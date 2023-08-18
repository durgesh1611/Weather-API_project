class UI{
    constructor(){
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.pressure = document.getElementById('w-pressure');
        this.feels_like = document.getElementById('w-feels-like');
        this.wind_speed = document.getElementById('w-wind_speed');

    }

    paint(weather){
        this.location.textContent = `${weather.name}, ${weather.sys.country}`;
        this.desc.textContent = weather.weather[0].main;
        this.string.textContent = `${weather.main.temp} ℃`
        this.icon.setAttribute('src',`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
        this.humidity.textContent = `Relative Humidity : ${weather.main.humidity} g/m3`;
        this.pressure.textContent = `Pressure : ${weather.main.pressure} milibar`;
        this.feels_like.textContent = `Feels-like : ${weather.main.feels_like} ℃`;
        this.wind_speed.textContent = `Wind Speed : ${weather.wind.speed} km/hr`;

    }
};
