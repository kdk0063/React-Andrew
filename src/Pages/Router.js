import Route from "../Components/Route";

import BableDabblePage from "./BabelDabblePage";
import BeonCarrierPage from "./BeonCarrierPage";
import CalculatorPage from "./CalculatorPage";
import AgeCalculator from "./AgeCalculator";
import KidianPage from "./KidianPage";
import LandingPage from "./LandingPage";
import PersonalProjectPage from "./PersonalProjectPage";
import ScatterCssPage from "./ScatterCssPage";
import TipSplitterPage from "./TipSplitterPage";

function Router() {
    return(
        <div>
            <Route path="/">
                <LandingPage />
            </Route>

            <Route path="/age-calculator">
                <AgeCalculator />
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

            <Route path="/kidianProject">
                <KidianPage />
            </Route>

            <Route path="/sideprojects">
                <PersonalProjectPage />
            </Route>

            <Route path="/scatter-css-page">
                <ScatterCssPage />
            </Route>

            <Route path="/tip-splitter">
                <TipSplitterPage />
            </Route>
        </div>
    )
}
export default Router;