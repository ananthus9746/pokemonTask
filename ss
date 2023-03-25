
  // const [loading, setLoading] = useState(false);
  // const [Data, setData] = useState([]);


  // const [data, setData] = useState([]);
  // const [page, setPage] = useState(1);
  // const [limit, setLimit] = useState(10);

  // const [records, setRecords] = useState([]);



  // // useEffect(() => {
  // //   fetchData();
  // // }, []);

  // // const fetchData = async () => {
  // //   const response = await axios.get(`http://localhost:5000/api/pokemon?page=${page}&limit=${limit}`);
  // //   console.log("response..",response)
  // //   setData(prevData => [...prevData, ...response.data.getedPartners]);
  // //   setPage(page + 1);
  // // };

  // // const handleScroll = () => {
  // //   const scrollTop = document.documentElement.scrollTop;
  // //   const scrollHeight = document.documentElement.scrollHeight;
  // //   const clientHeight = document.documentElement.clientHeight;

  // //   if (scrollTop + clientHeight === scrollHeight) {
  // //     fetchData();
  // //   }
  // // };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const windowHeight =
  //       "innerHeight" in window
  //         ? window.innerHeight
  //         : document.documentElement.offsetHeight;
  //     const body = document.body;
  //     const html = document.documentElement;
  //     const docHeight = Math.max(
  //       body.scrollHeight,
  //       body.offsetHeight,
  //       html.clientHeight,
  //       html.scrollHeight,
  //       html.offsetHeight
  //     );
  //     const windowBottom = windowHeight + window.pageYOffset;
  //     if (windowBottom >= docHeight) {
  //       console.log("page previous..",page)
  //       setPage((prevPage) => prevPage + 1);
  //     }
  //   };
  
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);


  // useEffect(() => {
  //   const fetchRecords = async () => {
  //     const response = await axios.get(`http://localhost:5000/api/pokemon?page=${page}&limit=10`);
  //     // const data = await response.json();
  //     console.log("page previous.2.",page)

  //     setRecords((prevRecords) => [...prevRecords, ...response.data.getedPartners]);
  //   };
  //   fetchRecords();
  // }, [page]);
 