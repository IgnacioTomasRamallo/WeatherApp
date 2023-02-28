import React, { useEffect, useState } from 'react'
import  { WeatherForm }  from '../weatherForm/WeatherForm';
import { WeatherMainInfo } from '../weatherMainInfo/WeatherMainInfo';

import styles from './style/weatherApp.module.css';

export const WeatherApp = () => {
    const [weather, setWeather] = useState(null);
    
    //informacion cargada
    useEffect(()=>{
        loadInfo();
    }, []);
    //Cambio de titulo
    useEffect(()=>{
        document.title = `Weather | ${weather?.location.name ?? ''}`;
    },[weather])
    //solicitud http
    async function loadInfo(city = 'london'){
        try {
            const req = await fetch(`${process.env.REACT_APP_URL}&KEY=${process.env.REACT_APP_KEY}&q=${city}`)
            const json = await req.json();

            setWeather(json);
            console.log(json);
        } catch (error) {
            
        }
    }
    //seteo de ciudad
    function handleChangeCity(city){
        setWeather(null);
        loadInfo(city);
    }

    return (
        <div className={styles.weatherContainer}>
            <h1>Wheather App</h1>
            <WeatherForm onChangeCity={handleChangeCity} />
            <WeatherMainInfo weather={weather}/>
        </div>
    )
}

