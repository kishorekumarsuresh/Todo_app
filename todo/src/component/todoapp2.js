import React ,{ Component } from 'react'


import Chip from '@mui/material/Chip';
import AccessTimeIcon from '@mui/icons-material/AccessTime';


class Todoapp2 extends Component {

    removeTodo(e){
        this.props.remove(e);
        console.log(e)
    }
    render(props){

        return (
            
                
            <div className="div1">
               
                <ul>
                    {
                        this.props.task.map((item,index)=>(
                          
                          <h1 key={index}> 
                          <AccessTimeIcon />
                          <Chip 
                          label={item}
                          size="large"
                          variant="outlined"
                          onDelete={() => {this.removeTodo(item)}} />
                          </h1> 
                          
                        ))
                    }
                </ul>
                
            </div>
          
        )
    }
}

export default Todoapp2
