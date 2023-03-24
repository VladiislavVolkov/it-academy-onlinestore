import { Component } from '../../core/Component';
import { ApiService } from '../../services/ApiService';

class Weather extends Component {
  constructor() {
    super();
    this.api = new ApiService('https://api.open-meteo.com/v1');
    this.state = {
      isLoading: false,
      weather: {},
    };
  }

  setIsLoading(isLoading) {
    this.setState((state) => {
      return {
        ...state,
        isLoading,
      };
    });
  }

  getWeather() {
    this.setIsLoading(true);
    this.api
      .get('/forecast', {
        latitude: '52.4345',
        longitude: '30.9754',
        current_weather: true,
        hourly: 'temperature_2m,relativehumidity_2m,windspeed_10m',
      })
      .then((data) => {
        this.setState((state) => {
          return {
            ...state,
            isLoading: false,
            weather: data,
          };
        });
      });
  }

  componentDidMount() {
    this.getWeather();
  }

  render() {
    const { isLoading, weather } = this.state;

    const weathercode = this.state.weather.current_weather;
    console.log(weathercode);

    return isLoading
      ? `<div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>`
      : ` 
      <span class="placeholder col-12 bg-light">Погода в Гомеле:</span>
        <a class="btn btn-primary disabled placeholder col-4">${weather?.current_weather?.temperature}</a>
          <a class="btn btn-primary disabled placeholder col-4">${weather?.current_weather?.weathercode}</a>
      `;
  }
}

customElements.define('it-weather', Weather);
