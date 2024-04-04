import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getShowById } from '../api/tvmaze';
import { useQuery } from '@tanstack/react-query';
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
  });
  if (showError) {
    return <div>Error Occurred {showError.message}</div>;
  }

  if (showData) {
    return <div>Show data fetched: {showData.name}</div>;
  }
  return <div>Page is loading</div>;
};
export default Show;
