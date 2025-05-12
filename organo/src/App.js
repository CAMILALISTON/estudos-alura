import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Formulario from './components/Formulario';


function App() {

  const [livros, setLivros] = useState([])

  const aoNovoLivroAdicionado = (livro) => {
    console.log(livro)
    setLivros([...livros, livro])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoLivroCadastrado={livro => aoNovoLivroAdicionado(livro)} />

    </div>
  );
}

export default App;
