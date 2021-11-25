import { useState, useEffect } from 'react';
import './App.css';
import Form from './Form';
import Table from './Table';


function App() {

  const [cars, setCars] = useState([]);
  const url = 'http://localhost:3333/cars';


  useEffect(() => {
    async function getCars() {

      const response = await fetch(url)
      const json = await response.json()
      setCars(json);
    }
    
    getCars();

    return () => {
      console.log('clean app');
    }

  }, []);


  return (
    <>
      <Form setCars={setCars} url={url}/>
      <Table cars={cars} setCars={setCars} url={url}/>
    </>
  )
    
}

export default App;
