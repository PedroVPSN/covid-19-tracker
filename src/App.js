import React, { Component, Fragment } from 'react'
import Cards from './components/Cards'
import Chart from './components/Chart'
import SelectedCountry from './components/SelectedCountry'
import './App.css'
import {fetchData} from './api'
import coronaImage from './images/covid19image.jpeg'
import Footer from './components/Footer'

export class App extends Component {
  //initial state
  state = {
    data: {},
    country: ''
  }
//request the fecth data
 async componentDidMount() {
    const newData = await fetchData(); //fetch the data and store in newData

    this.setState({ data: newData })

  }
//request and fecth country data
  handleCountryChanger = async (country) => {
    const newData = await fetchData(country)

    this.setState({ data: newData, country: country });

  }

  render() {
    //destructuring 
    const { data, country } = this.state;
    return (
      //display the data in Cards components
      <Fragment>
        <div className="image">
          <img src={coronaImage} alt="corona" />
        </div>
        <div className="cardContainer">
          <Cards data={data}/>
        </div>
        <div className="container"> 
          <SelectedCountry handleCountryChanger={this.handleCountryChanger}/>
          <Chart data={data} country={country}/>
        </div>
        <div className="footerColor">
          <Footer/>
        </div>
      </Fragment>
    )
  }
}

export default App
