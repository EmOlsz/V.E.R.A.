import React from 'react';

import Overlay from 'components/Overlay';
import Welcome from 'components/Welcome';
import Form from 'components/Form';

import 'styles/style.css';

const App = () => {
  return (
    <>
      <Overlay />
      <Welcome />
      <Form />
    </>
  );
}

export default App;
