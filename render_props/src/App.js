import { useState, useEffect } from 'react';
import './App.css';

const MousePosition = ({ render }) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMousePositionChange = (e) => {
      // use e.clientX and e.clientY to access the mouse position on the screen.
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    // subscription to a listener that will capture the user's mouse movement.
    window.addEventListener("mouseover", handleMousePositionChange);

    return () => {
      // subscription clean-up
      window.removeEventListener("mouseover", handleMousePositionChange);
    };
  }, []);

  // Return the x,y coords.
  return render({ mousePosition });
};

// This component renders the mouse coords when it's within the designated panel
const PanelMouseLogger = () => {
  return (
    <div className='BasicTracker'>
      <p>Mouse position:</p>
      <MousePosition
        render={({ mousePosition }) => (
          <div className='Row'>
            <span>x: {mousePosition.x}</span>
            <span>y: {mousePosition.y}</span>
          </div>
        )}
      />
    </div>
  );
};

// This component renders the mouse coords 
const PointMouseLogger = ({mousePosition}) => {
  return (
    <MousePosition
      render={({ mousePosition }) => (
        <p>
          ({mousePosition.x}, {mousePosition.y})
        </p>        
      )}
    />
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Little Lemon Restaurant 🍕
      </header>
      <PanelMouseLogger />
      <PointMouseLogger />
    </div>
  );
}

export default App;
