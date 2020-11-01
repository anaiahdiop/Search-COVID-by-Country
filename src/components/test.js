/*
import React, {Component} from 'react';
import {withRouter} from 'react-router';

const api = {
    key: "5cf9dfd5-3449-485e-b5ae-70a60e997864",
    base: "//api.covid19api.com/country/",
    month:"from=2020-10-01T00:00:00Z&to=2020-10-31T00:00:00Z",
}
//https://api.covid19api.com/country/south-africa/status/confirmed?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z
class Test extends Component{
    constructor(){
        super();
        this.state={
          countries:[],
          confirmed:null,
          recovered:null,
          deaths:null
        }
        this._handleClick = this._handleClick.bind(this);
    }

    componentDidMount(){ // gives a list of all country names
        const countrySlug = this.props.match.params.country;
        const urlC = api.base + countrySlug + "/status/confirmed?" + api.month
        const urlR = api.base + countrySlug + "/status/recovered?" + api.month
        const urlD = api.base + countrySlug + "/status/deaths?" + api.month
        Promise.all([fetch(urlC),fetch(urlR),fetch(urlD)])
        .then(responses=>responses.map(response => response.json()))
        .then(results =>{
            results.forEach(result =>{
                const diff = []
                result.forEach(obj =>{
                    if(obj.Province === "" && (obj.Date ==="2020-10-01T00:00:00Z" ||obj.Date ==="2020-10-30T00:00:00Z" )){
                        diff.push(obj)
                    }
                })
                this.setState({
                    [result.Status]: diff[1].Cases - diff[0].Cases


                })
            })
        })
    } 
    

    _handleClick(){ // changes route url
        window.location.href = `/result/${this.state.countries}`; 
    }

    render(){
        return(
            <div className ="dropDown">
                <h1>{this.state.confirmed}</h1>
                <button onClick={this._handleClick}>Search</button>
            </div>
        )
    }
}


export default withRouter(Test);

*/