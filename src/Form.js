function Form() {
  return (
    <form>
      <label htmlFor="image_url">URL de Imagem do carro:</label>
      <input type="text" name="image_url" id="image_url"/>

      <label htmlFor="marca_modelo">Marca ou Modelo:</label>
      <input type="text" name="marca_modelo" id="marca_modelo" />

      <label htmlFor="ano">Ano do carro:</label>
      <input type="text" name="ano" id="ano" />

      <label htmlFor="placa">Placa:</label>
      <input type="text" name="placa" id="placa" />

      <label htmlFor="cor">Cor do carro:</label>
      <input type="color" name="cor" id="cor" value="#000000" />
      <button>Cadastrar</button>

    </form>
  )
}

export default Form;