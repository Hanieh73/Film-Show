import { useState, useEffect } from "react";
import ShowCard from "../ShowCard";

export default function SearchForm() {
  const [inputValue, setInputValue] = useState("");
  const [searchString, setSearchString] = useState("Arrow");
  const [showData, setShowData] = useState([]); // [{}, {}, {}]
  function handleInput(event) {
    console.log(event.target.value);
    setInputValue(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log("submitted");
    setSearchString(inputValue);
    setInputValue("");
  }
  useEffect(() => {
    async function searchAPI() {
      const response = await fetch(
        `https://api.tvmaze.com/search/shows?q=${searchString}`
      );
      const data = await response.json();
      //s represents an array with objects in, each object in the array {score: , show: {name: , image: {medium: , original: }, summary: , genres: []}}
      const showData = data.map((s) => s.show);
      setShowData(showData);
    }
    searchAPI();
    //so by adding searchString to the dependency array, we are telling react to run this useEffect everytime the searchString changes as well as when the page renders for the first time
  }, [searchString]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" required onChange={handleInput} value={inputValue} />
        <input type="submit" value="Search" />
      </form>
      {/* so below we are using ternary operator to say if the show has an image, then render the show card, otherwise render nothing */}
      {showData.map((s) => (s.image ? <ShowCard key={s.id} show={s} /> : ""))}
    </>
  );
}

// so in gerenal you first need to build you pages, then define your routess, then build you pages one by one; you need to decide what components you need for each page, then build those components. You need to decide what data you need for each component, then fetch that data and store it in state, then pass that data down to the component as props and render it. You need to decide what functionality you need for each component, then write the functions and pass them down to the component as props and call them when needed. You need to decide what styling you need for each component, then write the css and import it into the component.
