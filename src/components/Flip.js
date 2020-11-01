import React, {Component} from 'react';
import "../style/Flip.css"


class Flip extends Component{

    constructor(){
        super();
        this.state={
            clicked:true,
            flipped:"false"
        }
        this._handleClick=this._handleClick.bind(this)
    }
    _handleClick(){
        this.setState((previousState) =>{
            return{
                clicked:!previousState.clicked
            } 
        });
        if(!this.state.clicked){
            this.setState(
                {flipped:"false"}
            )
        }
        else{
            this.setState(
                {flipped:"true"}
            )
        }
    }

    render(){
        return(
                <div className="flip-card" id={this.state.flipped} onClick={this._handleClick}>
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <div className="card">
                                <div className="info">{this.props.resultType}</div>
                            </div>
                        </div>
                        <div className="flip-card-back">
                            <h2 className="info">{this.props.results}</h2> 
                        </div>
                    </div>
                </div>
        )
    }
}
export default Flip;


/*
  
    */