import React from "react";

export default function SearchMovies(){

  const searchMovies = async (event) => {
    event.preventDefault();
    console.log("submitting");

    const query = "Jurassic Park"; // debug
    const url=`https://api.themoviedb.org/3/search/movie?api_key=a77003fdb339c52990623603a013c891&language=en-US&query=${query}&page1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data)
    }catch(err){
      console.log(err)
    }
  }

  return(
    <form className="form" onSubmit={searchMovies}>
      <label className="label" htmlFor="query">Movie Name</label>
      <input className="query" type="text" name="query" placeholder="i.e. Gone with the Wind"/>
      <button className="button" type="submit">Search</button>
    </form>
  )
}
