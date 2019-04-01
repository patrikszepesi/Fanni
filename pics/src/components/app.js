import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';



class App extends React.Component {
    state= { images:[] };

  onSearchSubmit = async (term)=> {

    const response = await unsplash
    .get('/search/photos',{
      params:{query: term}, //term from the onSearchSubmit function



    })

      this.setState({images: response.data.results});
  }

  render (){
    return(  <div className = "ui container" style ={{marginTop:'10px'}}>
     <SearchBar onSubmit={this.onSearchSubmit}/>
        <ImageList images ={this.state.images}/>
     </div>

     //on form element you need to call specific onSubmit , here onSubmit is arbitrary, it could have been almost anything else

    );
  }

}// ui contrainer so search bar wouldnt be the entire length of the page

export default App;
