import React from 'react';

import Overlay from 'components/Overlay';
import Welcome from 'components/Welcome';

import 'styles/style.css';

const App = () => {
  return (
    <>
      <Overlay />
      <Welcome />
    </>
  );
}

export default App;
