import ShowCard from './ShowCard';
const ShowsGrid = ({ shows }) => {
  return (
    <div>
      {shows.map(data => (
        <ShowCard
          key={data.show.id}
          name={data.show.name}
          image={
            data.show.image ? data.show.image.medium : '\no-image-found.png'
          }
          summary={data.show.summary}
        ></ShowCard>
      ))}
      ;
    </div>
  );
};
export default ShowsGrid;
