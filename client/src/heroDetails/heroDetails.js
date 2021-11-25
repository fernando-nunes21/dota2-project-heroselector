import React from "react";

import HeroDetailsInfo from "./heroDetailsInformation/heroDetailsInfo";
import HeroSelector from "./sideNav-selector/heroSelector";
import HeroBodyRender from "./heroBodyRender/heroBodyRender";
import HeroImagesBody from "../heroesBodyImages/index";
import "./heroDetails.css";
import ImagesBody from "../heroesBodyImages/index";

export default class HeroDetails extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      response:[],
      hero:{},
      offset: 0,
    }
    this.selectedHero = this.selectedHero.bind(this)
    this.showNextHero = this.showNextHero.bind(this)
    this.showPreviousHero = this.showPreviousHero.bind(this)
  }

  showPreviousHero(){
    this.state.offset -= 1
    this.callGetHeroes()
  }

  showNextHero(){
    this.state.offset += 1
    this.callGetHeroes()
  }
  
  callGetHeroes(){
    fetch(`http://localhost:3001/api/heroes?offset=${this.state.offset}&limit=6`)
      .then(res => res.json())
      .then(res => this.setState({response: res, hero: res[0]}))
  }

  selectedHero(id) {
    fetch(`http://localhost:3001/api/heroes/${id}`)
      .then(res => res.json())
      .then(res => this.setState({hero: res[0]}))
  }
  
  componentDidMount(){
    this.callGetHeroes()
  }

  render() {
    return (
      <div className="heroDetails">
        <HeroSelector 
          heroes={this.state.response} 
          selected={this.selectedHero} 
          offset={this.state.offset} 
          showNextHero={this.showNextHero}
          showPreviousHero={this.showPreviousHero}
        />
        <HeroDetailsInfo hero={this.state.hero}/>
        <HeroBodyRender  hero={this.state.hero.name}/>
      </div>
    );
  }
}
