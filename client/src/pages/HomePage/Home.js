import React,{useEffect,useState,useRef} from "react";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import "./Home.css";
import axios from 'axios'

//   const response = await axios.get(`http://localhost:5000/api/pokemon?page=${page}&limit=10`);
// var response = await fetch(`http://localhost:5000/api/pokemon?page=${page}&limit=5`);
//response.data.getedPartners
//`http://localhost:5000/api/pokemon?page=${page}&limit=5

function Home() {

  const [records, setRecords] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const loaderRef = useRef(null);

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:5000/api/pokemon?page=${page}&limit=10`);
        // const { data, totalPages } = response.data;
        console.log("response.data..",response.data)
        var data=response.data.getedPartners
        var totalPages=response.data.totalPages
        setRecords(prevRecords => [...prevRecords, ...data]);
        setTotalPages(totalPages);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchRecords();
  }, [page]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0
    };
    
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && page < totalPages && !loading) {
        setPage(prevPage => prevPage + 1);
      }
    }, options);
    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }
    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [page, totalPages, loading]);

  if (error) return <div>Error: {error}</div>;


  return (
    <div className="Home_Wrapper">
      <div className="Card_container">
        {records.map((obj)=>
        <PokemonCard  obj={obj}/>
        )} 
      </div>
      <div ref={loaderRef}>{loading && 'Loading...'}</div>
    </div>
  );
}

export default Home;
