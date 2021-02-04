import React, {Component} from 'react'
import FilteredList from './FilterList'
import SearchBar from './SearchBar'
import ReverseFilteredList from './ReverseFilteredList'
class FruitContainer extends Component{
    state={
        filteredList:[],
        reverseList:[],
        userInput:''
    }
    handleUserInput=(e)=>{
        let newUnput=e.target.value
        console.log(e.target.value)
        this.setState({userInput:newUnput})
        let testArr=this.props.fruits.filter((item,index)=>{
            if(item.includes(newUnput)){
                return item
            }
        })
        let reverseTestArr=this.props.fruits.filter((item,index)=>{
            if(!item.includes(newUnput)){
                return item
            }
        })
        this.setState({filteredList:testArr})
        this.setState({reverseList:reverseTestArr})

    }

    render(){
    let fruitFiltered=this.state.filteredList.map((item,index)=>(
        <FilteredList fruit={item} key={`key${index}`}/>
    ))
    let ReverseFruitFiltered=this.state.reverseList.map((item,index)=>(
        <ReverseFilteredList fruit={item} key={`key${index}`}/>
    ))
        return(
            <>
                <h1>Fruit is Good</h1>
                <SearchBar handleUserInput={this.handleUserInput}
                 userInput={this.state.userInput}/>
                 
                {fruitFiltered}
                <h1>Here is rest of the fruit </h1>
                {ReverseFruitFiltered}
                 

            </>
        )
    }
}

export default FruitContainer