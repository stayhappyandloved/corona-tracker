import axios from 'axios';

const url = 'https://api.covidtracking.com/v1/us/daily.json​';

//have an async function built on promises
export const fetchData = async () => {
    try{
        const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(url);

       
        return {confirmed, recovered, deaths, lastUpdate};
    } catch(error){
       
    }
}