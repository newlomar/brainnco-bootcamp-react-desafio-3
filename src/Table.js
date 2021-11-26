// import { useState, useEffect } from 'react';

function Table({ cars, setCars, url }) {

  function deleteCar(plate) {
    const body = {
      plate: plate
    }
    fetch(url, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(body)
    })
    .then((result) => {
      if (!result.ok) {
        return result.json()
      }
  
      return result.json()
    })
    .then((res) => {
  
      if(res.error) {
        console.log('Erroooooooooooooooooooooooooooooooor!')
      }
  
      console.log(res.message)
  
    })
    .catch(error => console.log('Erro: ', error))
  }

  function handleDelete(e) {
    const plate = e.target.getAttribute('plate');
    deleteCar(plate);
    setCars(cars.filter((item) => item.plate !== plate));
  } 

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
                <tr key={item.plate}>
                  <td><img src={`${item.image}`} alt="car" /></td>
                  <td>{item.brandModel}</td>
                  <td>{item.year}</td>
                  <td>{item.plate}</td>
                  <td
                    className="square"
                    style= {{ backgroundColor: `${item.color}` }}
                  >
                  </td>
                  <td><button onClick={handleDelete} plate={item.plate}>Excluir</button></td>
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