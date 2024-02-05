import Navbar from "./Components/Navbar";
import Route from "./Components/Route";

import BableDabblePage from "./Pages/BabelDabblePage";
import BeonCarrierPage from "./Pages/BeonCarrierPage";
import CalculatorPage from "./Pages/CalculatorPage";
import AgeCalculator from "./Pages/AgeCalculator";
import KidianPage from "./Pages/KidianPage";
import LandingPage from "./Pages/LandingPage";
import PersonalProjectPage from "./Pages/PersonalProjectPage";
import ScatterCssPage from "./Pages/ScatterCssPage";


function App() {
    return (
        <div className="ml-auto mr-auto max-w-[1600px]">
            <Navbar />

            <div>
                <Route path="/">
                    <LandingPage />
                </Route>

                <Route path="/bableDabbleProject">
                    <BableDabblePage />
                </Route>

                <Route path="/beonCarrierProject">
                    <BeonCarrierPage />
                </Route>

                <Route path="/calculator">
                    <CalculatorPage />
                </Route>

                <Route path="/ageCalculator">
                    <AgeCalculator />
                </Route>

                <Route path="/kidianProject">
                    <KidianPage />
                </Route>

                <Route path="/sideprojects">
                    <PersonalProjectPage />
                </Route>

                <Route path="/scatterCssPage">
                    <ScatterCssPage />
                </Route>
            </div>

        </div>

    )
}
export default App;