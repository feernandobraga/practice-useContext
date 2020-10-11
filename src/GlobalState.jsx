import React, { useState } from "react";

export const GlobalContext = React.createContext(); // creating a Context

// creating a react component that allows for childrens
// this is the component that will wrap the main app
export const GlobalProvider = ({ children }) => {

  const [clicks, setClicks] = useState(0)

  const incrementClicks = () => {
    setClicks(clicks + 1)
  }

  const avatarUrls = {
    girl:"https://pickaface.net/gallery/avatar/unr_sample_170130_2257_9qgawp.png",
    guy: "https://pickaface.net/gallery/avatar/unr_sample_161118_2054_ynlrg.png",
    clicks,
    incrementClicks
  };

  return <GlobalContext.Provider value={avatarUrls}>{children}</GlobalContext.Provider>;
};
