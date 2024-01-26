import { useEffect } from "react";
import smile from '../assets/icons/smile.png';
import sad from '../assets/icons/sad.png';
import neutral from '../assets/icons/neutral.png';
import rain from '../assets/icons/rain.png';
import shirt from '../assets/icons/t-shirt.png';
import coat from '../assets/icons/coat.png';
import pajama from '../assets/icons/pajama.png';

//Weather API
export function Weather() {
    useEffect(() => {
        const d = new Date();
        let hour = d.getHours();
        const abortController = new AbortController();

        fetch("https://api.open-meteo.com/v1/forecast?latitude=45.07&longitude=7.69&hourly=temperature_2m,rain,weathercode,cloudcover&daily=sunrise,sunset&current_weather=true&timezone=Europe%2FBerlin",
            { signal: abortController.signal })
            .then((response) => { return response.json() })
            .then((data) => {
                let container = document.getElementById("open-meteo");
                container.classList.add('d-flex', 'flex-column', 'm-0', 'px-0', 'py-5');
                let image = document.createElement('img');

                switch(true){
                    case data.hourly.rain[hour]>5:
                        image.setAttribute('src', rain);
                        break;
                    case data.hourly.cloudcover[hour]>70:
                        image.setAttribute('src', coat);
                        break;
                    case data.hourly.cloudcover[hour]>30:
                        image.setAttribute('src', shirt);
                        break;
                    default:
                        data.setAttribute('src', pajama);
                        break;
                }

                container.appendChild(image);
                // Not working hour
                if (hour < 9 || hour > 18) {
                    
                }
                // Working hour and warm weather
                else if (data.current_weather.temperature > 25) {
                    
                }
                // Working hour and middle weather
                else if (data.current_weather.temperature > 18) {
                    
                }
                // Working hour and cold weather
                else { 

                };
            })
            .catch(err => console.log(err));
        return () => {
            abortController.abort();
        };
    });
}

//Notes
