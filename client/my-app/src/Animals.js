import React, {Component} from 'react'

class Animals extends Component{
    constructor(props) {
    super(props);
    this.state = {
        allanimals: [],
        }
    }

        myFunction() {
        // Declare variables
        var input, filter, li, a, i, txtValue;
        input = document.getElementById('myInput');
        filter = input.value.toUpperCase();
        li = document.getElementsByClassName('animals');
      
        // Loop through all list items, and hide those who don't match the search query
        for (i = 0; i < li.length; i++) {
          a = document.getElementsByClassName("animals")[0];
          txtValue = a.textContent || a.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
          } else {
            li[i].style.display = "none";
          }
        }
      }

  

render(){
   let FetchAnimal = this.state.allanimals.map(animal =>
            <div>
                <ul id="myMenu">
                    <li className="animals">{animal.name} - {animal.group}</li>
                </ul>
            </div>)
        return(
            <div>
                 <input type="text" name="name" id="myInput" value={this.state.name} onChange={this.myFunction} />
                <h1>Animal group name</h1>
                <p>Our database consists of animals and their group name. Simply type in the animal or your choice. Or scroll through the list to see what a group of them is called!</p>
                <p>{FetchAnimal}</p>
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