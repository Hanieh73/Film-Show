import { Link } from "react-router-dom";

export default function Homepage() {
  const linkStyles = {
    color: "#FF731D",
  };
  return (
    <>
      <h1>Top Tv</h1>
      <span>All about the smaller silver screen</span>
      <ul>
        <li>
          <Link to="/shows" style={linkStyles}>
            Explore Shows
          </Link>
        </li>
        <Link to="/search" style={linkStyles}>
          Search your favourite show
        </Link>
      </ul>
    </>
  );
}
