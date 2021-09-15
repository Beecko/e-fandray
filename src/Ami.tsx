import './App.css';

function App() {
    return (
        <div className="ami">
            <div className="pt-10 mx-5">
                <img className="w-28 rounded-circle" src="/img/profil.jpg" />
            </div>
            <div>
                <p className="pt-2 text-gray-800 text-center text-sm font-bold">
                    Rina Beecko</p>
            </div>

            <div className="row pt-3" id="nbr">
                <div className="col-4">
                    <p className="text-center text-gray-600 font-bold">65<br /><span className="font-normal">Amis</span></p>
                </div>
                <div className="col-4">
                    <p className="text-center text-gray-600 font-bold">65<br /><span className="font-normal">Amis</span></p>
                </div>
                <div className="col-4">
                    <p className="text-center text-gray-600 font-bold">65<br /><span className="font-normal">Amis</span></p>
                </div>
            </div>



            <div className="row pt-4">
                <div className="col-6">
                    <p className="text-sm font-monospace" >Photos</p>
                </div>
                <div className="col-6">
                    <a className="text-sm " href="">Voir plus...</a>
                </div>
            </div>

            <div>
                <div className="row">
                    <div className="col-6">
                        <img src="/img/img01.jpg" alt="" />
                    </div>
                    <div className="col-6">
                        <img src="/img/img02.jpg" alt="" />
                    </div>
                </div>
                <div className="row pt-2">
                    <div className="col-6">
                        <img src="/img/img03.jpg" alt="" />
                    </div>
                    <div className="col-6">
                        <img src="/img/img04.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div >
    );
}

export default App;