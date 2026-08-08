import Cursor from "./Components/Cursor";
import Navbar from "./Components/Navbar";
import PortfolioSidebar from "./Components/PortfolioSidebar";
import Router from "./Pages/Router";
import useNavigation from './hooks/use-navigation';

function App() {
    const { currentPath } = useNavigation();
    const isHome = currentPath === '/';

    return (
        <div className="flex min-h-screen">
            <Cursor />
            {isHome && <PortfolioSidebar />}
            <div className={`flex-1 min-w-0 ${isHome ? 'md:ml-[110px]' : ''}`}>
                {/* Show Navbar on non-home pages, or on mobile for home */}
                <div className={isHome ? 'md:hidden' : ''}>
                    <Navbar />
                </div>
                <Router />
            </div>
        </div>
    );
}
export default App;
