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
        this.placeLooper()
    }
  
    handleChange = (event) => {
        this.setState({searchedAnimal: event.target.value.toLowerCase()});
       }

    handleSearch = () => {
    let grabbedAnimal = (this.state.allanimals.filter(obj => obj.name === this.state.searchedAnimal)) // returns the whole object if match
    let grabbedGroup = (grabbedAnimal.map(object => object.group))
    document.getElementById("searched").innerHTML = grabbedGroup
   }

    placeLooper = () =>{
        var placeholders = ['bees','gorillas','zebras','lions', 'chickens','alligators'];
        var length  = placeholders.length;
        var counter = 0;
        var inquire = document.getElementById('myInput');

    function ChangePlaceholder(){
        if(counter>=length){
        counter=0;
        }
   
        inquire.setAttribute('placeholder',placeholders[counter]);
 
        counter++;
    }
  
    setInterval(ChangePlaceholder,1000);
    }

   
 render(){
      
     return(
            <div>
                <h1 id="header">Animal-Search</h1>
               
                <input type="text" placeholder="oysters" name="name" id="myInput" onChange={this.handleChange}/>
               
                <button id="button" onClick={this.handleSearch}>Search</button>
               
                <p id="searched"></p>

              
               </div>
        )
    }

   

}



export default Animals



