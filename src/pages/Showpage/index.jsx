import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShowCard from "../../components/ShowCard";
export default function Showpage() {
  const [show, setShow] = useState({ image: {}, rating: {} });
  const { id } = useParams();
  useEffect(() => {
    async function displayShow() {
      const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
      const data = await response.json();
      console.log(data);
      setShow(data);
    }
    displayShow();
  }, []);

  return <ShowCard show={show} />;
}
