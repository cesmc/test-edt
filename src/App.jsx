import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

const URL = "https://recruiting-datasets.s3.us-east-2.amazonaws.com/data_melp.json"

function App() {
  const [data, setData] = useState([])
  
  const fetchData = () => {
    axios.get(URL)
    .then((response) => response.data)
    .then((res) => {
      setData(res);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
  };

  useEffect(() => {
    fetchData();
  }, [])

  console.log('data', data)
  return (
    <>
      <h1>TEST - EDT</h1>
      
    </>
  )
}

export default App
