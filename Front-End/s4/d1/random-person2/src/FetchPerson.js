import { Component } from "react";

export default class FetchPerson extends Component {
  constructor(){
    super()
    this.state = { 
      isLoaded: false,
      data: [],
    };
  };

  async fetchAPi() {
    const url = 'https://api.randomuser.me/';

    const request = await (await fetch(url)).json();
    this.setState({ isLoaded: true, data: request.results });
  }

  componentDidMount() {
    this.fetchAPi()
  }

  shouldComponentUpdate(nextprops, nextState) {
    return nextState.data[0].dob.age < 50;
  }


render(){
    const { isLoaded, data } = this.state;
    const personCard = data
    .map(({ name: {title, first, last}, email, picture: { large }, dob: { age } }) => {
      return (
      <div key={first+age}>
      <img src={large} alt={`${title} ${last}`} />
      <h3>{title} {first} {last}</h3>
      <p>Email: {email}</p>
      <p>Age: {age}</p>
      </div>)
    });

      return <div> { isLoaded ? personCard : 'Carregando…' } </div>
  }
}