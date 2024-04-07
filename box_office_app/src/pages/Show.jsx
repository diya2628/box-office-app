import { Link, useParams } from 'react-router-dom';
// import { useEffect, useState } from 'react';
import { getShowById } from '../api/tvmaze';
import { useQuery } from '@tanstack/react-query';
import ShowMainData from '../components/shows/ShowMainData';
import Details from '../components/shows/Details';
import Seasons from '../components/shows/Seasons';
import Cast from '../components/shows/Cast';
// const useShowById = showId => {
//   const [showData, setShowData] = useState(null);
//   const [showError, setShowError] = useState(null);

//   useEffect(() => {
//     async function fetchData() {   //appstrict mode doesnt support with useeffect
//       try {
//         const data = await getShowById(showId);
//         setShowData(data);
//       } catch (err) {
//         setShowError(err);
//       }
//     }
//     fetchData();
//   }, [showId]);

//   return { showError, showData };
// };

const Show = () => {
  const { showId } = useParams();

  // const { showData, showError } = useShowById(showId);

  const { data: showData, error: showError } = useQuery({
    queryKey: ['show', showId], //for app strict mode we used query key
    queryFn: () => getShowById(showId),

    refetchOnWindowFocus: false,
  });
  if (showError) {
    return <div>Error Occurred {showError.message}</div>;
  }

  if (showData) {
    return (
      <div>
        <Link to="/">Go Back To Home </Link>
        <ShowMainData
          image={showData.image}
          name={showData.name}
          genres={showData.genres}
          rating={showData.rating}
          summary={showData.summary}
        />
        <div>
          <h2>Details</h2>
          <Details
            status={showData.status}
            premiered={showData.premiered}
            network={showData.network}
          />
        </div>
        <div>
          <h1> Seasons:</h1>
          <Seasons seasons={showData._embedded.seasons} />
        </div>
        <div>
          <h1> Cast:</h1>
          <Cast cast={showData._embedded.cast} />
        </div>
      </div>
    );
  }
  return <div>Page is loading</div>;
};
export default Show;
