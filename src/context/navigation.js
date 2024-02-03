import { createContext, useState, useEffect } from 'react';

const NavigationContext = createContext();

function NavigationProvider({children}) {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    const [nav, setNav] = useState(false);

    useEffect(() => {
        const handler = () => {
            setCurrentPath(window.location.pathname)
        };
        
        window.addEventListener('popstate', handler);

        return () => {
            window.removeEventListener('popstate', handler);
        };

    }, []);

    const navigate = (to) => {
        window.history.pushState({}, '', to);
        setCurrentPath(to);
    }

    const handleNav = () => {
        setNav(!nav);
    };


    return (
        <NavigationContext.Provider value={{ currentPath, navigate, handleNav, nav}}>
            { children }
        </NavigationContext.Provider>
    );
}

export { NavigationProvider };
export default NavigationContext;