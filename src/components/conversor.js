import React, {Component} from 'react';
import './conversor.css'

export default class Conversor extends Component {

  constructor(props){
    super(props);

    this.state = {
      moedaA_valor:"",
      moedaB_valor:0,
    }

    this.converter = this.converter.bind(this);
  }

  converter() {
    const de_para = `${this.props.moedaA}_${this.props.moedaB}`;
    const url = `https://free.currconv.com/api/v7/convert?q=${de_para}&compact=ultra&apiKey=1d987e7e8f177d732829`

    fetch(url)
    .then(res=>{
      return res.json()
    })
      .then(json=> {
        const cotacao = json[de_para];
        const moedaB_valor = (parseFloat(this.state.moedaA_valor) * cotacao).toFixed(2)
        this.setState({moedaB_valor})
      })

  }

  render() {
    return (
      <div className="conversor">
        <h2>{this.props.moedaA} to {this.props.moedaB}</h2>
        <input className="input" type="text" onChange={(event)=> {this.setState({moedaA_valor:event.target.value})}}></input>
        <input className="botao" type="button" value="Converter" onClick={this.converter}></input>
        <h2>{this.state.moedaB_valor}</h2>
      </div>
    )
  }
}