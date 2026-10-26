import './WeatherCard.css'

const icons = {
  sunny: '☀️',
  cloudy: '☁️',
  rain: '🌧️',
  snow: '❄️',
}

function WeatherCard({ city, tempF, condition, windMph }) {
  let advice = ''
  let adviceClass = ''

  if (tempF <= 32) {
    advice = 'Freezing: heavy coat, hat and gloves'
    adviceClass = 'weather-card__advice--freezing'
  } else if (tempF <= 50) {
    advice = 'Cold: wear a jacket'
    adviceClass = 'weather-card__advice--cold'
  } else if (tempF <= 75) {
    advice = 'Nice: a light layer is fine'
    adviceClass = 'weather-card__advice--nice'
  } else {
    advice = 'Hot: shorts and plenty of water'
    adviceClass = 'weather-card__advice--hot'
  }

  let alert = null
  if (condition === 'snow' && tempF <= 32) {
    alert = 'Check for school delays'
  } else if (windMph >= 25) {
    alert = 'Wind advisory'
  }

  return (
    <div className="weather-card">
      <h3>
        {city}: {tempF}°F
      </h3>

      <p className="weather-card__icon">{icons[condition]}</p>
      <p className={`weather-card__advice ${adviceClass}`}>{advice}</p>

      {condition === 'rain' && <p>Bring an umbrella ☂️</p>}

      {alert && <p className="weather-card__alert">⚠️ {alert}</p>}
    </div>
  )
}

export default WeatherCard