import React, {Component} from 'react';

class Input extends Component {
    constructor(){
        super()
        this.state={
            list:{
                input:''
            }
        }
    } 
    handleChange = (event)=> {
        console.log('test')
        // let updatedList = {...this.state.list}
        // updatedList.input = event.target.value

        // this.setState({
        //     list: updatedList
        // })
    }
    handleSubmit = (event)=>{
        event.preventDefault()

        this.props.handleListSubmit(event, this.state.blog)

        this.setState({
            list:{
                input:''
            }
        })
    }
    render(){

    
  return (
    <div className="ui fluid input">
      <input type="text" 
      placeholder='enter new todo'
      onChange={this.props.handleChange}
      value={this.state.list.input} 
      onKeyDown={this.props.handleKeyDown}
      />
      
    </div>
  );
};
}

export default Input;
