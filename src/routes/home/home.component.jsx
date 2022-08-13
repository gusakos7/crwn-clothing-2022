import { Fragment } from "react";
import Directory from "../../components/directory/directory.component";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <Fragment>
      <Directory />
      <Outlet />
    </Fragment>
  );
};

export default Home;
