if (typeof document !== 'undefined') {
  let element = document.querySelector('.class-name')


  //Add alert after pressing LVL DOWN
  {
    function isClicked() {
      alert("Do you really want to remove JavaScript from the page?");
    };
  }

  //Open list in new window
  {
    function newWin() {
      window.open('./notes.html', 'notes', 'width=400px,height =500px');
    };
  }

  //Fix the interaction with CV buttons
  {
    var acc = document.getElementsByClassName("jobsBtn");
    var i;
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
          panel.style.padding = "0 1rem 0 1rem";
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
          panel.style.padding = "1rem";
        }
      });
    };
    var proj = document.getElementsByClassName("img_p");
    for (i = 0; i < proj.length; i++) {
      proj[i].addEventListener("hover", function () {
        this.classList.toggle("active");
        var text = this.nextElementSibling;
        if (text.style.maxHeight) {
          text.style.maxHeight = null;
          text.style.padding = "0";
        } else {
          text.style.maxHeight = panel.scrollHeight + "px";
          text.style.padding = "1rem";
        }
      });
    };
  }

  //Weather API
  {
    const d = new Date();
    let hour = d.getHours();
    fetch("https://api.open-meteo.com/v1/forecast?latitude=45.07&longitude=7.69&hourly=temperature_2m,rain,weathercode,cloudcover&daily=sunrise,sunset&current_weather=true&timezone=Europe%2FBerlin")
      .then((response) => { return response.json() })
      .then((data) => {
        console.log(data);

        if (data.hourly.rain[hour] > 5) {
          document.getElementById("open-meteo").insertAdjacentHTML('beforeend',
            `<img class='moodimg' src="./assets/icons/icons8-rain-cloud-100.png" alt="It's raining. Better taking an umbrella."/>
        <p>Rain: ${data.hourly.cloudcover[hour]}mm</p>`)
        }

        if (data.hourly.cloudcover[hour] > 70) {
          document.getElementById("open-meteo").insertAdjacentHTML('beforeend',
            `<img class='moodimg' style='height:4rem' src='./assets/icons/icons8-smiling-face-with-heart-100.png' alt="good_weather"/>`)
        }
        else if (data.hourly.cloudcover[hour] > 30) {
          document.getElementById("open-meteo").insertAdjacentHTML('beforeend',
            `<img class='moodimg' style='height:4rem' src="./assets/icons/icons8-neutral-100.png" alt="neutral_weather"/>`)
        }
        else {
          document.getElementById("open-meteo").insertAdjacentHTML('beforeend',
            `<img class='moodimg' style='height:4rem' src='./assets/icons/icons8-disappointed-100.png' alt="cloudy_weather"></img>`)
        }

        document.getElementById("open-meteo").insertAdjacentHTML('beforeend',
          `<p>Bright sky: ${data.hourly.cloudcover[hour]}%</p>`)

        if (hour < 9 | hour > 19) {
          document.getElementById("open-meteo").insertAdjacentHTML('beforeend',
            `<img class='moodimg' src="./assets/icons/icons8-men's-pajama-100.png" alt="Working time is over."/>
        <p style="width:10rem">Temperature: ${data.current_weather.temperature}°C, but I'm home, so...</p>`)
        }
        else if (data.current_weather.temperature > 18) {
          document.getElementById("open-meteo").insertAdjacentHTML('beforeend',
            `<img class='moodimg' src='./assets/icons/icons8-clothes-100.png' alt="There's a nice temperature"/>
        <p>Temperature: ${data.current_weather.temperature}°C</p>`)
        }
        else {
          document.getElementById("open-meteo").insertAdjacentHTML('beforeend',
            `<img class='moodimg' src="./assets/icons/icons8-lab-coat-100.png" alt="It's kinda cold"/>
        <p>Temperature: ${data.current_weather.temperature}°C</p>`)
        }

      }
      )
      .catch(err => console.log(err));
  }

  // Projects
  {
    var proj
  }

  //Updating whishlist
  {
    let x = 1;
    var list;
    const reader = new FileReader();
    document.querySelector('future-improvements.txt').innerText = list.result;
    document.getElementById("toDo").insertAdjacentHTML('beforeend', `<li><p>${x}aaa</p></li>`)
    console.log(list)
    console.log(document.getElementById('toDo'))
  }
}