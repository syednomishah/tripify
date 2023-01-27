import React from 'react';
import AppNavigation from './navigation/AppNavigation';
import store from './redux/store'
import { Provider } from 'react-redux'


function App(){
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
    
  );
}

export default App;
