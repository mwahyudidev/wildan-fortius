import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

function App() {
  return (
    <div className='bg-gray-900 min-h-screen'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
