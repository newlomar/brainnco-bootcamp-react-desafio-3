import { useState, useEffect } from 'react';

const url = 'http://localhost:3333/cars';

function Table() {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    async function getCars() {
      const response = await fetch(url)
      const json = await response.json()
      console.log(json)
    }

    getCars()
  })

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
      { }
    </table>
  )
}

export default Table;