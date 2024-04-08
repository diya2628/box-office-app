import { Link } from 'react-router-dom';
import { SearchCard, SearchImgWrapper } from '../common/SearchCard';
const ActorCard = ({
  name,
  image,

  gender,
  birthday,
  deathday,
  country,
}) => {
  return (
    <SearchCard>
      <SearchImgWrapper>
        <img src={image} alt={name} />
      </SearchImgWrapper>
      <h1>
        {name}
        {!!gender && `(${gender})`}
      </h1>

      <p>{country ? `Comes from ${country}` : 'No country known'}</p>

      {!!birthday && <p>`Born on ${birthday}`</p>}

      <p>{deathday ? `Dead on ${deathday}` : 'Alive'}</p>
    </SearchCard>
  );
};
export default ActorCard;
