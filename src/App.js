import { Component } from 'react';
import './App.css';
import personalImg  from './me.jpg';

class App extends Component{
  constructor(){
    super();
    this.state = {
      show : true,
      counter: 0,
      Person : { 
                fullName : "Oussama Guezguez",
                bio : "Ingénieur informatique", 
                imgSrc: personalImg, 
                profession:"FullStack developer"
              },
    }
    this.clickHandler = this.clickHandler.bind(this);
    
  }


  clickHandler(){
    this.setState(function (prevState){
      return{
        show : !prevState.show ,
      }
    });
  }
  newYearCountdown(){ setInterval(() => {
    console.log( this.state.counter);
    this.setState({ counter: this.state.counter+1});
    
  }, 1000);}
  
  componentDidMount(){
    
      this.newYearCountdown();
    /*var newYearCountdown = setInterval(function(){
      var counter = 0;
      console.log(counter);
      counter++;
      //this.setState({counter : this.state.counter+1})
    }, 1000);*/
  }
  
  
  render(){
    if(this.state.show)
    return (
      <div className="container">
        <button className="btn btn-primary" onClick={this.clickHandler}>Hide</button>
        <br/>
        <img src={personalImg} alt="image peronel" width="400" height="430" />
        <h1>{this.state.Person.fullName}</h1>
        <h2>{this.state.Person.bio}</h2>
        <h2>{this.state.Person.profession}</h2>
        <h2>{this.state.counter}</h2>
      </div>
      );
      else return (
        <div className="container">
      <button className="btn btn-primary" onClick={this.clickHandler}>Show</button>
      </div>
      );
  }
}

export default App;