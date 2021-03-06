import React from "react"

class CreateNewItem extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            getInput: "gerg"
        }

        this.onChange = this.onChange.bind(this)
    }

    onChange(e) {
        this.setState({ getInput: e.target.value })
        console.log(this.state)

    }
    render(props) {


        return (
            <div>
                <input type="text" name="here" onChange={this.onChange}></input>
                <button onClick={() => this.props.handleClick(this.state.getInput)}>Add a new Item</button>
            </div>
        )
    }
}
export default CreateNewItem