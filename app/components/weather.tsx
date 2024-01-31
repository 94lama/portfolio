'use client';
import { useState } from "react";
const home =  './portfolio/assets/img/home_7.jpg'
const rain =  "./portfolio/assets/img/rain.png"

export default function Weather() {
    const d = new Date();
    let hour = d.getHours();
    let [image, setImage] = useState(rain);

    fetch("https://api.open-meteo.com/v1/forecast?latitude=45.07&longitude=7.69&hourly=temperature_2m,rain,weathercode,cloudcover&daily=sunrise,sunset&current_weather=true&timezone=Europe%2FBerlin", { cache: 'no-store' })
        .then(res => res.json())
        .then(data => {
            switch (true) {
                case data.hourly.rain[hour] > 5:
                    setImage(rain);
                    break;
                /* case data.hourly.cloudcover[hour]>70:
                    image.setAttribute('src', coat);
                    break;
                case data.hourly.cloudcover[hour]>30:
                    image.setAttribute('src', shirt);
                    break; */
                default:
                    setImage(home);
            }
            /* let div = document.getElementById('weather');
            if(!div) return;
            div.style.backgroundImage = `url(${image})`; */
        })

    /* // Not working hour
    if (hour < 9 || hour > 18) {
        
    }
    
    // Working hour and cold weather
    else { 
    }; */
    return (
    <div id="weather" className="min-h-svh w-svw" style={{ backgroundImage: `url(${image})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}></div>
    )
}