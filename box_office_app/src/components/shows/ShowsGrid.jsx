import { useEffect, useReducer } from 'react';
import ShowCard from './ShowCard';
import { useStarredShows } from '../../lib/useStarredShows';
import { FlexGrid } from '../common/FlexGrid';
import noImgFound from '../../lib/no-image-found.png';
const ShowsGrid = ({ shows }) => {
  const [starredShows, dispatchStarred] = useStarredShows();
  const onStarMeClick = showId => {
    const isStarred = starredShows.includes(showId);
    if (isStarred) dispatchStarred({ type: 'UNSTAR', showId });
    else dispatchStarred({ type: 'STAR', showId });
  };

  return (
    <FlexGrid>
      {shows.map(data => (
        <ShowCard
          key={data.show.id}
          id={data.show.id}
          name={data.show.name}
          image={data.show.image ? data.show.image.medium : noImgFound}
          summary={data.show.summary}
          onStarMeClick={onStarMeClick}
          isStarred={starredShows.includes(data.show.id)}
        />
      ))}
      ;
    </FlexGrid>
  );
};
export default ShowsGrid;
