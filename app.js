const request = require('request');
const {promisify} = require('util');

const promisifiedRequest = promisify(request)
// const APPID = '4ceb79910b99c99acb3397900c3c61cd' // https://openweathermap.org/current
require('dotenv').config() // https://www.npmjs.com/package/dotenv

const getWeather = async () => {
    let data = await promisifiedRequest({
        uri: `https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${process.env.APPID}`,
        json: true
    })
    console.log(data.body)
}

getWeather()