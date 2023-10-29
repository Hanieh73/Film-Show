//retrieve the shows from the API
//once retrieved, we want to store them in state
//once stired, we want to map through the shows and render a card/div in each show in the array
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GalleryImage from "../GalleryImage";
let url = "https://api.tvmaze.com/shows";

export default function ShowGallery() {
  const [shows, setShows] = useState([]);
  useEffect(() => {
    //fetch request
    async function displayShows() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data);
        setShows(data);
      } catch (error) {
        console.log(error);
      }
    }
    displayShows();
  }, []);

  //when we keep the depencies array empty, it's because we only want this to run once
  return (
    <div className="shows">
      {shows.map((show) => (
        <Link key={show.id} to={`${show.id}`}>
          <GalleryImage show={show} />
        </Link>
      ))}
    </div>
  );
}
