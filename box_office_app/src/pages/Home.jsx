import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div>
      <h1>home page</h1>
      <Link to="/Starred">go to starred page</Link>
    </div>
  );
};
export default Home;
