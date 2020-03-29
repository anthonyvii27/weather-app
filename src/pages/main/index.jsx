import React, { useState, useEffect } from 'react'
import api from '../../services/api'

import LoaderSpinner from '../../components/LoaderSpinner'
import { Screen, Content, Location, Temp, OtherTemp, Description, Info } from './styles'

import clear from './images/clear.png'
import wind from './images/wind.png'
import humidity from './images/humidity.png'

export default function Main() {
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')

  const [weather, setWeather] = useState([])
  const key = 'PUT_YOUR_KEY_HERE'

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords

        setLatitude(latitude)
        setLongitude(longitude)
      },
      () => {
        setLatitude('34.0207305')
        setLongitude('-118.6919141')
      },
      {
        timeout: 30000,
      }
    )
  }, [])
  
  async function getWeatherData() {
    await api.get(`https://openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`)
    .then(response => {
      setWeather(response)
    })
    .catch(error => {
      console.log(error.response)
    })
  }

  if (latitude !== '' && longitude !== '') getWeatherData()  

  return (
    <Screen>
      <Content>
        {(weather != '') ? 
          <>
            <Location>{ weather.data.name + ', ' + weather.data.sys.country }</Location>
            
            <div className="temp_informations">
              <Temp>{ Math.round(weather.data.main.temp) + '°' }</Temp>
              <div>
                <OtherTemp>{ Math.round(weather.data.main.temp_min) + '° C' }</OtherTemp>
                <hr />
                <OtherTemp>{ Math.round(weather.data.main.temp_max) + '° C' }</OtherTemp>
              </div>
            </div>

            <Description><img src={clear} /> { weather.data.weather[0].main }</Description>
            <Info><img src={wind} /> Speed: { weather.data.wind.speed }</Info>
            <Info><img src={humidity} /> Humidity: { weather.data.main.humidity }</Info>
          </>        
        : 
          <LoaderSpinner /> 
        }
      </Content>
    </Screen>
  )
}