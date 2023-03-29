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

    const weatherStateMapIcon = {
      0: '⭐',
      1: '🌤️',
      2: '🌥️',
      3: '☁️',
      45: '🌫️',
      48: '❄️',
      51: '🌦️',
      53: '🌦️',
      55: '🌦️',
      56: '🌨️',
      57: '🌨️',
      61: '🌧️',
      63: '🌧️',
      65: '🌧️',
      66: '🌧️',
      67: '🌧️',
      71: '❄️',
      73: '❄️',
      75: '❄️',
      77: '❄️',
      80: '🌧️',
      81: '🌧️',
      82: '🌧️',
      85: '❄️',
      86: '❄️',
    };

    const weatherStateMapText = {
      0: 'Чистое небо',
      1: 'Преимущественно ясно',
      2: 'Переменная облачность',
      3: 'Пасмурно',
      45: 'Туман',
      48: 'Изморозь',
      51: 'Морось',
      53: 'Морось',
      55: 'Морось',
      56: 'Ледяная морось',
      57: 'Ледяная морось',
      61: 'Дождь',
      63: 'Дождь',
      65: 'Дождь',
      66: 'Ледяной дождь',
      67: 'Ледяной дождь',
      71: 'Снегопад:',
      73: 'Снегопад:',
      75: 'Снегопад:',
      77: 'Снегопад:',
      80: 'Ливневые дожди',
      81: 'Ливневые дожди',
      82: 'Ливневые дожди',
      85: 'Снег',
      86: 'Снег',
    };

    return isLoading
      ? `
        <div class="spinner-grow text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>`
      : ` 
        <div class="card border-light mb-3" style="max-width: 18rem;">
          <div class="card-header">Сейчас в Гомеле:</div>
          <div class="card-body">
            <h5 class="card-title fs-1" >🌡️ ${weather?.current_weather?.temperature} &#176;</h5>
            <p class="card-text float-end fs-1">${
              weatherStateMapIcon[weather?.current_weather?.weathercode]
            }</p>
            <p class="card-text fs-5 text-success-emphasis ">${
              weatherStateMapText[weather?.current_weather?.weathercode]
            }</p>
          </div>
        </div>
      `;
  }
}

customElements.define('it-weather', Weather);
