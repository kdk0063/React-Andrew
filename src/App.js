import Navbar from "./Components/Navbar";
import Route from "./Components/Route";
import BeonCarrierPage from './Pages/BeonCarrierPage';
import KidianPage from './Pages/KidianPage';
// import DropdownPage from './Pages/DropdownPage';
// import ButtonPage from './Pages/ButtonPage';
// import ModalPage from "./Pages/ModalPage";
import LandingPage from "./Pages/LandingPage";

function App() {
    return (
        <div className="ml-auto mr-auto max-w-[1600px]">
            <Navbar />
           <div>
                <Route path="/beonCarrierProject">
                    <BeonCarrierPage />
                </Route>
                <Route path="/kidianProject">
                    <KidianPage />
                </Route>
                <Route path="/">
                    <LandingPage />
                </Route>
           </div>
        </div>
        
    )
}
export default App;