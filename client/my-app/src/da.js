import React, {Component} from 'react'

class Animal extends Component{
state = {
        allanimals: []
        }
    

componentDidMount(){
    const baseUrl = 'http://localhost:3000'
    fetch(baseUrl + '/animals/')
    .then( res => res.json())
    .then(data => {
        this.setState({
            allanimals: data.Animal
        })
    })
}


    render(){
        const FetchAnimal = this.state.allanimals.map(animal =>
        <div>
            <ul>
                <li>{animal.name}</li>
            </ul>
        </div>)
        
        return(
            <div>
                {FetchAnimal}
            </div>
        )
    }

}

export default Animal