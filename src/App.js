import React from 'react';

function Food({Vitamin}){
  return <h1>{Vitamin}</h1>;
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food  Vitamin ="Vitamin C" />
      <Food  Vitamin ="Vitamin B" />
      <Food  Vitamin ="Vitamin A" />
      <Food  Vitamin ="Vitamin D" />
    </div>
  );
}

export default App;
