import React from 'react';
import Image from './image';
import cat from './cat.jpg';

function App() {
  return (
    <main>
      <Image source={ cat } alternativeText='Cute cat staring'/>
    </main>
  );
}

export default App;
