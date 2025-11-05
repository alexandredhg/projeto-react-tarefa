import useTarefa from "../hooks/useTarefa"
import "./css/Tarefa.css"
import FormCadTarefa from "./FormCadTarefa"

const TelaTarefa = () => {
    const {listaTarefas, adicionar_tarefa, exibirMensagem, excluir_tarefa, exibir_detalhes_tarefa} = useTarefa()
    
    return(
        <>
            <h1 style={{textAlign:"center" }} tabIndex={1}>Minhas Tarefas</h1>


            <div className="box">
                <FormCadTarefa adicionar_tarefa={adicionar_tarefa} />
                {
                    listaTarefas.length === 0 ? (<p>Nenhuma Tarefa Cadastrada</p>):
                    listaTarefas.map(tarefa => (
                        <div key={tarefa.id} tabIndex={1} className="tarefa-box"  
                        style={tarefa.finalizada ? {borderLeft: "10px solid green"} : {borderLeft: "10px solid red"}}
                        role="Group"
                        aria-label= {tarefa.finalizada ? "Tarefa Finalizada" : "Tarefa não Finalizada" }
                        >
                            <h1 tabIndex={2}>
                                {tarefa.titulo}
                            </h1>
                            <div className="grid-botoes" role="group" aria-label="Ações">
                                <button className="botao-grid" 
                                role="group" 
                                aria-label="Excluir Tarefa" 
                                tabIndex={2} 
                                onClick={() => {
                                    excluir_tarefa(tarefa.id)                                                                       
                                }}>
                                    Excluir
                                </button>
                                <button className="botao-grid" tabIndex={2} role="group" aria-label="Exibir Detalhes" onClick={() => {
                                    exibir_detalhes_tarefa(tarefa.id)                                    
                                }}>Exibir Detalers</button>
                            </div>
                        </div>
                    ))
                }
            </div>        
        </>
    )
}

export default TelaTarefa