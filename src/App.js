import { useState, useEffect } from 'react';
import Form from './Form';
import Table from './Table';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
  }
  
  td > div {
    margin: 0 auto;
  }
`;

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
      <GlobalStyle />
      <Form setCars={setCars} url={url}/>
      <Table cars={cars} setCars={setCars} url={url}/>
    </>
  )
    
}

export default App;
