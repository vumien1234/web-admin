import React from 'react';
import Routing from './Routing';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from './themeprovider';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Routing/>
          <CssBaseline/>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
