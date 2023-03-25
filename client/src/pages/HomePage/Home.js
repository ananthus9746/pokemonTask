import React,{useEffect,useState} from "react";
import { getPokemon } from "../../APIs/Api";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import "./Home.css";
import axios from 'axios'

function Home() {

  // const [loading, setLoading] = useState(false);
  // const [Data, setData] = useState([]);


  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get(`http://localhost:5000/api/pokemon?page=${page}&limit=${limit}`);
    console.log("response..",response)
    setData(prevData => [...prevData, ...response.data.getedPartners]);
    setPage(page + 1);
  };

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight === scrollHeight) {
      fetchData();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
 


  getPokemon()
  return (
    <div className="Home_Wrapper">
      <div className="Card_container">
        {data.map((obj)=>
        <PokemonCard obj={obj}/>
        )}
      
      </div>
    </div>
  );
}

export default Home;
