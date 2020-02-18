
const request = require('request') //npm i request 
require('dotenv').config() // https://www.npmjs.com/package/dotenv


const getWeather = () =>{
    request({ // https://www.npmjs.com/package/request
        uri: `https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${process.env.APPID}`,
        json: true //json format is true, raw data would be false
    }, (err, res) => {
        if(err) throw err;
        console.log(res.body)
    }
    )
}
getWeather()