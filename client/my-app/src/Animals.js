import React, {Component} from 'react'

class Animals extends Component{
    constructor(props) {
    super(props);
    this.state = {
        allanimals: [],
        filter: ""
        }
    }

    handleChange = (event) => {
        this.setState({filter: event.target.value});
        if(this.filter === document.getElementsByClassName("liName").innerHTML){
            document.getElementById("searched").innerHTML = document.getElementsByClassName("liGroup").innerHTML
    }
        }
    
        

render(){
   
    let FetchAnimal = this.state.allanimals.map(animal =>
        <div>
            <ul>
                <li className="liName">{animal.name}</li>
                <li className="liGroup"> {animal.group}</li>
            </ul>
        </div>)

                return(
            <div>
                <input type="text" name="name" id="myInput" onChange={this.handleChange}/>
                <p id="searched"></p>
               {FetchAnimal}
               {this.state.filter}
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