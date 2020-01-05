import React, {Component} from 'react'

class Animals extends Component{
    constructor(props) {
    super(props);
    this.state = {
        allanimals: [],
        }
    }

    myFunction = () => {
        // Declare variables
        var input, filter, ul, li, a, i, txtValue;
        input = document.getElementById('myInput');
        filter = input.value.toUpperCase();
        ul = document.getElementById("ul");
        li = ul.getElementsByClassName('li');
      
        // Loop through all list items, and hide those who don't match the search query
        for (i = 0; i < li.length; i++) {
          a = this.state.allanimals;
          txtValue = a.textContent || a.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
          } else {
            li[i].style.display = "none";
          }
        }
      }

  
render(){
        return(
            <div>
                <input type="text" name="name" id="myInput" onChange={this.myFunction}/>
                <ul id="ul">
                    <li className="li"></li>
                </ul>
            </div>
        )
    }

    componentDidMount(){
        fetch('http://localhost:3000/animals')
        .then( res => res.json())
        .then(data => {
            this.setState({
                allanimals: data
            })
        })
    }

}



export default Animals