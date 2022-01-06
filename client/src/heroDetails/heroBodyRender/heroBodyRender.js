import React from "react";
import ImagesBody from "../../heroesBodyImages/index"
import "./heroBodyRender.css"
import "../heroDetails.css";



export default class HeroBodyRender extends React.Component {
    render(){
        const heroName = this.props.hero && this.props.hero.toLowerCase()
        console.log(heroName)
        return (
            <div className="heroBodyRender">
                {ImagesBody.map((image, key) => {
                    if(image.name === heroName){
                        return (
                            <img className="heroBodyImage" key={key} src={image.img} alt={image.name}/>
                        )
                    }
                })}
            </div>
        );
    }
}