import Spinner from "../components/LoadingSpinner";
import { useState, useEffect } from "react";
import Review from "../components/review";

const About = () => {
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
      <Review/>
      
     
    </div>
  )
}

export default About
