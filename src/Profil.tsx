import './App.css';

function App() {
    return (
        <div className="Profil">
            <div className="p-2">
                <img className="w-44" src="/img/efandray.png" />
            </div>
            <div className="pt-2 mx-5">
                <img className="w-28 rounded-circle" src="/img/photo.jpg" />
            </div>
            <div>
                <p className="pt-1 text-gray-800 text-center text-sm">
                    RAVELOHARISON Iriana<br /><span className="text-gray-600">IGGLIA3</span></p>
            </div>
            <nav className="pt-5 ">
                <a className="no-underline" href="">
                    <div className="h-10 row pt-2 shadow-xl " id="selectMenu">
                        <div className="col-3 ml-4">
                            <img className="icons" src="/img/msg.png" alt="" />
                        </div>
                        <div className="col-8 p-0">
                            <p className=" text-black ">Messages</p>
                        </div>
                    </div>
                </a>

                <a className="no-underline" href="">
                    <div className="h-10 pt-2 row hover:bg-green-200">
                        <div className="col-3 ml-4">
                            <img className="icons" src="/img/msgSend.png" alt="" />
                        </div>
                        <div className="col-8 p-0">
                            <p className=" text-black ">Messages Envoyé</p>
                        </div>
                    </div>
                </a>

                <a className="no-underline " href="">
                    <div className="h-10 pt-2 row hover:bg-green-200">
                        <div className="col-3 ml-4">
                            <img className="icons" src="/img/delete.png" alt="" />
                        </div>
                        <div className="col-8 p-0">
                            <p className=" text-black ">Corbeille</p>
                        </div>
                    </div>
                </a>

                <a className="no-underline" href="">
                    <div className="h-10 pt-2 row hover:bg-green-200">
                        <div className="col-3 ml-4">
                            <img className="icons" src="/img/settingProfil.png" alt="" />
                        </div>
                        <div className="col-8 p-0">
                            <p className=" text-black ">Modification</p>
                        </div>
                    </div>
                </a>

                <a className="no-underline" href="">
                    <div className="h-10 pt-2 row hover:bg-green-200">
                        <div className="col-3 ml-4">
                            <img className="icons" src="/img/settings.png" alt="" />
                        </div>
                        <div className="col-8 p-0">
                            <p className=" text-black ">Paramètres</p>
                        </div>
                    </div>
                </a>


                {/* <ul>
                    <div className="bg-blue-100 w-full">
                        <li className="p-2"></li>
                    </div>
                    <div>
                        <li className="p-2"><a className="no-underline text-black" href="#">Menu 1</a></li>
                    </div>
                    <div>
                        <li className="p-2"><a className="no-underline text-black" href="#">Menu 1</a></li>
                    </div>
                    <div>
                        <li className="p-2"><a className="no-underline text-black" href="#">Menu 1</a></li>
                    </div>
                    <div>
                        <li className="p-2"><a className="no-underline text-black" href="#">Menu 1</a></li>
                    </div>
                </ul> */}
            </nav>
        </div>
    );
}

export default App;