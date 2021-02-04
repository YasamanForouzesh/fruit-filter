import React, {Component} from 'react'
class FilterList extends Component{
    render(){
        return(
          <ul>
              <li>
                  {this.props.fruit}
              </li>
          </ul>
        )
    }
}

export default FilterList