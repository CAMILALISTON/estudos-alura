import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [autor, setAutor] = useState('')
    const [imagem, setImagem] = useState('')
    const [genero, setGenero] = useState('')
    
    const aoSalvar = (event) => {
        event.preventDefault()
        props.aoLivroCadastrado({
            nome,
            autor,
            imagem,
            genero
        })
    }

    const generos = [
        'Romance',
        'Conto',
        'Novela',
        'Ficção Científica',
        'Fantasia',
        'Ficção Histórica',
        'Ficção Policial/Mistério',
        'Infantil',
        'Quadrinhos',
        'Ficção LGBTQIAPN+',
        'Suspense'
    ]


    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do livro</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome do livro"
                    placeholder="Digite o nome do livro"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />

                <CampoTexto
                    obrigatorio={true}
                    label="Autor"
                    placeholder="Digite seu cargo"
                    valor={autor}
                    aoAlterado={valor => setAutor(valor)}
                />

                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />

                <ListaSuspensa
                    obrigatorio={true}
                    label="Gêneros"
                    itens={generos}
                    valor={genero}
                    aoAlterado={valor => setGenero(valor)}
                />


                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario