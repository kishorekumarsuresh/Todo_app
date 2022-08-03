import React ,{Component } from 'react'
import './App.css';
import Todoapp1 from './component/todoapp1';
import Todoapp2 from './component/todoapp2';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      task :[],
      eve : ""
    
    }
  }

  handleChange = (e) => { this.setState({ eve: e.target.value})}

  addEvent= (e) =>{
    e.preventDefault();
    this.setState({
      task : [...this.state.task,this.state.eve]
    })
    this.setState({eve:" "})
  }
  render(){
    return (
      <div className="App">
      <Todoapp1 eve={this.state.eve}  task={this.props.task} add={this.handleChange} addEvent={this.addEvent} />

      <Todoapp2 task={this.state.task}/>
    </div>
    )
  }
}


export default App;
