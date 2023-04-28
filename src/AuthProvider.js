import React, { useState, useEffect } from "react";
import AuthContext from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({
    id: null,
    name: '',
    email: '',
    role: '',
  });
  
  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/user", {
          method: "GET",
          credentials: "include",
        });
        const data = await response.json();
        setCurrentUser(data.user);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCurrentUser();
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
