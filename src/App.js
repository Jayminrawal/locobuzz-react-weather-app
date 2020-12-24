import React ,{useState} from 'react';
import './index.css'
const api = {
  key: "3e7d51461c99408ff6f959ee54750877",
  base: "https://api.openweathermap.org/data/2.5/"
}


function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
            setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  }

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
      let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year} `
    }
    const dateBuilders = (d) => {
        let month1 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let days = day[d.getDay() +1];
        let dates = d.getDate() + 1;
        let month2 = month1[d.getMonth()];
        let years = d.getFullYear();

        return `${days} ${dates} ${month2} ${years} `
    }

    const dateBuilder1 = (d) => {
        let month2 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let day1 = day[d.getDay()+2 ];
        let date1 = d.getDate() + 2;
        let month3 = month2[d.getMonth()];
        let years = d.getFullYear();

        return `${day1} ${date1} ${month3} ${years} `
    }

    const dateBuilder2 = (d) => {
        let month4 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let day2 = day[d.getDay()-4];
        let date2 = d.getDate() + 3;
        let month5 = month4[d.getMonth()];
        let years = d.getFullYear();

        return `${day2} ${date2} ${month5} ${years} `
    }

    const dateBuilder3 = (d) => {
        let month6 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let day3 = day[d.getDay()-3];
        let date3 = d.getDate() + 4;
        let month7 = month6[d.getMonth()];
        let years = d.getFullYear();

        return `${day3} ${date3} ${month7} ${years} `
    }

  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 25) ? 'app warm' : 'app') : 'app'}>
      <main>
        <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {(typeof weather.main != "undefined") ? (
        <><div>
                      <div className="location-box">
                          <div className="location">{weather.name}, {weather.sys.country}</div>
                          <div className="date">{dateBuilder(new Date())}</div>
                      </div>
                      <div className="weather-box">
                          <div className="temp">
                              {Math.round(weather.main.temp)}°c
                          </div>
                          <div className="weather">{weather.weather[0].main}</div>
                      </div>
                  </div>
                      <div>
                          <div className="location">
                              <div className="date">{dateBuilders(new Date())}</div>
                          </div>
                          <div className="weather1">
                              <div className="temp1">
                                  {Math.round(weather.main.temp+1)}°c
                              </div>
                              
                          </div>
                      </div>
                      <div>
                          <div className="location1">
                              <div className="date">{dateBuilder1(new Date())}</div>
                          </div>
                          <div className="weather3">
                              <div className="temp1">
                                  {Math.round(weather.main.temp + 3)}°c
                              </div>
                              
                          </div>
                      </div>

                      <div>
                          <div className="location2">
                              <div className="date">{dateBuilder2(new Date())}</div>
                          </div>
                          <div className="weather5">
                              <div className="temp1">
                                  {Math.round(weather.main.temp + 3)}°c
                              </div>
                              
                          </div>
                      </div>

                      <div>
                          <div className="location3">
                              <div className="date">{dateBuilder3(new Date())}</div>
                          </div>
                          <div className="weather7">
                              <div className="temp1">
                                  {Math.round(weather.main.temp -2)}°c
                              </div>
                              
                          </div>
                      </div>
                  </>
        ) : ('')}
      </main>
    </div>
  );
}

export default App;