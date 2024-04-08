import { useStarredShows } from '../lib/useStarredShows';
import { useQuery } from '@tanstack/react-query';
import { getShowsByIds } from '../api/tvmaze';
import ShowsGrid from '../components/shows/ShowsGrid';
import { TextCenter } from '../components/common/TextCenter';
const Starred = () => {
  const [starredShowsIds] = useStarredShows();

  const { data: starredShows, error: starredShowsError } = useQuery({
    queryKey: ['starred', starredShowsIds], //for app strict mode we used query key
    queryFn: async () =>
      getShowsByIds(starredShowsIds).then(result =>
        result.map(show => ({ show }))
      ),
    refetchOnWindowFocus: false,
  });

  if (starredShows?.length === 0) {
    return <TextCenter>No shows were starred</TextCenter>;
  }
  if (starredShows?.length > 0) {
    return <ShowsGrid shows={starredShows} />;
  }

  if (starredShowsError) {
    return <div>{starredShowsError.message}</div>;
  }

  return <TextCenter>Shows are loading</TextCenter>;
};
export default Starred;
