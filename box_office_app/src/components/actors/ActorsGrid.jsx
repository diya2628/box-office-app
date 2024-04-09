import ActorCard from './ActorCard';
import { FlexGrid } from '../common/FlexGrid';
import noImgFound from '../../lib/no-image-found.png';
const ActorsGrid = ({ actors }) => {
  return (
    <FlexGrid>
      {actors.map(data => (
        <ActorCard
          key={data.person.id}
          name={data.person.name}
          image={data.person.image ? data.person.image.medium : noImgFound}
          gender={data.person.gender}
          country={data.person.country ? data.person.country.name : null}
          birthday={data.person.birthday}
          deathday={data.person.deathday}
        >
          {' '}
        </ActorCard>
      ))}
    </FlexGrid>
  );
};
export default ActorsGrid;
