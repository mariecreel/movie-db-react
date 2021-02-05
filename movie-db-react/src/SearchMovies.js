import React from "react";

export default function SearchMovies(){
  return(
    <form className="form">
      <label className="label" htmlFor="query">Movie Name</label>
      <input className="query" type="text" name="query" placeholder="i.e. Gone with the Wind"/>
      <button className="button" type="submit">Search</button>
    </form>
  )
}
