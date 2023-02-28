import React, { useState } from 'react'
import styles from './style/weatherForm.module.css';

export const WeatherForm = ({ onChangeCity }) => {
    const [city, setCity] = useState('');

    //Funcion on change
    function handleChange(event){
        const value = event.target.value;

        if(value !== '') setCity(value);
    }
    //Funcion Submit
    function handleSubmit(event){
        event.preventDefault();
        
        onChangeCity(city);
    }
    return (
        <form onSubmit={ handleSubmit } className={styles.container}>
            <input type="text" onChange={ handleChange } className={styles.input}/>
        </form>
    )
}
