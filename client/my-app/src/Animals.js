import React, {Component} from 'react'

class Animals extends Component{
    constructor(props) {
    super(props);
    this.state = {
        allanimals: [],
        searchedAnimal: ""
        }
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
  
    handleChange = (event) => {
        this.setState({searchedAnimal: event.target.value});
       
    }

    handleSearch = () => {
    console.log(this.state.allanimals.filter(obj => obj.name === this.state.searchedAnimal))
    console.log(this.state.allanimals.map(obj => obj.name === this.state.searchedAnimal))
    }

    
    
    render(){
        let FetchAnimal = this.state.allanimals.map(animal =>
            <div key={animal.id}>
                <ul className="myUl">
                    <li className="liName">{animal.name}</li>
                    <li className="liGroup"> {animal.group}</li>
                </ul>
            </div>)
     
     return(
            <div>
            <button onClick={this.handleSearch}>a</button>
                <h1>Animal Filter</h1>
                
                <h2>type in the name of an animal. Get the scientific group name back!</h2>
                
                <input type="text" name="name" id="myInput" onChange={this.handleChange}/>
                
                <p id="searched"></p>
        
               {FetchAnimal}
              
               {this.state.searchedAnimal}

            </div>
        )
    }

   

}



export default Animals


// if the filter state object is equal to the name attribute of any allanimals object
// return the corresponding allanimals objects group 

//if the text of the input is equal to the name attribute of any allanimals object
//return that allanimals objects group
