import React, {Component} from 'react';

class Shelf extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shelfItems: [
        "Papaya",
        "Chicken Nuggets",
        "Frites",
        "Guap",
        "El Chapo"
      ]
    }
  }

  render() {
      const shelfItems = this.state.shelfItems.map( (item, id) => {
        return (
          <li key={id}>
            {item}
            <button onClick={() => this.props.addItem(item)}>+</button>
          </li>
        )
      })
      return (
        <div>
          <h2>Store Inventory</h2>
          <ul>
              {shelfItems}
          </ul>
        </div>
      )
    }
  }

  export default Shelf
