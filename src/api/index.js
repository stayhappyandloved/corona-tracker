import axios from 'axios';

const url = 'https://api.covidtracking.com/v1/us/daily.json​';

//have an async function built on promises
export const fetchData = async () => {
    try{
        const {data} = await axios.get(url);

        const modifiedData = {
            confirmed: data.confirmed,
            recovered: data.recovered,
            deaths: data.deaths,
            lastUpdate: data.lastUpdate,
        }
        return modifiedData;
    } catch(error){
       
    }
}