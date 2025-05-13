import './Lista.css'
import Livro from '../Livro';

const lista = (props) => {
    const css = { backgroundColor: props.corPrimaria }

    return (
        <section className='lista' style={css}>
            <h3 style={{ borderColor: props.corSecundaria }}>{props.nome}</h3>

            <div className='livros'>
                {props.livros.map(livro => <Livro nome={livro.nome} autor={livro.autor} imagem={livro.imagem} />)}
            </div>
        </section>
    )
}

export default lista