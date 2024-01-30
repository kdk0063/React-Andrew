import Link from "./Components/Link";
import Route from "./Components/Route";
import AccordionPage from './Pages/AccordionPage';
import DropdownPage from './Pages/DropdonwPage';

function App() {
    return (
        <div>  
           <Link to="/accordion">Go to accordion</Link>
           <Link to="/dropdown">Go to dropdown</Link>

           <div>
                <Route path="/accordion">
                    <AccordionPage />
                </Route>
                <Route path="/dropdown">
                    <DropdownPage />
                </Route>
           </div>
        </div>
        
    )
};

export default App;