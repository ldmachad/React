import Card from "./components/card/Card"
import Contador from "./components/contador/Contador"
import Tarefa from "./components/tarefa/Tarefa"
import Home from "./pages/home/Home"

function App() {
    return (
        <>
            <Card titulo='Título 1' descricao='Descrição 1' />
            <Contador />
            <Tarefa />
            <Home />
        </>
    )
}

export default App