'use client'
import React from "react";
import { useState } from "react";
import styles from './Main.module.css';

export default function Main() {
    const [city, setCity] = useState<string>("");
    const [zipcode, setZipcode] = useState<string>("");
    const [weather, setWeather] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);
    
async function fetchWeatherData(city: string) {
    try {
    const response = await api<any>(`https://api.openweathermap.org/data/2.5/weather?q=${city},${zipcode}&appid=e732cd12a2800fa58870a96de2329168&units=metric`)
    setWeather(response);
    setError(null);
} catch (error) {
    setError("Error fetching weather data")
    setWeather(null);
}
}

 // we need a function to handle the search to allow the user to search for a city to a weather forecast API
 function api<T>(url: string): Promise<T> {
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        return response.json() as Promise<T>
      })
  }
// handle search input change
  const handleSearchCity = (event: React.ChangeEvent<HTMLInputElement>) => {
     setCity(event.target.value);
        }
        const handleSearchZip = (event: React.ChangeEvent<HTMLInputElement>) => {
            setZipcode(event.target.value);
        }


// handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (city.trim()) {
            fetchWeatherData(city);
          }
    }


    return(
            <>
            <form className={styles.form}  onSubmit={handleSubmit}>
            <label className={styles.textarea}>Please enter your city:
                <input 
                type="text" 
                name="city" 
                value={city}
                onChange={handleSearchCity}
                />
                </label>
                <label className={styles.textarea}>Please enter your postcode:
                <input 
                type="text" 
                name="zipcode" 
                value={zipcode}
                onChange={handleSearchZip}
                />
                </label>
                <button className={styles.button}
                type="submit" 
                value="search">
                    Search
                    </button>
            </form>
            {error && <p>{error}</p>}
      {weather && (
        <div>
          <h3>Weather in {weather.name}</h3>
          <p>Temperature: {weather.main.temp}C</p>
          <p>Weather: {weather.weather[0].description}</p>
        </div>
      )}
            </>
        )
}

