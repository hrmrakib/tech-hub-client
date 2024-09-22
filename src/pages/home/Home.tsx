import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div>
      <h3>This is home</h3>
      <Link to={"/blogs"}>Blogs</Link>
    </div>
  );
};

export default Home;
