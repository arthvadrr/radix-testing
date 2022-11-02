import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as Accordion from '@radix-ui/react-accordion';


// App.tsx
import {
  Popover,
  PopoverTrigger,
  PopoverContent
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
      <Popover>
        <Accordion.Root>
          root
        <Accordion.Item>
          item
        <Accordion.Header>
          header
        <Accordion.Trigger />
        </Accordion.Header>
        header
        <Accordion.Content />
        </Accordion.Item>
      </Accordion.Root>
    );
      </Popover>
    </div>
  );
}

export default App;
