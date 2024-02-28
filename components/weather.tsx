'use client';
import Image from "next/image";
import { useState } from "react";

// window gives error on build
const home = typeof window !== 'undefined' ? window.location.href + '/assets/img/home_7.jpg' : 'https://94lama.github.io/portfolio/assets/img/home_7.jpg';
const rain = typeof window !== 'undefined' ? window.location.href + "/assets/img/rain.png" : "https://94lama.github.io/portfolio/assets/img/rain.png";
const location = { latitude: 45.07, longitude: 7.69 };

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
                        setImage(coat);
                        break;
                    case data.hourly.cloudcover[hour]>30:
                        setImage(shirt);
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
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}>
            <Image
                id="weather"
                src={image}
                fill={true}
                style={{ objectFit: 'cover', zIndex: -1 }}
                alt="weather"
                onLoad={() => { updateWithAPI() }}
                priority={true}
            />
        </div>
    )
}