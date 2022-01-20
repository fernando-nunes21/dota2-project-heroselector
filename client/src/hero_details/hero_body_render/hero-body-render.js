import React from "react";
import ImagesBody from "../../hero_body_images/index"
import "./hero-body-render.css"
import "../hero-details.css";



export default class HeroBodyRender extends React.Component {
    render(){
        const heroName = this.props.selectedHeroName && this.props.selectedHeroName.toLowerCase()
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