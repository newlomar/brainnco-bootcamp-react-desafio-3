import { useState } from 'react';

function Form({ setCars, url }) {

  const [inputs, setInputs] = useState({
    image_url: '',
    marca_modelo: '',
    ano: '',
    placa: '',
    cor: ''
  });

  function handleSubmit(e) {
    const body = {
      image: inputs.image_url,
      brandModel: inputs.marca_modelo,
      year: inputs.ano,
      plate: inputs.placa,
      color: inputs.cor
    }

    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(body)
    })
    .then((result) => {
      if (!result.ok) {
        return result.json();
      }
      return result.json();
    })
    .then((res) => {
      if(res.error) {
        console.log('erooooooooor!');
      }
      
      setCars((prevState) => {

        return [
          ...prevState,
          body
        ]

      })

      console.log(res.message);
    })
    .catch((error) => console.log('Erou: ', error));

    e.preventDefault();
  }

  function handleChange(e) {
    const {name, value} = e.target;
    setInputs((prevState) => (
      {
        ...prevState,
        [name]: value
      }
    ));
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="image_url">URL de Imagem do carro:</label>
      <input type="text" name="image_url" id="image_url" onChange={handleChange}/>

      <label htmlFor="marca_modelo">Marca ou Modelo:</label>
      <input type="text" name="marca_modelo" id="marca_modelo" onChange={handleChange}/>

      <label htmlFor="ano">Ano do carro:</label>
      <input type="text" name="ano" id="ano" onChange={handleChange}/>

      <label htmlFor="placa">Placa:</label>
      <input type="text" name="placa" id="placa" onChange={handleChange}/>

      <label htmlFor="cor">Cor do carro:</label>
      <input type="color" name="cor" id="cor" onChange={handleChange}/>
      <button type="submit">Cadastrar</button>

    </form>
  )
}

export default Form;