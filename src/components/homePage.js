import React, {Component} from 'react';
import {withRouter} from 'react-router';
import "../style/homePage.css"

const api = {
    key: "5cf9dfd5-3449-485e-b5ae-70a60e997864",
    base: "https://api.covid19api.com/"
}

class HomePage extends Component{
    constructor(){
        super();
        this.state={
          countries:[],
          selected: "select"
        }
        this._handleClick = this._handleClick.bind(this);
        this._handleChange = this._handleChange.bind(this);
    }

    componentDidMount(){ // runs once when the component is first mounted on the page
        const url = api.base + "countries"
        fetch(url) // api call
        .then(response =>response.json()) // response
        .then(result =>{
            //const countryList = result.map(obj=> console.log(obj));//obj.Country);
            this.setState({
            countries: result.sort(function(a, b){ //countryList.sort()
                if(a.Country < b.Country) { return -1; }
                if(a.Country > b.Country) { return 1; }
                return 0;
            }), 
            })
        })
    }
    _handleChange(e){
        this.setState({
            selected: e.target.value 
        })

    }
    _handleClick(){ // changes route url
        if(this.state.selected === "select"){
            return 
        }else{
            window.location.href = `/result/${this.state.selected}`; 
        }
        
    }

    render(){
        return(
            <div className ="dropDown">
                <h1>Covid Data by Country</h1>
                <label>
                    <select name="choice" value={this.state.selected} onChange={this._handleChange}>
                        <option value="select">Select a country</option>
                        {this.state.countries.map(country =>{
                        return(<option value={country.Slug} key={country.Country}>{country.Country}</option>)
                        })
        
                    }
                    </select>
                </label>
                <button onClick={this._handleClick}>Search</button>
            </div>
        )
    }
}


export default withRouter(HomePage);