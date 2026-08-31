import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

// Create the Context
// This will allow us to share data with different components
export const AppContext = createContext();


// Context Provider
// "children" means whatever we put inside <AppContextProvider>
export const AppContextProvider = ({ children }) => {

    // useNavigate allows us to move between pages using JavaScript
    const navigate = useNavigate();

    // Store the currently logged-in user
    // Initially, there is no user
    const [user, setUser] = useState(null);

    // Store whether the current user is a seller
    // Initially false
    const [isSeller, setIsSeller] = useState(false);

    // Control whether the Login modal/page should be displayed
    // Initially false = Login modal is closed
    const [showUserLogin, setShowUserLogin] = useState(false);


    // All these values will be shared with components
    // that use useAppContext()
    const value = {
        navigate,
        user,
        setUser,
        isSeller,
        setIsSeller,
        showUserLogin,
        setShowUserLogin
    };


    return (
        // Provider makes the value above available
        // to all child components
        <AppContext.Provider value={value}>

            {children}

        </AppContext.Provider>
    );
};


// Custom hook
// Instead of writing useContext(AppContext) everywhere,
// we can simply write useAppContext()
export const useAppContext = () => {
    return useContext(AppContext);
};