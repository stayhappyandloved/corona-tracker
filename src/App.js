import React from 'react';
import {Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api'; //it would automatically run index.js


class App extends React.Component{

    state = {
        data: {},
    }


    async componentDidMount(){//best way to fetch data
        const fetchedData = await fetchData();// await data needs to be fetched by an await func so you add asyn in from of component did mount
        this.setState({data:fetchedData});
    }
    render(){
        const {data} = this.state;
        return (
            <div className={styles.container}>
               <Cards  data={data}/>
               <CountryPicker />
               <Chart />
            </div>
        )
    }
}

export default App;