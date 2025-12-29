import React from 'react';
import { createContext } from 'react';

// Context create किया
export const authDataContext = createContext();

function AuthContext({ children }) {
    // Production में deploy करने के बाद यहाँ backend का live URL डालना
    const serverUrl = "http://localhost:8000";  

    const value = {
        serverUrl
    };

    return (
        <authDataContext.Provider value={value}>
            {children}
        </authDataContext.Provider>
    );
}

export default AuthContext;
