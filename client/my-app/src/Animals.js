import React, {Component} from 'react'
import { Icon } from '@iconify/react';
import magnifyingGlass from '@iconify/icons-oi/magnifying-glass';


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

    handleSearch = (e) => {
    e.preventDefault()
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
        <div className="siteDiv">
            <h1 id="header">Herd-Hub</h1>
            <h6 id="desc"><u>The animal group search bar</u></h6>
            <div id="myForm">
                <form onSubmit={this.handleSearch}>
                    <input type="text" placeholder="oysters" name="name" id="myInput" onChange={this.handleChange}/>
                    <button id="button" type="submit"><Icon icon={magnifyingGlass} width="20px" height="20px" /></button>
                </form>
            </div>
            <p id="searched"></p>
            
        </div>
        )
    }
}

export default Animals





