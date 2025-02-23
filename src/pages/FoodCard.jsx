import React, {createContext,useState} from "react";

export const FoodCard= createContext();

export const FoodProvider=({ children }) => {
  const [posts,setPosts] = useState([]);

  return (
    <FoodCard.Provider value={{ posts, setPosts }}>
      {children}
    </FoodCard.Provider>
  );
};
