import "./hero-informations.css";
import "../hero-details.css";
import React, { useState } from "react";

export default class HeroDetailsInfo extends React.Component {  
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className="heroDetailsInfo col-7">
        <h1 className="heroDetailsInfo-title">Informações Do Herói</h1>
        <p className="heroDetailsInfo-text-title">Nome: <span className="heroDetailsInfo-text">{this.props?.selectedHero?.name}</span></p>
        <p className="heroDetailsInfo-text-title">Lane principal: <span className="heroDetailsInfo-text">{this.props?.selectedHero?.lane}</span></p>
        <p className="heroDetailsInfo-text-title">Dificuldade: <span className="heroDetailsInfo-text">{this.props?.selectedHero?.difficult}</span></p>
        <p className="heroDetailsInfo-text-title">Lista de habilidades:</p>
        <ul>
        {this.props?.selectedHero?.skills && this.props?.selectedHero?.skills.map((skill, id) => {
            return <li key={id}>{skill}</li>
        })}
        </ul>
        <p className="heroDetailsInfo-text-title">Lista de Skins: </p>
        <ul>
        {this.props?.selectedHero?.skins && this.props?.selectedHero?.skins.map((skins, id) => {
            return <li key={id}>{skins}</li>
        })}
        </ul>
      </div>
    );
  }
}
