import React from 'react';
import logo from './logo.svg';
import './App.css';

// App.tsx
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from './Popover';

function App() {
  return (
    <div className="App">
      <Popover>
        <PopoverTrigger>clicky!
        </PopoverTrigger>
        <PopoverContent>
          hellloooo
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default App;
