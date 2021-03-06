import React, { Component } from "react";
import CreateNewItem from "./createnewitem"
import NewItem from "./newitem"



class App extends Component {


  constructor() {
    super()
    this.state = {
      item:
        [


        ]


    }
    fetch('http://localhost:5000/todo', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then(response => response.json()).then(data => this.setState({ item: data }))

  }

  componentDidUpdate() {
    fetch('http://localhost:5000/todo', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then(response => response.json()).then(data => this.setState({ item: data }))

  }
  handleClick(item) {

    const data = { username: item };

    fetch('http://localhost:5000/update', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

  }
  render() {
    let hereIsanITem = this.state.item.map(data => {
      console.log(this.state)
      return (
        <NewItem item={data.item} key={data.todoid} />
      )
    })

    return (
      <div>
        <CreateNewItem handleClick={this.handleClick} />
        {hereIsanITem}

      </div>
    )
  }
}
export default App