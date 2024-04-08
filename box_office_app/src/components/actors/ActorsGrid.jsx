import ActorCard from './ActorCard';
import { FlexGrid } from '../common/FlexGrid';
const ActorsGrid = ({ actors }) => {
  return (
    <FlexGrid>
      {actors.map(data => (
        <ActorCard
          key={data.person.id}
          name={data.person.name}
          image={
            data.person.image ? data.person.image.medium : '/no-image-found.png'
          }
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
