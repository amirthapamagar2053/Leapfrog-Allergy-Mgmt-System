import React, { useEffect } from "react";
import Router from "./components/Router";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./reducers/userReducer";
import { getAllergy } from "./reducers/allergyReducers";

const theme = createTheme({
  primary: { main: "#2ecc71" },
  secondary: { main: "#102b7b" },
  text: {
    main: [
      "MarkOT",
      "-apple-system",
      "BlinkMacSystemFont",
      "avenir next",
      "avenir",
      "helvetica neue",
      "helvetica",
      "Ubuntu",
      "roboto",
      "noto",
      "segoe ui",
      "arial",
      "sans-serif",
    ],
  },
});

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users);
  useEffect(() => {
    if (user !== null) {
      dispatch(setUser(JSON.parse(localStorage.getItem("loggedInUser"))));
      dispatch(getAllergy());
    }
  }, []);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </>
  );
};

export default App;
