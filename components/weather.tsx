'use client';
import Image from "next/image";
import { useEffect, useState } from "react";
const home = '/assets/img/home_7.jpg';
const rain = "/assets/img/rain.png";
const location = {latitude:45.07, longitude:7.69};

export default function Weather() {
    const d = new Date();
    let hour = d.getHours();
    let [image, setImage] = useState(home);

    function updateWithAPI() {
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&hourly=temperature_2m,rain,weathercode,cloudcover&daily=sunrise,sunset&current_weather=true&timezone=Europe%2FBerlin`, { cache: 'no-store' })
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
            })

    }
    /* // Not working hour
    if (hour < 9 || hour > 18) {
        
    }
    
    // Working hour and cold weather
    else { 
    }; */
    return (
        <Image
            id="weather"
            src={image}
            fill={true}
            style={{ objectFit: 'cover' }}
            alt="weather"
            onLoad={() => { updateWithAPI() }}
            priority={true}
        />
    )
}