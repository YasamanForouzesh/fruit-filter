import './App.css';
import React, {Component} from 'react'
import FruitContainer from './FruitContainer';
const fruits=[
  'pear',
  'orange',
  'mango',
  'lemon',
  'pineaple',
  'kiwi',
  'dragonfruit',
  'banana',
  'soursop',
  'pomegranite',
  'persimmon',
  'barf',
  'startfruit',
  'nectarine',
  'apple',
  'cucomber'
]
class App extends Component{
  render(){
  
    return(
        <div>
            <FruitContainer fruits={fruits}/>
        </div>
    )
  }
}

export default App;
