import React, { useEffect, useState, useRef } from "react";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import "./Home.css";
import axios from "axios";

function Home() {
 
  const [posts, setPost] = useState([]);
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(6);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    fetchRecords();
  }, [skip]);

  const fetchRecords = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/pokemon?skip=${skip}&limit=${limit}`
      );
      const data = response.data.getedPartners;

      if (data?.length === 0) {
        setIsEnd(true);
      }

      setPost([...posts, ...data]);
    } catch (error) {
      console.log("err..", error);
    }
  };

  const handleScroll = (e) => {
    const { offsetHeight, scrollTop, scrollHeight } = e.target;
    if (offsetHeight + scrollTop >= scrollHeight) {
      setSkip(posts?.length);
    }
  };

  const divStyle = {
    overflowY: "scroll",
    border: "1px solid gray",
    height: "800px",
    backgroundColor:"aqua"
  };

  return (
    <div className="home_wrapper">
      <div style={divStyle} onScroll={handleScroll}>
        <div className="Card_container">
          {posts.map((obj) => (
            <PokemonCard obj={obj} />
          ))}
        </div>
        {isEnd && <h1 className="end">END REACHED</h1>}
      </div>
    </div>
  );
}

export default Home;
