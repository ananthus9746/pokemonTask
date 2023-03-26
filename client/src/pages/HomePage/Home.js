import React,{useEffect,useState,useRef} from "react";
import { getPokemon } from "../../APIs/Api";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import "./Home.css";
import axios from 'axios'



function Home() {

  const [records, setRecords] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const loaderRef = useRef(null);


  const [data,setData]=useState([])
  const [offset,setOffset]=useState(0)

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:5000/api/pokemon?page=${offset}&limit=5`);
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
  }, [offset]);


  useEffect(()=>{
    const handleScroll=(e)=>{
      const scrollHeight=e.target.documentElement.scrollHeight
      const currentHeight=e.target.documentElement.scrollTop +window.innerHeight
      if(currentHeight+1 >= scrollHeight)
      setOffset(offset+1)
    }
    window.addEventListener("scroll",handleScroll)
    return()=>window.removeEventListener("scroll",handleScroll)
  },[offset])










  // useEffect(() => {
  //   const options = {
  //     root: null,
  //     rootMargin: '0px',
  //     threshold: 1.0
  //   };

  //   console.log("scoll..")
    
  //   const observer = new IntersectionObserver(([entry]) => {
  //     console.log('IntersectionObserver triggered'); 

  //     if (entry.isIntersecting && page < totalPages && !loading) {
  //       setPage(prevPage => prevPage + 1);
  //     }
  //   }, options);
  //   if (loaderRef.current) {
  //     console.log('IntersectionObserver 1')

  //     observer.observe(loaderRef.current);

  //   }
  //   return () => {
  //     if (loaderRef.current) {
  //       console.log('IntersectionObserver 2')

  //       observer.unobserve(loaderRef.current);
  //     }
  //   };
  // }, [page, totalPages, loading]);

  // if (error) return <div>Error: {error}</div>;


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
