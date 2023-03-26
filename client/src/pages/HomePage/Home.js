import React, { useEffect, useState, useRef } from "react";
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


  const [data, setData] = useState([])
  const [offset, setOffset] = useState(0)
  const [limit,setLimit]=useState(3)
  const [nodData, setnoData] = useState(false)

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:5000/api/pokemon?page=${offset}&limit=${limit}`);
        // const { data, totalPages } = response.data;
        console.log("response.data..", response.data)
        var data = response.data.getedPartners
        var totalPages = response.data.totalPages

        console.log("data..", data)


        if (data.length < 1) {
          setnoData(true)
        }

        setRecords(prevRecords => [...prevRecords, ...data]);
        // setTotalPages(totalPages);

      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchRecords();
  }, [offset]);



  useEffect(() => {


    if (!nodData) {
      
      const handleScroll = (e) => {
        const scrollHeight = e.target.documentElement.scrollHeight
        const currentHeight = e.target.documentElement.scrollTop + window.innerHeight
        if (currentHeight + 1 >= scrollHeight)
          setOffset(offset + 1)
      }

      { data.length > 1 ? console.log("data..here..") : console.log("no data..") }

      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }

  }, [offset])











  return (
    <div className="Home_Wrapper">
      <div className="Card_container">
        {records.map((obj) =>
          <PokemonCard obj={obj} />
        )}

      </div>

      <div ref={loaderRef}>{loading && 'Loading...'}</div>

    </div>
  );
}

export default Home;
