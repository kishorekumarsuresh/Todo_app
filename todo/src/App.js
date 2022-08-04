
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
    if (this.state.task.length<6){
    if (this.state.eve!=="" && !(this.state.task.includes(this.state.eve))){
    this.setState({task : [...this.state.task,this.state.eve]})
    this.setState({eve:""})
  }
    else if (this.state.eve===""){
      alert("empty event")
    }
    else if (this.state.task.includes(this.state.eve)){
      alert("Event already exist")
      this.setState({eve:""})
    }
    else{
      this.setState({eve:""})
    }
  }
  else{
    alert("Events get fulled")
    this.setState({eve:" "})
  }
  }

  removeEvent =(e)=> {

    this.setState({
      task : this.state.task.filter((element => element!==e))
    })
  
  }

  render(){
    return (
      <div className="App">
      <Todoapp1 eve={this.state.eve}  task={this.props.task} add={this.handleChange} addEvent={this.addEvent} />

      <Todoapp2 task={this.state.task} remove={this.removeEvent}/>
    </div>
    )
  }
}


export default App;
