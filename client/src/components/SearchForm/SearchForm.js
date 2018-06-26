import React from "react";
import "./SearchForm.css";

const SearchForm = props => (


  <form >
    <div className="container">
      <div className="form-group row">
        <div className="col-5 ">
          <label for="exampleFormControlInput1">Message Title</label>
          <input type="title" className="form-control" id="exampleFormControlInput1" placeholder="Title" />
        </div>
      </div>


      <div className="form-group">
        <div className="form-group row">
          <div className="col-5">
            <label for="exampleFormControlTextarea1">Example textarea</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
          </div>
        </div>
      </div>
      <button type="submit" className="btn btn-primary">Toss it into the sea!</button>
    </div >

  </form >
);

export default SearchForm;
