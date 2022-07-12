import React from 'react';
import {Button} from '@mui/material'

import { MyForm, MyButton } from 'iplan-library-sample'

const App = () => {
  return <div style={{ "margin": "10px" }}>
    <MyForm onSubmit={data => alert(JSON.stringify(data))} />
    <MyButton />
    <Button />
  </div>
}

export default App
