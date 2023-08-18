 class Weather {
    constructor(city){
        this.apiKey = `3265874a2c77ae4a04bb96236a642d2f`;
        this.city = city;
        // this.state = state;
    }

    async getWeather(){
        document.getElementById('w-desc').innerHTML = `<h3> Loading... <h3>`
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=metric`);

        const responseData = await response.json();
        console.log(responseData);
        return responseData;
    }

    changeLocation(city){
        this.city = city;
        
    }
}; 