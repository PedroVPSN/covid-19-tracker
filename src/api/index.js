import axios from 'axios';

//store the api const url 
const url = "https://covid19.mathdro.id/api";

//Cards data
export const fetchData = async (country) => {
    let newUrl = url;

    if(country) {
        newUrl  = `${url}/countries/${country}`
    }

    try {
        //destructuring
        const {data: {confirmed, recovered, deaths, lastUpdate } } = await axios.get(newUrl); 
        //getting only data needed
        return { confirmed, recovered, deaths, lastUpdate };

    } catch (error) {
        console.log(error);
    };
};

//Chart data
export const getDailyData = async () => {
    try{
        const { data } = await axios.get(`${url}/daily`)

        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }));

        return modifiedData
    } catch(error) {

    };
};

//Select box
export const fetchCountries = async () => {
    try{
        const { data: { countries } } = await axios.get(`${url}/countries`);

        return countries.map((country) => country.name)
        
    } catch(error) {
        console.log(error);
    };
};
