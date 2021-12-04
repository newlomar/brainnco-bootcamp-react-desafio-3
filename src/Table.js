import styled from 'styled-components';

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
    <StyledTable>
      <thead>
        <tr>
          <StyledTh>Imagem</StyledTh>
          <StyledTh>Marca ou Modelo</StyledTh>
          <StyledTh>Ano do Carro</StyledTh>
          <StyledTh>Placa</StyledTh>
          <StyledTh>Cor do Carro</StyledTh>
        </tr>
      </thead>
      <tbody>
        {
          cars.length > 0 ? 
            cars.map((item) => {
              return(
                <tr key={item.plate}>
                  <StyledTd><StyledImage src={`${item.image}`} alt="car" /></StyledTd>
                  <StyledTd>{item.brandModel}</StyledTd>
                  <StyledTd>{item.year}</StyledTd>
                  <StyledTd>{item.plate}</StyledTd>
                  <StyledTd>
                    <StyledDiv
                      style= {{ backgroundColor: `${item.color}` }}>
                    </StyledDiv>
                  </StyledTd>
                  <StyledTd><button onClick={handleDelete} plate={item.plate}>Excluir</button></StyledTd>
                </tr>
              );
            }) :
            <tr>
              <StyledTdListaVazia>'Nenhum carro encontrado.'</StyledTdListaVazia>
            </tr>
        }
      </tbody>
    </StyledTable>
  )
}

const StyledTable = styled.table` 
  border: 1px solid black;
  margin-top: 2rem;
  width: 100%;
  border-collapse: collapse;
`;
const StyledTh = styled.th` 
  border: 1px solid black;
`;
const StyledTd = styled.td` 
  border: 1px solid black;
  text-align: center;
`;

const StyledImage = styled.img`
  width: 100px;
  height: 100px;
`;

const StyledTdListaVazia = styled.td`
  font-size: 1.5rem;
`;

const StyledDiv = styled.div`
  width: 100px;
  height: 100px;
`;

export default Table;