import React from "react";
import HeroDetailsInfo from "./hero_informations/hero-informations";
import HeroSelector from "./hero_selector/hero-selector";
import HeroBodyRender from "./hero_body_render/hero-body-render";
import HeroDetailsService from "./hero-details-service.js"
import "./hero-details.css";
export default class HeroDetails extends React.Component {
  constructor(props){
    const DEFAULT_OFFSET = 0
    const DEFAULT_LIMIT = 6
    
    super(props)
    this.state = {
      response:[],
      hero: {}
    }

    this.showPreviousHero = this.showPreviousHero.bind(this)
    this.showNextHero = this.showNextHero.bind(this)
    this.defaultLimit = DEFAULT_LIMIT
    this.actualOffset = DEFAULT_OFFSET
  }

  getHeroes(){
    fetch(`http://localhost:3001/api/heroes?offset=${this.actualOffset}&limit=${this.defaultLimit}`)
      .then(res => res.json())
      .then(res => this.setState({response: res}))
  }

  getHeroInfo(id){
    fetch(`http://localhost:3001/api/heroes/${id}`)
      .then(res => res.json())
      .then(res => this.setState({hero: res[0]}))
  }

  showPreviousHero(){
    this.actualOffset -= 1
    this.getHeroes()
  }

  showNextHero(){
    this.actualOffset += 1
    this.getHeroes()
  }

  componentDidMount(){
    this.getHeroes()
    /*var heroes = async() => {
     return await HeroDetailsService.getHeroes(this.actualOffset, this.defaultLimit)
    }
    console.log(heroes)*/
  }
  
  render() {
    return (
      <div className="heroDetails">
        <HeroSelector 
          heroes={this.state.response} 
          actualOffset={this.actualOffset} 
          showNextHero={this.showNextHero} 
          showPreviousHero={this.showPreviousHero}
          selected={this.getHeroInfo.bind(this)} 
        />
        <HeroDetailsInfo selectedHero={this.state.hero}/>
        <HeroBodyRender selectedHeroName={this.state.hero.name}/>
      </div>
    );
  }
}
