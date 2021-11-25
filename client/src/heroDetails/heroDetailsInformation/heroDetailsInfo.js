import "./heroDetailsInfo.css";
import "../heroDetails.css";
import React, { useState } from "react";

export default class HeroDetailsInfo extends React.Component {  
   render() {
    return (
      <div className="heroDetailsInfo col-7">
        <h1 className="heroDetailsInfo-title">Informações Do Herói</h1>
        <p className="heroDetailsInfo-text-title">Nome: <span className="heroDetailsInfo-text">{this.props?.hero?.name}</span></p>
        <p className="heroDetailsInfo-text-title">Lane principal: <span className="heroDetailsInfo-text">{this.props?.hero?.lane}</span></p>
        <p className="heroDetailsInfo-text-title">Dificuldade: <span className="heroDetailsInfo-text">{this.props?.hero?.difficult}</span></p>
        <p className="heroDetailsInfo-text-title">Lista de habilidades:</p>
        <ul>
        {this.props?.hero?.skills && this.props?.hero?.skills.map((skill, id) => {
            return <li key={id}>{skill}</li>
        })}
        </ul>
        <p className="heroDetailsInfo-text-title">Lista de Skins: </p>
        <ul>
        {this.props?.hero?.skins && this.props?.hero?.skins.map((skins, id) => {
            return <li key={id}>{skins}</li>
        })}
        </ul>
      </div>
    );
  }
}
