import React, { Component } from 'react'

//HOC is a function that takes a component as parameter and returs
//a new component wrapping the given component 
// and supercharging it by giving it some extra abilites 

class Toggler extends Component{
    state={
        on:false 
    }

    toggle=()=>{
        this.setState(prevstate=>{
            return {on:!prevstate.on}
        })
    }

    render(){
        const Component=this.props.component
        return (
            <Component on={this.state.on} toggle={this.toggle} {...this.props}/>
        )
    }
}

export   function withtoggler(component) {
  return  function (props){
    return (
    <Toggler component={component} {...props}/>
    )
  }
}
