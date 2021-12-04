import { useState } from 'react';
import styled from 'styled-components';

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
      <StyledLabel htmlFor="image_url">URL de Imagem do carro:</StyledLabel>
      <StyledInput type="text" name="image_url" id="image_url" onChange={handleChange}/>

      <StyledLabel htmlFor="marca_modelo">Marca ou Modelo:</StyledLabel>
      <StyledInput type="text" name="marca_modelo" id="marca_modelo" onChange={handleChange}/>

      <StyledLabel htmlFor="ano">Ano do carro:</StyledLabel>
      <StyledInput type="text" name="ano" id="ano" onChange={handleChange}/>

      <StyledLabel htmlFor="placa">Placa:</StyledLabel>
      <StyledInput type="text" name="placa" id="placa" onChange={handleChange}/>

      <StyledLabel htmlFor="cor">Cor do carro:</StyledLabel>
      <StyledInput type="color" name="cor" id="cor" onChange={handleChange}/>
      <StyledButton type="submit">Cadastrar</StyledButton>

    </form>
  )
}

const StyledLabel = styled.label`
  display: block;
  font-weight: bolder;
`;

const StyledInput = styled.input`
  display: block;
  background: black;
  color: white;
  font-weight: bold;
`;

const StyledButton = styled.button`
  margin-top: 1rem;
  text-align: center;
`;

export default Form;