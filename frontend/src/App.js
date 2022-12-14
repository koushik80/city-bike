import React, { Suspense } from 'react';
import Routes from './Routes';

const App = () => {
  return (
    <Suspense fallback={<h1>Site Loading...</h1>}>
      <Routes />
    </Suspense>
  );
};

export default App;
