const ShowMainData = ({ image, name, genres, rating, summary }) => {
  return (
    <div>
      <img src={image ? image.original : '/no-image-found.png'} alt={name} />
      <div>
        <h1>{name}</h1>
        <div>{rating.average || 'N/A'}</div>
        <div dangerouslySetInnerHTML={{ __html: summary }} />
        <div>
          Genres:
          <div>
            {genres.map(genre => (
              <span key={genre}>{genre}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShowMainData;
