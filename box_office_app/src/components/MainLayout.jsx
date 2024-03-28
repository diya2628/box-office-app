import { Outlet } from 'react-router-dom';
import Navs from './Navs';
import AppTitle from './AppTitle';
const MainLayout = () => {
  return (
    <div>
      <AppTitle />
      <Outlet />
      <Navs />
    </div>
  );
};
export default MainLayout;
