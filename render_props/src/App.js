import { useEffect } from 'react';
import './App.css';

const MousePosition = ({ render }) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMousePositionChange = (e) => {
      // use e.clientX and e.clientY to access the mouse position on the screen.
    };

    // subscription to a listener that will capture the user's mouse movement.
    window.addEventListener("mouseover", handleMousePositionChange);

    return () => {
      // subscription clean-up
      window.removeEventListener("mouseover", handleMousePositionChange);
    };
  }, []);

  // What should be returned here?
  return null;
};

// This component should not receive any props
const PanelMouseLogger = ({mousePosition}) => {
  // The below if statemen can be removed after the render props patter is implemented
  if (!mousePosition) {
    return null;
  }
  return (
    <div className='BasicTracker'>
      <p>Mouse position:</p>
      <div className='Row'>
        <span>x: {mousePosition.x}</span>
        <span>y: {mousePosition.y}</span>
      </div>
    </div>
  );
};

// This component should not receive any props
const PointMouseLogger = ({mousePosition}) => {
  // The below if statement can be removed after the rendoer props patter is implemented
  if (!mousePosition) {
    return null;
  }
  return (
    <p>
      ({mousePosition.x}, {mousePosition.y})
    </p>
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
