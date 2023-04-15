const ItemLista = ({ id, titulo, autor, ano, preco, foto, excluirClick, alterarClick }) => {
    return (
        <>
            <tr>
                <td>{id}</td>
                <td>{titulo}</td>
                <td>{autor}</td>
                <td>{ano}</td>

                <td className=''>
                    {Number(preco).toLocaleString("pt-br", { minimumFractionDigits: 2 })}
                </td>

                <td className=''>
                    <img src={foto} alt="Capa do livro" width="75" />
                </td>

                <td className=''>
                    <i className='exclui text-danger fw-bold' onClick={excluirClick} title='Excluir'>&#10008;</i>
                    <i className='altera text-success fw-bold ms-4' onClick={alterarClick} title='Alterar'>&#36;</i>
                </td>
            </tr>
        </>
    );
}

export default ItemLista;