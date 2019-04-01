import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar'



class App extends React.Component {

  state= { images:[] };

  onSearchSubmit(term) {

    axios.get('https://api.unsplash.com/search/photos',{
      params:{query: term}, //term from the onSearchSubmit function
      headers: {
        Authorization: 'Client-ID f73e545458bb44abebae2aa5be5beb9f3dda3be34161172d880a73af3d768931 '
      }


    }).then (res =>{

    });

    
  }

  render (){
    return(  <div className = "ui container" style ={{marginTop:'10px'}}>
     <SearchBar onSubmit={this.onSearchSubmit}/> </div>

     //on form element you need to call specific onSubmit , here onSubmit is arbitrary, it could have been almost anything else

    );
  }

}// ui contrainer so search bar wouldnt be the entire length of the page

export default App;
