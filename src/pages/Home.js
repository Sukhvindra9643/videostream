import React, { Fragment,useEffect } from "react";
import Videos from "./Videos";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Fragment>
      <div style={{ height: "60vh" }}>
        <img
          src="https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
          style={{
            height: "60vh",
            width: "99.9vw",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          alt=""
        />
      </div>
      <div>
        <h2 className="mt-3 mb-0 px-3 fs-1 text-center">Videos</h2>
        <Videos />
      </div>
    </Fragment>
  );
};

export default Home;
