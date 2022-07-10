import React from 'react'

import { MyForm } from 'iplan-library-sample'

const App = () => {
  return <div style={{ "margin": "10px" }}>
    <MyForm onSubmit={data => alert(JSON.stringify(data))} />
  </div>
}

export default App
