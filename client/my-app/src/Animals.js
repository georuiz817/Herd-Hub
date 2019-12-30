import React, {Component} from 'react'

class Animals extends Component{
    constructor(props) {
    super(props);
    this.state = {
        allanimals: [],
        }
        
  }

render(){
   let FetchAnimal = this.state.allanimals.map(animal =>
            <div>
                <ul>
                    <li>{animal.name} == {animal.group}</li>
                </ul>
            </div>)
        return(
            <div>
                 <input type="text" name="name" id="name" value={this.state.name} onChange={this.myFunction} />
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