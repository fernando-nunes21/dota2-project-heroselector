import "./heroDetailsInfo.css";
import "../heroDetails.css";
import React from "react";

export default class HeroDetailsInfo extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="heroDetailsInfo col-7">
        <h1 className="heroDetailsInfo-title">Informações Do Herói</h1>
        <p className="heroDetailsInfo-text">Nome: {this.props?.hero?.name}</p>
        <p className="heroDetailsInfo-text">Lane principal: {this.props?.hero?.lane}</p>
        <p className="heroDetailsInfo-text">Dificuldade: {this.props?.hero?.difficult}</p>
        <p className="heroDetailsInfo-text">Lista de habilidades:</p>
        <ul>
          <li>{this.props?.hero?.skills}</li>
        </ul>
        <p className="heroDetailsInfo-text">Lista de Skins: </p>
        <ul>
          <li>{this.props?.hero?.skins}</li>
        </ul>
      </div>
    );
  }
}
