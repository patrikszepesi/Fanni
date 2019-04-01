//1. we run on formSubmit from the form. onFormSubmit is already a funciton me made, we take the event. in Apps.js we set onSubmit to equal this.onSearchSubmit(we passed in the this.state.term, invoked with this) which is a funciton in app.js, which

// we look at the props object. in that object we find the onSubmit property we invoke that function  with this.state.term





import React from 'react';


export class SearchBar extends React.Component { // eslint-disable-line react/prefer-stateless-function

  state= {term:''};

  /*  onInputChange(e){
      //contains the value that the user just typed in
        console.log(e.target.value)
        //uncontrolled element. data only stored in html input and can only be reached through DOM and not React
    }

    onInputClick(){
      console.log("input was clicked")
    }*/

    onFormSubmit = e => {
      e.preventDefault();//keep the browser from submitting the unfinished form and refresh the page

        this.props.onSubmit(this.state.term)
    }


  render() {
    return (
      <div className ="ui segment">
      <form onSubmit = {this.onFormSubmit} className = "ui form">
      <div className = "field">
        <label>Search </label>
        {/*controlled element because its in the state*/}
        <input type = "text" value={this.state.term} onChange={(e)=>this.setState({term:e.target.value})} />
        {/*<input type = "text" onClick = {this.onInputClick} onChange={this.onInputChange} />*/}
      </div>
      </form>

      </div>
    );
  }
}

  //  <input type = "text" onClick = {this.onInputClick} onChange={(event)=>console.log(event.target.value)} /> this is the shorter arrow syntax this way you dont need onInputChange function}

export default SearchBar;
