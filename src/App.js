import { useEffect, useState } from "react";
import "./App.css"



function App() {

  const [ listaTarefas, setListaTarefas ] = useState( [] );
  const [ tarefa, setTarefa ] = useState({id: '', texto:"", status:""}  );
  
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
  function statusTarefa(id, status)
  {
    const index = listaTarefas.findIndex( (tarefa) => tarefa.id === id);
    listaTarefas[index].status = !status;
    setListaTarefas([...listaTarefas] );
  }

  useEffect( () => {
    setTarefa( { id:"" , texto:" ", status: "" });
  }, [ listaTarefas ] )

  return (
    <>
    <div className="rodape">
      <h1 className="titulo">To do list</h1>
    </div>
    <div className="todolista">
     
      <ul>
      <input maxLength="32"className= "tarefas"type="text" name="tarefa" placeholder="Digite sua tarefa" value={tarefa.texto} onChange={ (e) => setTarefa({id: Math.random(), texto: e.target.value,status:false } ) }/>
      <button className= "adicionar"onClick={addTarefa}>Add+</button>
      <div className="borda"> 
      {listaTarefas.map((item, index ) => (
          <li className= "lista" key={item.id}>{item.texto}<button onClick={() => statusTarefa (item.id, item.status) }>{item.status ? '✔' : '✘'}</button> <button onClick={() => excluirTarefa (item.id) } >🗑️</button></li>
      ))}

      </div>
     
      </ul>
     </div>
     <div className="caixa2">
      <h1 className="notas">Notas:</h1>
      <textarea className="texton"></textarea>
     </div>
    </>
  );
}

export default App;
