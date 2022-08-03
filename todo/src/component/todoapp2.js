import React ,{ Component } from 'react'

class Todoapp2 extends Component {


    render(props){

        return (
            <div>
               
                <ul>
                    {
                        this.props.task.map(item =>(
                          <li key={item}>{item} <button>X</button></li> 
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default Todoapp2