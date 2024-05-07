import "./App.scss"
import Header from "./components/Header/Header"
import { Link } from "react-router-dom"

const App = () => {
    return (
        <div className="App">
            <Header />
            <div>
                <button>
                    <Link to="/users">go to user page</Link>
                </button>
                <button>
                    <Link to="/admins">go to admin page</Link>
                </button>
            </div>
        </div>
    )
}

export default App
