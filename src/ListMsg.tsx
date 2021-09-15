import './App.css';

function App() {
    return (
        <div className="message">
            <div className="row pt-2 border-b">
                <p className="text-center font-bold text-md">Rina Beecko</p>
            </div>
            <div className="overflow-y-scroll overflow-x-hidden" id="msg">
                <div><p className="text-center text-sm text-gray-500">12:35</p></div>
                <div className="row mt-2">
                    <div className="col-2">
                        <img className="rounded-circle w-12" src="/img/profil.jpg" />
                    </div>
                    <div className=" col-4 msgAmi p-2 w-20 h-12 rounded-2xl shadow-lg">
                        <p className="pt-1 pl-1">Message</p>
                    </div>
                </div>

                <div><p className="text-center text-sm text-gray-500">12:50</p></div>
                <div className="row mt-2">
                    <div className="col-6"></div>
                    <div className=" col-4 msgMoi p-2 w-20 h-12 rounded-2xl shadow-lg">
                        <p className="pt-1 pl-1 text-end">Message</p>
                    </div>
                    <div className="col-2">
                        <img className="rounded-circle w-12" src="/img/photo.jpg" />
                    </div>
                </div>

                <div><p className="text-center text-sm text-gray-500">12:59</p></div>
                <div className="row mt-2">
                    <div className="col-2">
                        <img className="rounded-circle w-12" src="/img/profil.jpg" />
                    </div>
                    <div className=" col-4 msgAmi p-2 w-20 h-12 rounded-2xl shadow-lg">
                        <p className="pt-1 pl-1">Message</p>
                    </div>
                </div>

                <div><p className="text-center text-sm text-gray-500">13:05</p></div>
                <div className="row mt-2">
                    <div className="col-6"></div>
                    <div className=" col-4 msgMoi p-2 w-20 h-12 rounded-2xl shadow-lg">
                        <p className="pt-1 pl-1 text-end">Message</p>
                    </div>
                    <div className="col-2">
                        <img className="rounded-circle w-12" src="/img/photo.jpg" />
                    </div>
                </div>

                <div><p className="text-center text-sm text-gray-500">13:45</p></div>
                <div className="row mt-2">
                    <div className="col-2">
                        <img className="rounded-circle w-12" src="/img/profil.jpg" />
                    </div>
                    <div className=" col-4 msgAmi p-2 w-20 h-12 rounded-2xl shadow-lg">
                        <p className="pt-1 pl-1">Message</p>
                    </div>
                </div>

                <div><p className="text-center text-sm text-gray-500">13:49</p></div>
                <div className="row mt-2">
                    <div className="col-6"></div>
                    <div className=" col-4 msgMoi p-2 w-20 h-12 rounded-2xl shadow-lg">
                        <p className="pt-1 pl-1 text-end">Message</p>
                    </div>
                    <div className="col-2">
                        <img className="rounded-circle w-12" src="/img/photo.jpg" />
                    </div>
                </div>

                <div><p className="text-center text-sm text-gray-500">14:21</p></div>
                <div className="row mt-2">
                    <div className="col-2">
                        <img className="rounded-circle w-12" src="/img/profil.jpg" />
                    </div>
                    <div className=" col-4 msgAmi p-2 w-20 h-12 rounded-2xl shadow-lg">
                        <p className="pt-1 pl-1">Message</p>
                    </div>
                </div>

                <div><p className="text-center text-sm text-gray-500">14:25</p></div>
                <div className="row mt-2">
                    <div className="col-6"></div>
                    <div className=" col-4 msgMoi p-2 w-20 h-12 rounded-2xl shadow-lg">
                        <p className="pt-1 pl-1 text-end">Message</p>
                    </div>
                    <div className="col-2">
                        <img className="rounded-circle w-12" src="/img/photo.jpg" />
                    </div>
                </div>

                <div><p className="text-center text-sm text-gray-500">14:34</p></div>
                <div className="row mt-2">
                    <div className="col-2">
                        <img className="rounded-circle w-12" src="/img/profil.jpg" />
                    </div>
                    <div className=" col-4 msgAmi p-2 w-20 h-12 rounded-2xl shadow-lg">
                        <p className="pt-1 pl-1">Message</p>
                    </div>
                </div>

                <div><p className="text-center text-sm text-gray-500">14:54</p></div>
                <div className="row mt-2">
                    <div className="col-6"></div>
                    <div className=" col-4 msgMoi p-2 w-20 h-12 rounded-2xl  shadow-lg">
                        <p className="pt-1 pl-1 text-end">Message</p>
                    </div>
                    <div className="col-2">
                        <img className="rounded-circle w-12" src="/img/photo.jpg" />
                    </div>
                </div>

            </div>
            <div className="pt-3 row">
                <div className="col-10">
                    <textarea className="w-full h-10 rounded-xl pl-2 pt-2 resize-none" placeholder="Message" name="" id="i"></textarea>
                </div>
                <div className="col-2">
                    <a href="">
                        <img className="w-8 pt-2" src="/img/send.png" alt="" />
                    </a>
                </div>
            </div>
        </div>
    );
}


export default App;