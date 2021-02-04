import React from 'react';
import {Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api'; //it would automatically run index.js


class App extends React.Component{
    async componentDidMount(){//best way to fetch data
        const data = await fetchData();// await data needs to be fetched by an await func so you add asyn in from of component did mount
        console.log(data);
    }
    render(){
        return (
            <div className={styles.container}>
               <Cards />
               <CountryPicker />
               <Chart />
            </div>
        )
    }
}

export default App;