import React from "react";
import "./hero-selector.css";
import "../hero-details.css";
import ImagesMenu from "../../hero_selector_images/index"
import HeroAudio from "../../hero_sounds/index"

export default class HeroSelector extends React.Component {
  constructor(props){  
    super(props)
    this.selectHero = this.selectHero.bind(this)
  }

  audioPickHero(heroName){
    const heroSelectedAudio = HeroAudio.find((hero) => {
      if(hero.name === heroName){
        return hero
      }
    })
    if(heroSelectedAudio){
      const audioHero = new Audio(heroSelectedAudio.url)
      audioHero.play()
    }    
  }
  
  selectHero(heroId,heroName){
    this.props.selected(heroId)
    this.audioPickHero(heroName.toLowerCase())
  }

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
            <div className="heroButton" onClick={() => this.selectHero(hero.id,hero.name)} key={hero.id}>
              <img src={heroImage.img} alt={hero.name}/>
            </div>
          )
        })}
        <button 
          disabled={this.props.actualOffset === 0} 
          onClick={this.props.showPreviousHero}
          className="heroButtonUpAndDown"
        > 
          ↑ 
        </button>
        <button 
          disabled={this.props.heroes.length < 6} 
          onClick={this.props.showNextHero}
          className="heroButtonUpAndDown"
        > 
          ↓
        </button>
      </div>
    )
  }
}
