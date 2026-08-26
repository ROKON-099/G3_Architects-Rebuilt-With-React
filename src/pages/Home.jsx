import { useState, useEffect } from "react";
import Banner from "../components/banner";
import Facts from "../components/Facts";
import Feature from "../components/Feature";
import Review from "../components/review";
import Sponsors from "../components/Sponsors";
import Spinner from "../components/LoadingSpinner"; // import koro

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // page load er animation er jonno
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Spinner />; // full page spinner
  }

  return (
    <div>
      <Banner />
      <Feature/>
      <Review/>
      <Facts/>
      <Sponsors/>
    </div>
  );
};

export default Home;