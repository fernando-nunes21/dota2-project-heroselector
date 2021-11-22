import React from "react";
import "./heroSelector.css";
import "../heroDetails.css";
import ImagesMenu from "../../heroesMenuImage/index"

export default class HeroSelector extends React.Component {
  render() {
    return(
      <div className="heroSelector col-2">
        {this.props.heroes.map((hero) => {
          var heroImage = ImagesMenu.find((image) => {
            if(image.name === hero.name.toLowerCase()){
              return image
            }
          })
          return (
            <div className="heroButton" key={hero.id}>
              <img src={heroImage.img} alt={hero.name}/>
            </div>
          )
        })}
      </div>
    )
  }
}
