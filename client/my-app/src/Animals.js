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
        this.setState({searchedAnimal: event.target.value.toLowerCase()});
       }

    handleSearch = () => {
    let grabbedAnimal = (this.state.allanimals.filter(obj => obj.name === this.state.searchedAnimal)) // returns the whole object if match
    let grabbedGroup = (grabbedAnimal.map(object => object.group))
    document.getElementById("searched").innerHTML = grabbedGroup
}

  

  
    
    render(){
      
     return(
            <div>
                <h1>Animal Filter</h1>
                
                <input type="text" name="name" id="myInput" onChange={this.handleChange}/>
               
                <button onClick={this.handleSearch}>Search</button>
               
                <p id="searched"></p>
        

               </div>
        )
    }

   

}



export default Animals


// if the filter state object is equal to the name attribute of any allanimals object
// return the corresponding allanimals objects group 

//if the text of the input is equal to the name attribute of any allanimals object
//return that allanimals objects group
