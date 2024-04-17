import React from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './app/routes/routes';

function App() {
  return (
    <div className="App">
     <RouterProvider router={router}>
      
     </RouterProvider>
    </div>
  );
}

export default App;
