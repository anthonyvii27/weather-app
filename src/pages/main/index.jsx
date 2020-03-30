import React, { useState, useEffect } from 'react'
import api from '../../services/api'

import LoaderSpinner from '../../components/LoaderSpinner'
import { Screen, Content, Location, Temp, OtherTemp, Description, Info, Center } from './styles'

import wind from './images/wind.png'
import humidity from './images/humidity.png'
import arrow from './images/arrow.png'
import info from './images/info.png'

export default function Main() {
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')

  const [weather, setWeather] = useState([])
  const [valueSearched, setValueSearched] = useState('')
  const [unit, setUnit] = useState('cel')
  const [alert, setAlert] = useState('')

  const key = 'b6907d289e10d714a6e88b30761fae22'

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
    await api.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`)
    .then(response => {
      setWeather(response)
      setAlert(null)
    })
    .catch(error => {
      console.log(error.response)
    })
  }

  function getResult(){
    api.get(`https://api.openweathermap.org/data/2.5/weather?q=${valueSearched}&appid=${key}`)
    .then(response => {      
      setWeather(response)
      setAlert(null)
    })
    .catch(error => {
      setAlert('<div className="alert">Not finded</div>')
    })
  }

  useEffect(() => {
    if (alert !== '') document.getElementById('alert').innerHTML = alert;
    if (latitude !== '' && longitude !== '' && valueSearched === '') getWeatherData();
  })
  

  return (
    <Screen>
      <Content>
        {(weather != '') ? 
          <>
            <Center><div id="alert" /></Center>
            <div className="search">
              <input type="text" id="search" name="search" placeholder="City name" onChange={e => setValueSearched(e.target.value)} />
              <button type="button" className="btn" onClick={e => getResult()}>Search</button>
              <select className="unit" onChange={e => setUnit(e.target.value)}>
                <option value="cel">Celsius</option>
                <option value="fah">Fahrenheit</option>
              </select>
            </div>

            <Location>{ weather.data.name + ', ' + weather.data.sys.country }</Location>
            
            <div className="temp_informations">
              <Temp>{ (unit === 'cel') ? Math.round(weather.data.main.temp) + '°' : Math.round((((weather.data.main.temp)) * 9) / 5 + 32) + '°' }</Temp>
              <div>
                <OtherTemp>{ (unit === 'cel') ? Math.round(weather.data.main.temp_min) + '° C' : Math.round((((weather.data.main.temp_min)) * 9) / 5 + 32) + '° F' }</OtherTemp>
                <hr />
                <OtherTemp>{ (unit === 'cel') ? Math.round(weather.data.main.temp_max) + '° C' : Math.round((((weather.data.main.temp_max)) * 9) / 5 + 32) + '° F' }</OtherTemp>
              </div>
            </div>

            <Description><img src={ arrow } /> { weather.data.weather[0].main }</Description>
            <Info><img src={ info } /> { weather.data.weather[0].description }</Info>
            <Info><img src={ wind } /> Speed: { weather.data.wind.speed }m/s</Info>
            <Info><img src={ humidity } /> Humidity: { weather.data.main.humidity }%</Info>
          </>        
        : 
          <LoaderSpinner /> 
        }
      </Content>
    </Screen>
  )
}