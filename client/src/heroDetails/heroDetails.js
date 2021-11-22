import React from "react";

import HeroDetailsInfo from "./heroDetailsInformation/heroDetailsInfo";
import HeroSelector from "./sideNav-selector/heroSelector";
import HeroBodyRender from "./heroBodyRender/heroBodyRender";
import "./heroDetails.css";

export default class HeroDetails extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      response:[],
      hero:{}
    }
    this.offset = 0
    this.heroId = null
  }
  
  callGetHeroes(){
    fetch(`http://localhost:3001/api/heroes?offset=${this.offset}&limit=6`)
      .then(res => res.json())
      .then(res => this.setState({response: res, hero: res[0]}))
  }
  
  componentDidMount(){
    this.callGetHeroes()
  }

  render() {
    return (
      <div className="heroDetails">
        <HeroSelector heroes={this.state.response}/>
        <HeroDetailsInfo hero={this.state.hero}/>
        <HeroBodyRender />
      </div>
    );
  }
}
