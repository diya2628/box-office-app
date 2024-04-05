import { useStarredShows } from '../lib/useStarredShows';
const Starred = () => {
  const [starredShows] = useStarredShows();
  return <div>Starred page,Starred: {starredShows.length}</div>;
};
export default Starred;
