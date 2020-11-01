import React, {Component} from 'react';
import {withRouter} from 'react-router';
import Flip from "./Flip.js"
import "../style/resultPage.css"
const api = {
    key: "5cf9dfd5-3449-485e-b5ae-70a60e997864",
    base: "//api.covid19api.com/country/",
    month:"from=2020-10-01T00:00:00Z&to=2020-10-31T00:00:00Z",
}

class ResultPage extends Component{
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
        const confirmedDiff = []
        fetch(urlC) // api call
        .then(response =>response.json()) // response
        .then(result =>{  
            result.map(obj =>{
                if(obj.Province === "" && (obj.Date ==="2020-10-01T00:00:00Z" ||obj.Date ==="2020-10-31T00:00:00Z" )){
                    confirmedDiff.push(obj)
                }
            })
            if(confirmedDiff[0] === undefined || confirmedDiff[1] === undefined){
                this.setState({
                    confirmed: "no data"

                })
            }else{
                this.setState({
                    confirmed: confirmedDiff[1].Cases - confirmedDiff[0].Cases

            })
            }
    

        })
        ////////////////////////////////////////////////////////////////////
        const urlR = api.base + countrySlug + "/status/recovered?" + api.month
        const recoveredDiff = []
        fetch(urlR) // api call
        .then(response =>response.json()) // response
        .then(result =>{  
            result.map(obj =>{
                if(obj.Province === "" && (obj.Date ==="2020-10-01T00:00:00Z" ||obj.Date ==="2020-10-31T00:00:00Z" )){
                    recoveredDiff.push(obj)
                }
            }) 
            if(recoveredDiff[0] === undefined || recoveredDiff[1] === undefined){
                this.setState({
                    recovered: "no data"

                })
            }else{
                this.setState({
                    recovered: recoveredDiff[1].Cases - recoveredDiff[0].Cases

            })
            }
    
            

        })
        ////////////////////////////////////////////////////////////////////
        const urlD = api.base + countrySlug + "/status/deaths?" + api.month
        const deathDiff = []
        fetch(urlD) // api call
        .then(response =>response.json()) // response
        .then(result =>{  
            result.map(obj =>{
                if(obj.Province === "" && (obj.Date ==="2020-10-01T00:00:00Z" ||obj.Date ==="2020-10-31T00:00:00Z" )){
                    deathDiff.push(obj)
                }
            }) 
            if(deathDiff[0] === undefined || deathDiff[1] === undefined){
                this.setState({
                    deaths: "no data"

                })
            }else{
                this.setState({
                    deaths: deathDiff[1].Cases - deathDiff[0].Cases

            })
            }
    

        })
    } 

    _handleClick(){ // changes route url
        window.location.href = `/`; 
    }


    render(){
        return(
            <div>
                <button onClick={this._handleClick}>Go Back</button>
                <h1>October 2020 COVID Data</h1>
                <div className="container">
                    <Flip 
                        results={this.state.confirmed}
                        resultType="Confirmed Cases:"
                    />
                    <Flip 
                        results={this.state.recovered}
                        resultType="Recovered Cases:"
                    />
                    <Flip 
                        results={this.state.deaths}
                        resultType="Deaths:"
                    />
                </div>
            </div>
            
        )
    }
}


export default withRouter(ResultPage);