import React from "react";
import imageTest from "../../heroesBodyImages/sven.png"
import "./heroBodyRender.css"
import "../heroDetails.css";


export default class HeroBodyRender extends React.Component {
    render(){
        return (
            <div className="heroBodyRender">
                <img className="heroBodyImage" src={imageTest} alt="sven"></img> 
            </div>
        );
    }
}