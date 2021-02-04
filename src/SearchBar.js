import React, {Component} from 'react'

class SearchBar extends Component{
    render(){
        return(
            <div>
                <label htmlFor="fruit-filter">Filte these Fruites</label>
                <input type="text" id="fruit-filter" onChange={this.props.handleUserInput}/>
            </div>
        )
    }
}

export default SearchBar