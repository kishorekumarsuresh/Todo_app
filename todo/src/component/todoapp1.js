import React , {Component}  from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import './app.css'
class Todoapp1 extends Component {
     
   

    render (props){
        return (
        <div className='div2'>
            <h1>Todo App</h1>
            <>
            <TextField 
            label="Events"
            id="outlined-size-small"
            size="small"
            value={this.props.eve}
            onChange={this.props.add}/> 
            <Button variant="contained" size="medium" color="success" onClick={this.props.addEvent}>Add (+) </Button>
            </>
        </div>
        )
    }
}

export default Todoapp1 
