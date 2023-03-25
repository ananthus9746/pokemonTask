import React, { useEffect, useState, useRef } from "react";
import { getPokemon } from "../../APIs/Api";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import "./Home.css";
import axios from 'axios'

//   const response = await axios.get(`http://localhost:5000/api/pokemon?page=${page}&limit=10`);
// var response = await fetch(`http://localhost:5000/api/pokemon?page=${page}&limit=5`);
//response.data.getedPartners
//`http://localhost:5000/api/pokemon?page=${page}&limit=5

// axios.get(`//localhost:5000/api/pokemonTwo?skip=${skip}&limit=${limit}`)


function HomeTwo() {

    const [data, setData] = useState([]);
    const [skip, setSkip] = useState(0);
    const [limit, setLimit] = useState(10);
    const [hasMore, setHasMore] = useState(true);


    useEffect(() => {
        fetchData();
    }, [skip]);

    const fetchData = async () => {
        try {
            // const response = await axios.get(`/api/data?skip=${skip}&limit=${limit}`);
            const response = await axios.get(`//localhost:5000/api/pokemonTwo?skip=${skip}&limit=${limit}`);
            console.log("ress..",response.data.data)

            if (response.data.data.length > 0) {
                console.log("ress..",response)
                setData((prevData) => [...prevData, ...response.data.data]);
                setSkip((prevSkip) => prevSkip + limit);
            } else {
                setHasMore(false);
            }
        } catch (error) {
            console.error(error);
        }
    };


    const handleScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop ===
            document.documentElement.offsetHeight
        ) {
            if (hasMore) {
                fetchData();
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <div className="Home_Wrapper">

            <div className="Card_container">
                {data.map((obj) =>
                    <PokemonCard obj={obj} />
                )}

                {hasMore && <div>Loading...</div>}
            </div>



        </div>
    );
}

export default HomeTwo;
