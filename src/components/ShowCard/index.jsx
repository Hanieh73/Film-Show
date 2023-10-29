export default function ShowCard({ show }) {
  return (
    <div className="show-card">
      <div>
        <img src={show.image.medium} />
      </div>
      <div>
        <div>{show.rating.average}</div>
        <h2>{show.name}</h2>
        <em>
          {show.language}, {show.premiered}
        </em>
        <div dangerouslySetInnerHTML={{ __html: show.summary }} />
      </div>
    </div>
  );
}
//dangerouslySetInnerHTML={} would allow us to render the html tags in the summary and avoid the tags being rendered as text
