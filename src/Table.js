import { useState, useEffect } from 'react';

const url = 'http://localhost:3333/cars';

function Table() {
  const [cars, setCars] = useState([]);
  
  useEffect(() => {
    async function getCars() {
      const response = await fetch(url)
      const json = await response.json()
      setCars(json)
      
      // clean
    }
    
    getCars();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Imagem</th>
          <th>Marca ou Modelo</th>
          <th>Ano do Carro</th>
          <th>Placa</th>
          <th>Cor do Carro</th>
        </tr>
      </thead>
      <tbody>
        {
          cars.length > 0 ? 
            cars.map((item) => {
              return(
                <tr>
                  <td><img src={`${item.image}`} alt="car" /></td>
                  <td>{item.brandModel}</td>
                  <td>{item.year}</td>
                  <td>{item.plate}</td>
                  <td>{item.color}</td>
                </tr>
              );
            }) :
            <tr>
              <td>'Nenhum carro encontrado.'</td>
            </tr>
        }
      </tbody>
    </table>
  )
}

export default Table;