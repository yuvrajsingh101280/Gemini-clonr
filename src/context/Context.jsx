import React, { createContext } from "react";
import runChat from "../config/gemini";
import { useState } from "react";

export const Context = createContext();

const ContextProvider = (props) => {
  const [Input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [previousPrompt, setPreviousPrompt] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const delayPara = (index, nextword) => {};

  const onSent = async (prompt) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);
    setRecentPrompt(Input);
    const response = await runChat(Input);
    // let responseArray = response.split("**");
    // let newResponse;
    // for (let i = 0; i < responseArray.length; i++) {
    //   if ((i = 0 || i % 2 !== 1)) {
    //     newResponse += responseArray[i];
    //   } else {
    //     newResponse += "<b>" + responseArray[i] + "</b>";
    //   }
    // }

    setResultData(response);
    setLoading(false);
    setInput("");
  };

  const contextValue = {
    previousPrompt,
    setPreviousPrompt,
    onSent,
    setRecentPrompt,
    recentPrompt,
    loading,
    resultData,
    Input,
    setInput,
    showResult,
  };
  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
