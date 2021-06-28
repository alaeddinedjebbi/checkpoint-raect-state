import React, { Component } from 'react'

export default class Profile extends Component {
    state = {
        FullName:"DJEBBI ALAEDDINE",
        Bio : "Expert & coach marketing digital ",
        imgSrc :" https://www.golden-artkom.com/wp-content/uploads/2020/06/35923493_1981354965510838_6144162394391183360_o-225x225.jpg" ,
        Profession :" Développeur full stack javascript",
        counter:0
      }

      componentDidMount(){
          setInterval(()=>{
              this.setState({counter: this.state.counter + 1})
          },1000)
      }

    render() {
        return (
            <div >
      
      <div className="card">
        <img src={this.state.imgSrc} alt="ALAEDDINE DJEBBI" style={{width:"100%",height:250}} />
        <div className="container">
          <p>Name: </p>
          <h4><b>{this.state.FullName}</b></h4> 
          <p>Bio: </p>
          <h4><b>{this.state.Bio}</b></h4> 
          <p>Profession: </p>
          <h4><b>{this.state.Profession}</b></h4> 
          <h6>Counter : <span style={{color :"#8ca6db"}}>{this.state.counter}</span></h6>
        </div>
      </div>
       
      </div>
        )
    }
}