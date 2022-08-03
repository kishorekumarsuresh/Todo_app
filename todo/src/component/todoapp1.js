import React , {Component}  from 'react'

class Todoapp1 extends Component {
     
    

   

    render (props){
        return (
        <div>
            <h1>Todo App</h1>
            <form>
            <input type="text" 
            value={this.props.eve}
            onChange={this.props.add}/> 
            <button onClick = {this.props.addEvent } >Add (+) </button>
            </form>
        </div>
        )
    }
}

export default Todoapp1 
