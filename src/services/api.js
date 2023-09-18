import axios from "axios";

const API_KEY = '1e9c4743a1791e87d19e64cb670ce565';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';


export const getWeather = async (city, country) => {
    try {
        let response = await axios.get(`${API_URL}?q=${city},${country}&appid=${API_KEY}&units=metrics`);
        return response.data;
    } catch (error) {
        console.log('Error while calling the api', error.message)
        return error.response;
    }
}