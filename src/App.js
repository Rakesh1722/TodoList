import React, {Component } from 'react';

class App extends Component{

  componentDidMount = () => {
      document.getElementById('addBtn').addEventListener('click', function() {
        var input = document.getElementById('textInput');
        var text = input.value;
       
        var newDiv = document.createElement("div"); 
        var newContent = document.createTextNode(text); 
        newDiv.appendChild(newContent);
      
        var display = document.getElementById('display');
        display.appendChild(newDiv);
      
        input.value = '';
      }); 
  }
  render(){
    return (
      <div className="App">
        <div className="justify-content-center align-self-center" style={{border:"1px solid black",align:"center",background:"lightblue",width:"50%"}}>
          <div class="innercard" style={{margin:"50px",background:"white",height:"350px"}}>
            <br/>
            <center><h1 style={{color:"blue"}}>Todo List</h1></center>
            <center><input id="textInput" placeholder="Add your subtasks" type="text" style={{width:"250px",borderWidth:0,borderBottomWidth : 1.0 }}  />&nbsp;&nbsp;&nbsp;
            <button id="addBtn">Add Task</button></center>
            <a href="#" >
              <div id="display" style={{marginLeft:"23%"}}></div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
