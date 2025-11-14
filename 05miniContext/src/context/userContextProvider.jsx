import React from "react";
import UserContext from "./userContext";

// Provider component that supplies user state to consuming components
const UserContextProvider = ({ children }) => {
    // local state for the currently authenticated/selected user
    const [user, setUser] = React.useState(null);

    // The context value exposes both the user object and a setter so consumers can update it
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {/* Render child components that will consume the context */}
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;