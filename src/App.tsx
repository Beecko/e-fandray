import './App.css';
import Profil from './Profil';
import ListAmis from './List-amis'
import Message from './ListMsg';
import Ami from './Ami';

function App() {
    return (
        <div className="App">
            <div className="row">
                <div className="col-2 h-full position-fixed" id="menu">
                    <Profil/>
                </div>
                <div className="col-3" id="list">
                    <ListAmis/>
                </div>
                <div className="col-5 bg-gray-100">
                    <Message/>
                </div>
                <div className="col-2">
                    <Ami/>
                </div>
            </div>
        </div>
    );
}

export default App;
