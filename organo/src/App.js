import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Formulario from './components/Formulario';
import Lista from './components/Lista';


function App() {

  const listGeneros = [
    {
      nome: 'Romance',
      corPrimaria: '#E2E2DF',
      corSecundaria: '#006466'
    },
    {
      nome: 'Novela',
      corPrimaria: '#D2D2CF',
      corSecundaria: '#065a60'
    },
    {
      nome: 'Ficção Científica',
      corPrimaria: '#E2CFC4',
      corSecundaria: '#0b525b'
    },
    {
      nome: 'Fantasia',
      corPrimaria: '#F7D9C4',
      corSecundaria: '#144552'
    },
    {
      nome: 'Ficção Histórica',
      corPrimaria: '#FAEDCB',
      corSecundaria: '#1b3a4b'
    },
    {
      nome: 'Ficção Policial/ Mistério',
      corPrimaria: '#C9E4DE',
      corSecundaria: '#212f45'
    },
    {
      nome: 'Infantil',
      corPrimaria: '#C6DEF1',
      corSecundaria: '#272640'
    },
    {
      nome: 'Quadrinhos',
      corPrimaria: '#DBCDF0',
      corSecundaria: '#312244'
    },
    {
      nome: 'Ficção LGBTQIAPN + ',
      corPrimaria: '#F2C6DE',
      corSecundaria: '#3e1f47'
    },
    {
      nome: 'Suspense',
      corPrimaria: '#F9C6C9',
      corSecundaria: '#4d194d'
    }
  ]

  const [livros, setLivros] = useState([])

  const aoNovoLivroAdicionado = (livro) => {
    console.log(livro)
    setLivros([...livros, livro])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario listGeneros={listGeneros.map(lista => lista.nome)} aoLivroCadastrado={livro => aoNovoLivroAdicionado(livro)} />

      {listGeneros.map(lista => <Lista
        key={lista.nome}
        nome={lista.nome}
        corPrimaria={lista.corPrimaria}
        corSecundaria={lista.corSecundaria}
        livros={livros.filter(livro => livro.lista === lista.nome)}
      />)}


    </div>
  );
}

export default App;
