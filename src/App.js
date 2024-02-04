import Navbar from "./Components/Navbar";
import Route from "./Components/Route";
import BableDabblePage from './Pages/BabelDabblePage';
import BeonCarrierPage from './Pages/BeonCarrierPage';
import KidianPage from "./Pages/KidianPage";
import LandingPage from "./Pages/LandingPage";
import PersonalProjectPage from "./Pages/PersonalProjectPage";

function App() {
    return (
        <div className="ml-auto mr-auto max-w-[1600px]">
            <Navbar />
            <div>
                <Route path="/bableDabbleProject">
                    <BableDabblePage />
                </Route>
                <Route path="/beonCarrierProject">
                    <BeonCarrierPage />
                </Route>
                <Route path="/kidianProject">
                    <KidianPage />
                </Route>
                <Route path="/">
                    <LandingPage />
                </Route>
                <Route path="/sideprojects">
                    <PersonalProjectPage />
                </Route>
            </div>
        </div>

    )
}
export default App;