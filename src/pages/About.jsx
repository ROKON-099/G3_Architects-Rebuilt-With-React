import Spinner from "../components/LoadingSpinner";
import { useState, useEffect } from "react";
import Review from "../components/review";

const About = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Spinner />; 
  }
  return (
    <div>
      <Review/>
      
     
    </div>
  )
}

export default About
