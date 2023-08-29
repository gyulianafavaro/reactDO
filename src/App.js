import { useEffect, useState } from "react";



function App() {

  const [ listaTarefas, setListaTarefas ] = useState( [] );
  const [ tarefa, setTarefa ] = useState({id: '', texto: "" }  );
  
  function addTarefa()
  {
    if(tarefa.texto !== "" ){
      setListaTarefas([...listaTarefas, tarefa ]);
    }
    
  }
  function excluirTarefa( id )
  {
    const novaLista = listaTarefas.filter( (tarefa) => tarefa.id !== id);
    setListaTarefas( novaLista );
  }

  useEffect( () => {
    setTarefa( { id:"" , texto:" " });
  }, [ listaTarefas ] )

  return (
    <>
    <header>
      <h1>React DO</h1>
    </header>
     <div>
      <ul>
      <input type="text" name="tarefa" placeholder="Digite sua tarefa" value={tarefa.texto} onChange={ (e) => setTarefa({id: Math.random(), texto: e.target.value } ) }/>
      <button onClick={addTarefa}>Adicionar</button>
      {listaTarefas.map((item, index ) => (
          <li key={index}>{item.texto}  <button onClick={() => excluirTarefa (item.id) } >Excluir</button></li>
      ))}
      </ul>
     </div>
    </>
  );
}

export default App;
